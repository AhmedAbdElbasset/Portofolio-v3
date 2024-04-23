import HomePage from "./Pages/HomePage";
import AnimatedCursor from "react-animated-cursor";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
export default function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        color="255,255,255"
        outerAlpha={0.5}
        innerScale={0.3}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
        <HomePage />
    </>
  );
}
