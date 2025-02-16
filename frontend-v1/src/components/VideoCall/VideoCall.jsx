import { useEffect, useRef, useState } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt/rtc-js-prebuilt";


export default function VideoCall({ meetingId, onMeetingCreated }) {
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    if (!meetingId) return; // Ensure meetingId is provided before initializing

    const loadMeetingSDK = async () => {
      const apiKey = import.meta.env.VITE_API_KEY_VDO;
      const name = "Demo User"; 
      const meetingUrl = `${window.location.origin}/${meetingId}`;

      const config = {
        name,
        meetingId,
        apiKey,
        containerId: meetingContainerRef.current.id,
        redirectOnLeave: `${window.location.origin}/`,
        micEnabled: true,
        webcamEnabled: true,
        chatEnabled: true,
        screenShareEnabled: true,
        whiteboardEnabled: true,
        raiseHandEnabled: true,
        layout: { type: "SPOTLIGHT", priority: "PIN" },
        branding: {
          enabled: true,
          logoURL: "/logo.png",
          name: "EDU-NEXUS",
          poweredBy: false,
        },
        
        permissions: {
          pin: true,
          askToJoin: false, // Ask joined participants for entry in meeting
          toggleParticipantMic: true, // Can toggle other participant's mic
          toggleParticipantWebcam: true, // Can toggle other participant's webcam
          toggleParticipantScreenshare: true, // Can toggle other participant's screen share
          toggleParticipantMode: true, // Can toggle other participant's mode
          canCreatePoll: true, // Can create a poll
          toggleHls: true, // Can toggle Start HLS button
          drawOnWhiteboard: true, // Can draw on whiteboard
          toggleWhiteboard: true, // Can toggle whiteboard
          toggleVirtualBackground: true, // Can toggle virtual background
          toggleRecording: true, // Can toggle meeting recording
          toggleLivestream: true, //can toggle live stream
          removeParticipant: true, // Can remove participant
          endMeeting: true, // Can end meeting
          changeLayout: true, //can change layout
},
        joinScreen: { visible: true, title: "live session", meetingUrl },
        leftScreen: { actionButton: { label: "EDU-NEXUS", href: "/" } },
        notificationSoundEnabled: true,
        debug: true,
        maxResolution: "hd",
      };

      const meeting = new VideoSDKMeeting();
      meeting.init(config);

      // Notify parent component that the meeting was created
      // if (onMeetingCreated) {
      //   onMeetingCreated(meetingId);
      // }
    };

    loadMeetingSDK();
  }, [meetingId]);

  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then((stream) => console.log("Camera access granted", stream))
  .catch((error) => console.error("Camera access denied:", error));


  return <div id="meeting-container" ref={meetingContainerRef} style={{ width: "100%", height: "100vh" }} />;
}
