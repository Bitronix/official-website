/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public", // Destination where the service worker will be generated
  // You can add more PWA-specific configuration options here if needed
});

module.exports = withPWA({
  // Your Next.js configuration options go here
  reactStrictMode: true,
  // Any other Next.js specific configurations
  // For example, enabling image domains, setting up environment variables, etc.
});
