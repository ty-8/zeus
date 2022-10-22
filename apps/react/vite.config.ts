import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(21, 21));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
