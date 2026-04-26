import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub-Pages-Deployment unter https://<user>.github.io/LernenLuca/
// Falls anderer Reponame oder Custom Domain → base anpassen.
export default defineConfig({
  plugins: [react()],
  base: "/LernenLuca/",
});
