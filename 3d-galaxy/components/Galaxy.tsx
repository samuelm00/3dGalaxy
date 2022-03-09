import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Breakpoints } from "../type/type.breakpoints";
import GalaxyContainer from "./GalaxyContainer";
import GalaxySpiral from "./GalaxySpiral";

interface GalaxySpiralProps {
  x?: number;
  y?: number;
  z?: number;
}

export default function Galaxy() {
  return (
    <GalaxyContainer>
      <GalaxySpiralWrapper />
    </GalaxyContainer>
  );
}

function GalaxySpiralWrapper({ x, y, z }: GalaxySpiralProps) {
  const { camera } = useThree();

  useEffect(() => {
    if (window.innerWidth < Breakpoints.sm) {
      camera.position.set(x || 0, y || 0, z || 16);
    } else {
      camera.position.set(x || 0, y || 0, z || 10);
    }
  }, [camera]);

  return <GalaxySpiral nrOfSpirals={4} />;
}
