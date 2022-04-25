import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { Fab } from "@mui/material";

const MicComponent = (props) => {
  const handleMicEvent = (setMuted, setMuting, setCaption) => {
    return async (muted, muting) => {
      if (!muting) {
        setMuting(true);

        if (muted) {
          await props.stream.startProcessing({
            disconnectOnStopRequest: false,
            disconnectOnStopRequestTimeout: 1800,
            noConnectionTimeout: 1800,
            insightTypes: ["action_item", "question", "follow_up"],
            config: {
              meetingTitle: "Mic Test", // Set name for meeting
              confidenceThreshold: 0.7,
              timezoneOffset: 480, // Offset in minutes from UTC
              languageCode: "en-US",
              encoding: "LINEAR16",
              sampleRateHertz: 48000,
            },
            trackers: [
              {
                name: "myTrackers",
                vocabulary: ["This is awesome", "very cool"],
              },
            ],
            speaker: {
              userId: process.env.USER_ID || "user1@gmail.com", // Update with valid email or a unique user id
              name: process.env.FULL_NAME || "user1",
            },
          });

          setMuted(false);
          window.connectionActive = true;
          setCaption("You're unmuted. Live captions will appear here...");
        } else {
          await props.stream.stopProcessing();
          window.connectionActive = false;

          setMuted(true);
          setTimeout(() => {
            if (!window.connectionActive) {
              setCaption(
                "You're muted. Click the unmute button to resume captions."
              );
            }
          }, 3000);
        }

        setMuting(false);
      } else {
        console.log("Already muting");
      }
    };
  };

  const changeMicState = handleMicEvent(
    props.setMuted,
    props.setMuting,
    props.setCaption
  );

  return (
    <Fab
      style={{
        backgroundColor: !props.started
          ? "#283643"
          : !props.muted
          ? "#4caf50"
          : "#f50057",
      }}
      aria-label="mic"
      disabled={!props.started || props.muting}
      onClick={() => {
        changeMicState(props.muted, props.muting);
      }}
    >
      {props.muted ? <MicOffIcon /> : <MicIcon />}
    </Fab>
  );
};

export default MicComponent;
