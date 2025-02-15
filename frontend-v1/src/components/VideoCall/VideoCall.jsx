import { useEffect, useRef } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt/rtc-js-prebuilt";

export default function VideoCall() {
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    const loadMeetingSDK = async () => {
      const apiKey = import.meta.env.VITE_API_KEY_VDO;
      const meetingId = "jdu-test-v1"; // dynamically generated in the future
      const name = "Demo User";
      const meetingUrl = `${window.location.origin}/${meetingId}`;
      const config = {
        name,
        meetingId,
        apiKey,
        containerId: meetingContainerRef.current.id, // Attach meeting to this div
        redirectOnLeave: "https://www.videosdk.live/",
        micEnabled: true,
        webcamEnabled: true,
        participantCanToggleSelfWebcam: true,
        participantCanToggleSelfMic: true,
        participantCanLeave: true,
        chatEnabled: true,
        screenShareEnabled: true,
        pollEnabled: true,
        whiteboardEnabled: true,
        raiseHandEnabled: true,
        layout: { type: "SPOTLIGHT", priority: "PIN" },
        branding: {
          enabled: true,
          logoURL: "https://static.zujonow.com/videosdk.live/videosdk_logo_circle_big.png",
          name: "Prebuilt",
          poweredBy: false,
        },
        permissions: {
          pin: true,
          askToJoin: false,
          toggleParticipantMic: true,
          toggleParticipantWebcam: true,
          drawOnWhiteboard: true,
          toggleWhiteboard: true,
          toggleRecording: true,
          toggleLivestream: true,
          removeParticipant: true,
          endMeeting: true,
          changeLayout: true,
        },
        joinScreen: { visible: true, title: "Daily scrum", meetingUrl: meetingUrl },
        leftScreen: { actionButton: { label: "Video SDK Live", href: "https://videosdk.live/" } },
        notificationSoundEnabled: true,
        debug: true,
        maxResolution: "hd",
      };

      const meeting = new VideoSDKMeeting();
      meeting.init(config);
    };

    loadMeetingSDK();
  }, []);

  return <div id="meeting-container" ref={meetingContainerRef} style={{ width: "100%", height: "100vh" }} />;
}