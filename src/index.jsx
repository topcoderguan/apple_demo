import React from "react";
import ReactDOMClient from "react-dom/client";
import { HttpsAppleCom } from "./screens/HttpsAppleCom";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HttpsAppleCom />);
