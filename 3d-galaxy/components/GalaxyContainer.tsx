import React, { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

interface GalaxyContainerProps {
  children: ReactNode;
}

export default function GalaxyContainer({ children }: GalaxyContainerProps) {
  return (
    <Canvas dpr={Math.min(window.devicePixelRatio, 2)}>
      <color attach="background" args={["#111111"]} />
      {children}
    </Canvas>
  );
}
