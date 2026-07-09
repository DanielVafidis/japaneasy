import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phones/tablets on the LAN to hit the dev server (dev-only safety gate).
  allowedDevOrigins: ["192.168.8.242", "192.168.8.*"],
};

export default nextConfig;
