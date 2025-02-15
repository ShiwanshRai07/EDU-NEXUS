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
        redirectOnLeave: "https://www.videosdk.live/",
        micEnabled: true,
        webcamEnabled: true,
        chatEnabled: true,
        screenShareEnabled: true,
        whiteboardEnabled: true,
        raiseHandEnabled: true,
        layout: { type: "SPOTLIGHT", priority: "PIN" },
        branding: {
          enabled: true,
          logoURL: "https://static.zujonow.com/videosdk.live/videosdk_logo_circle_big.png",
          name: "Prebuilt",
          poweredBy: false,
        },
        joinScreen: { visible: true, title: "Daily scrum", meetingUrl },
        leftScreen: { actionButton: { label: "Video SDK Live", href: "https://videosdk.live/" } },
        notificationSoundEnabled: true,
        debug: true,
        maxResolution: "hd",
      };

      const meeting = new VideoSDKMeeting();
      meeting.init(config);

      // Notify parent component that the meeting was created
      if (onMeetingCreated) {
        onMeetingCreated(meetingId);
      }
    };

    loadMeetingSDK();
  }, [meetingId]);

  return <div id="meeting-container" ref={meetingContainerRef} style={{ width: "100%", height: "100vh" }} />;
}
