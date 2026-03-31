import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.projectar.alpha",
  appName: "Project AR",
  webDir: "dist", // Critical: Vite builds to /dist, not /www
  server: {
    androidScheme: "https",
  },
};

export default config;
