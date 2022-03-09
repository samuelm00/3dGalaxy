import React, { useMemo, useRef } from "react";
import { Points, AdditiveBlending } from "three";
import { useFrame } from "@react-three/fiber";
import { COUNT, getAttributes } from "../util/util.galaxy";
import { useBreakpoint } from "../hook/hook.breakpoint";

interface GalaxySpiralProps {
  nrOfSpirals: number;
}

export default function GalaxySpiral({ nrOfSpirals }: GalaxySpiralProps) {
  const points = useRef<Points>();
  const starSize = useBreakpoint(0.03, 0.02);
  const nrOfStars = useBreakpoint(COUNT / 2, COUNT);
  const attributes = useMemo(
    () => getAttributes(nrOfSpirals, nrOfStars),
    [nrOfSpirals, nrOfStars]
  );
  const rotation = useBreakpoint([Math.PI * 0.3, 0, 0], [Math.PI * 0.25, 0, 0]);

  useFrame(({ clock }) => {
    points.current!.rotation.y = clock.elapsedTime * 0.2;
  });

  return (
    // @ts-ignore
    <points position={[0, 0, 0]} rotation={rotation} ref={points}>
      <bufferGeometry attach={"geometry"}>
        <bufferAttribute
          attachObject={["attributes", "color"]}
          count={nrOfStars}
          array={attributes.colors}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={nrOfStars}
          array={attributes.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach={"material"}
        vertexColors={true}
        sizeAttenuation={true}
        depthWrite={false}
        blending={AdditiveBlending}
        size={starSize}
      />
    </points>
  );
}
