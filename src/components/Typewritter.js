import React from "react";
import Typewritter from "typewriter-effect";

const TypewritterEf = ({ text }) => {
  return (
    <div>
      <Typewritter
        onInit={(typewriter) => {
          typewriter.typeString(text).pauseFor(2500).start();
        }}
      />
    </div>
  );
};

export default TypewritterEf;