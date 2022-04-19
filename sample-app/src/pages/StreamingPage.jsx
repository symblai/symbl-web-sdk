import "../App.css";
import React from "react";
import MicComponent from "../components/MicComponent";
import PlayButton from "../components/PlayButton";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import BasicTabs from "../components/InsightsTabs";
import { Symbl } from "@symblai/symbl-web-sdk";
import { v4 } from "uuid";

let stream, subscribedStream;

let connectionId;

window.connectionActive = false;

const symbl = new Symbl({
  appId: process.env.REACT_APP_APP_ID,
  appSecret: process.env.REACT_APP_APP_SECRET,
  //accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  basePath: process.env.REACT_APP_BASE_PATH,
});

function StreamingPage() {
  const [started, setStarted] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [muted, setMuted] = useState(true);
  const [muting, setMuting] = useState(false);
  const [caption, setCaption] = useState(
    "Hit the Play button to connect! Captions will appear here"
  );
  const [renderViaSubscription, setRenderViaSubscription] = useState(false);
  const [followUps, setFollowUps] = useState([]);
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [actionItems, setActionItems] = useState([]);
  const [myTrackers, setMyTrackers] = useState([]);

  const initiateConnection = async () => {
    const id = v4();

    connectionId = id;

    stream = await symbl.createConnection(id);

    return stream;
  };

  const handleTopicsUpdates = (topics) => {
    setTopics([]);
    topics.forEach((insight) => {
      handleInsightsUpdates(insight);
    });
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

  const handleInsightsUpdates = (insight) => {
    if (insight["type"] === "follow_up") {
      setFollowUps((prev) => [...prev, insight["payload"]["content"]]);
    } else if (insight["type"] === "action_item") {
      setActionItems((prev) => [...prev, insight["payload"]["content"]]);
    } else if (insight["type"] === "question") {
      setQuestions((prev) => [...prev, insight["payload"]["content"]]);
    } else if (insight["type"] === "topic") {
      console.log("TOPIC: " + insight["phrases"]);
      setTopics((prev) => [...prev, insight["phrases"]]);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div style={{ width: "80%", maxWidth: "80%" }}>
          <Stack direction="column" spacing={4}>
            <h3 className="streamingHeader">Streaming</h3>
            <h6>
              Connection ID:{" "}
              {started ? connectionId : "  streaming not started"}
            </h6>
            <Stack>
              <Stack
                spacing={4}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <MicComponent
                  started={started}
                  muted={muted}
                  muting={muting}
                  stream={stream}
                  setMuting={setMuting}
                  setMuted={setMuted}
                  setCaption={setCaption}
                />
                <PlayButton
                  connecting={connecting}
                  setConnecting={setConnecting}
                  setCaption={setCaption}
                  setMuted={setMuted}
                  started={started}
                  setStarted={setStarted}
                  initiateConnection={initiateConnection}
                  subscribedStream={subscribedStream}
                  renderViaSubscription={renderViaSubscription}
                  setRenderViaSubscription={setRenderViaSubscription}
                  handleInsightsUpdates={handleInsightsUpdates}
                  handleTopicsUpdates={handleTopicsUpdates}
                  handleTrackersUpdates={handleTrackersUpdates}
                  connectionID={true}
                />
              </Stack>
              <h3 className="streamingHeader">Speech to text</h3>
              <Stack direction="row" style={{ margin: "0 auto" }}>
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
              <Stack style={{ margin: "0 auto" }}>
                <Stack
                  spacing={4}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  style={{ margin: "0 auto" }}
                >
                  <BasicTabs
                    followUps={followUps}
                    topics={topics}
                    questions={questions}
                    actionItems={actionItems}
                    trackers={myTrackers}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </header>
    </div>
  );
}

export default StreamingPage;
