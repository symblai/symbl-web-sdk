import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { Fab } from "@mui/material";

const PlayButton = (props) => {
  let stream;
  const handleStartClick = async () => {
    if (!props.connecting) {
      props.setConnecting(true);
      props.setCaption("Initalizing connection...");

      if (!props.started) {
        stream = await props.initiateConnection({});

        stream.on("speech_recognition", (data) => {
          if (data) {
            const { punctuated } = data;
            if (!props.renderViaSubscription) {
              if (data.user.name === "user1" || !props.setCaption2) {
                props.setCaption(`${data.user.name}: ${punctuated.transcript}`);
              } else {
                props.setCaption2(
                  `${data.user.name}: ${punctuated.transcript}`
                );
              }
            }
          }
        });

        stream.on("topic", (data) => {
          if (data) {
            props.handleTopicsUpdates(data);
          }
        });

        stream.on("follow_up", (data) => {
          props.handleInsightsUpdates(data);
        });

        stream.on("question", (data) => {
          props.handleInsightsUpdates(data);
        });

        stream.on("action_item", (data) => {
          props.handleInsightsUpdates(data);
        });

        stream.on("message", (data) => {
          console.log("ON messages: " + data);
        });

        stream.on("tracker", (data) => {
          console.log("ON tracker: " + JSON.stringify(data));
          props.handleTrackersUpdates(data);
        });

        stream.on("connected", (data) => {
          console.log("ON CONNECTED " + JSON.stringify(data));
        });

        stream.on("disconnected", (data) => {
          console.log("ON DISCONNECTED " + data);
        });

        stream.on("started_listening", (data) => {
          console.log("ON started_listening " + data);
        });

        stream.on("stopped_listening", (data) => {
          console.log("ON stopped_listening " + data);
        });

        stream.on("processing_started", (data) => {
          console.log("ON processing_started " + data);
        });

        stream.on("processing_stopped", (data) => {
          console.log("ON processing_stopped " + data);
        });

        stream.on("conversation_created", (data) => {
          console.log("ON conversation_created " + data);
        });

        stream.on("conversation_completed", (data) => {
          console.log("ON conversation_completed " + data);
        });

        stream.on("audio_source_connected", (data) => {
          console.log("ON audio_source_connected " + data);
        });

        stream.on("audio_source_disconnected", (data) => {
          console.log("ON audio_source_disconnected " + data);
        });

        window.addEventListener("error", (data) => {
          console.log(data);
        });

        window.addEventListener("offline", (data) => {
          console.log(data);
        });

        props.setCaption(
          "You're muted. Click the unmute button to resume captions."
        );

        props.setStarted(true);
      } else {
        if (stream) {
          await stream.stopProcessing();
          await stream.disconnect();
        }

        props.setStarted(false);
        props.setMuted(true);
        props.setRenderViaSubscription(false);

        props.setCaption(
          "Hit the Play button to connect! Captions will appear here"
        );
      }

      props.setConnecting(false);
    } else {
      console.log("Already connecting...");
    }
  };

  return (
    <Fab
      color="primary"
      arial-label="Start/Stop Captions"
      onClick={() => {
        handleStartClick();
      }}
      disabled={props.connecting || !props.connectionID}
    >
      {props.started ? <StopIcon /> : <PlayArrowIcon />}
    </Fab>
  );
};

export default PlayButton;
