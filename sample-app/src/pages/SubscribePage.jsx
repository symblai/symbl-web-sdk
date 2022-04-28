import React, { useState } from "react";
import "./subscribe.css";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import NavBar from "../components/NavBar";
import { Symbl, SubscribeAPIConnection } from "@symblai/symbl-web-sdk";
import BasicTabs from "../components/InsightsTabs";
import Box from "@mui/material/Box";

const symbl = new Symbl();

const initSDK = async () => {
  await symbl.init({
    appId: process.env.REACT_APP_APP_ID,
    appSecret: process.env.REACT_APP_APP_SECRET,
    //accessToken: process.env.AUTH_TOKEN,
    basePath: process.env.REACT_APP_BASE_PATH,
  });
};

let subscribedStream;

const SubscribePage = () => {
  const [connectionId, setConnectionId] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [caption, setCaption] = useState(
    "Enter Connection Id and subscibe. Captions will appear here"
  );
  const [followUps, setFollowUps] = useState([]);
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [actionItems, setActionItems] = useState([]);
  const [myTrackers, setMyTrackers] = useState([]);

  const handleTopicsUpdates = (topics) => {
    setTopics([]);
    topics.forEach((insight) => {
      handleInsightsUpdates(insight);
    });
  };

  const handleInsightsUpdates = (insight) => {
    if (insight["type"] === "follow_up") {
      setFollowUps((prev) => [...prev, insight["payload"]["content"]]);
    } else if (insight["type"] === "action_item") {
      setActionItems((prev) => [...prev, insight["payload"]["content"]]);
    } else if (insight["type"] === "question") {
      setQuestions((prev) => [...prev, insight["payload"]["content"]]);
    } else if (insight["type"] === "topic") {
      setTopics((prev) => [...prev, insight["phrases"]]);
    }
  };

  const handleTrackersUpdates = (trackers) => {
    const t = myTrackers;
    trackers.forEach((tracker) => {
      tracker.matches.forEach((match) => {
        t.push(match.value);
      });
    });
    setMyTrackers(t);
  };

  const handleSubscribeClick = async () => {
    if (!subscribing && connectionId) {
      setSubscribing(true);

      if (!subscribed) {
        subscribedStream = await new SubscribeAPIConnection(connectionId);
        await subscribedStream.connect();

        subscribedStream.on("speech_recognition", (data) => {
          if (data) {
            const { punctuated } = data;
            setCaption(punctuated.transcript);
          }
        });

        subscribedStream.on("topic", (data) => {
          if (data) {
            handleTopicsUpdates(data);
          }
        });

        subscribedStream.on("follow_up", (data) => {
          handleInsightsUpdates(data);
        });

        subscribedStream.on("question", (data) => {
          handleInsightsUpdates(data);
        });

        subscribedStream.on("action_item", (data) => {
          handleInsightsUpdates(data);
        });

        subscribedStream.on("messages", (data) => {
          console.log(data);
        });

        subscribedStream.on("tracker", (data) => {
          handleTrackersUpdates(data);
        });

        subscribedStream.on("connected", (data) => {
          console.log("ON subscribed " + data);
        });

        subscribedStream.on("disconnected", (data) => {
          console.log("ON unsubscribed " + data);
        });

        setSubscribing(false);
        setSubscribed(true);
      } else {
        console.log("Already subscribed, closing stream", subscribedStream);
        setSubscribing(false);
        subscribedStream.disconnect();
        setSubscribed(false);
      }
    } else {
      console.log("Subscription in progress...");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="streaming-parent">
        <h3 className="streamingHeader">Subscribe</h3>
        <Stack spacing={3}>
          <Input
            onChange={(event) => setConnectionId(event.target.value)}
            placeholder="enter the connection id here"
          ></Input>
          <Button variant="outlined" onClick={handleSubscribeClick}>
            {subscribed ? "subscribed" : "subscribe"}
          </Button>
        </Stack>
        <h3 className="streamingHeader">Speech to text</h3>
        <Stack spacing={2} direction="row">
          <Box
            component="div"
            sx={{
              whiteSpace: "normal",
              my: 2,
              bgcolor: "#0b1a29",
              padding: 2,
              fontSize: "1.3rem",
            }}
          >
            {caption}
          </Box>
        </Stack>
        <h3 className="streamingHeader">Insights</h3>
        <Stack>
          <BasicTabs
            style={{ margin: "0 auto" }}
            followUps={followUps}
            topics={topics}
            questions={questions}
            actionItems={actionItems}
            trackers={myTrackers}
          />
        </Stack>
      </div>
    </div>
  );
};

(async () => {
  await initSDK();
})();

export default SubscribePage;
