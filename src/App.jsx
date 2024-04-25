import HomePage from "./Pages/HomePage";
import AnimatedCursor from "react-animated-cursor";
import { useState,useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./componants/loader/Loader";
export default function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={40}
        color="255,255,255"
        outerAlpha={0.5}
        innerScale={1}
        outerScale={2}
        innerStyle={{
          mixBlendMode:'exclusion'
        }}
        outerStyle={{
          mixBlendMode:'luminosity'
        }}
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
        <HomePage/>
      
    </>
  );
}
