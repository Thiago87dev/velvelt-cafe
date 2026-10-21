import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["moonrise-carpenter-discourse.ngrok-free.dev"],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
