export const getPosition = (
  index: number,
  animation: string,
  spacing: number,
  multiplierX: number
) => {
  let orbit = 0;
  let itemsInThisOrbit = 4;
  let tempIndex = index;

  while (tempIndex >= itemsInThisOrbit) {
    tempIndex -= itemsInThisOrbit;
    orbit++;
    itemsInThisOrbit = 4 + orbit * 2;
  }

  const currentOrbitCapacity = 4 + orbit * 2;
  const orbitRadius = spacing * (1.3 + orbit * 0.8);
  const angle = (tempIndex / (currentOrbitCapacity - 1)) * (Math.PI / 2);

  const radialX = Math.cos(angle) * orbitRadius * multiplierX;
  const radialY = -Math.sin(angle) * orbitRadius;
  const verticalY = -(index + 1) * spacing;

  if (animation === "radial") {
    return `translate(${radialX}px, ${radialY}px)`;
  }

  return `translateY(${verticalY}px)`;
};
