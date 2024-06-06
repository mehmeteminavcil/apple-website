import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="w-[100vw] h-[10vh]">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
