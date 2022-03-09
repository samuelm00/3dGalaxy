import { Color } from "three";

/**
 * Constants
 */
export const COUNT = 10000;
const BASE_RADIUS = 5;
const SPIN = 0.8;
const RANDOMNESS = 0.8;
const RANDOMNESS_POWER = 3;
const INSIDE_COLOR = "#ff6030";
const OUTSIDE_COLOR = "#1b3984";

/**
 *
 */
export function getAttributes(nrOfSpirals: number, nrOfStars: number) {
  const positions = new Float32Array((nrOfStars || COUNT) * 3);
  const colors = new Float32Array((nrOfStars || COUNT) * 3);
  const insideColor = new Color(INSIDE_COLOR);
  const outsideColor = new Color(OUTSIDE_COLOR);

  for (let i = 0; i < (nrOfStars || COUNT); ++i) {
    const randomX = getRandomGalaxyCoordinate();
    const randomY = getRandomGalaxyCoordinate();
    const randomZ = getRandomGalaxyCoordinate();

    // Position
    const i3 = i * 3;

    const radius = Math.random() * BASE_RADIUS;
    const spinAngle = radius * SPIN;
    const spiralAngle = ((i % nrOfSpirals) / nrOfSpirals) * Math.PI * 2;

    positions[i3] = Math.cos(spiralAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(spiralAngle + spinAngle) * radius + randomZ;

    // Color
    const mixedColor = insideColor.clone();
    mixedColor.lerp(outsideColor, radius / BASE_RADIUS);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }
  return { positions, colors };
}

function getRandomGalaxyCoordinate() {
  return (
    Math.pow(Math.random(), RANDOMNESS_POWER) *
    (Math.random() < 0.5 ? 1 : -1) *
    RANDOMNESS
  );
}
