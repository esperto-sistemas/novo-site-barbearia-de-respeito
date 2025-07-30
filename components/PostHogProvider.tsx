"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;

    if (!apiKey) {
      console.error("PostHog API key not found in environment variables");
      return;
    }

    console.log(
      "Initializing PostHog with key:",
      apiKey.substring(0, 8) + "..."
    );

    posthog.init(apiKey, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      defaults: "2025-05-24",
      capture_exceptions: true,
      debug: process.env.NODE_ENV === "development",
      loaded: (posthog) => {
        console.log("PostHog loaded successfully");
        if (process.env.NODE_ENV === "development") {
          console.log("PostHog debug mode enabled");
        }
      },
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
