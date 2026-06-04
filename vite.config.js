import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        rabbithole: resolve(__dirname, "rabbithole.html"),
        room: resolve(__dirname, "room.html"),
      },
    },
  },
});
