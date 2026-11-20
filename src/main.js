import { createRoot } from "react-dom/client";
import { h } from "./lib/html.js";
import { startMotionLoop } from "./lib/motion.js";
import { App } from "./App.js";
import "./styles/fonts.css";
import "./styles/index.css";

startMotionLoop();
createRoot(document.getElementById("root")).render(h`<${App}/>`);
