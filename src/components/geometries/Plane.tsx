/* eslint-disable @typescript-eslint/no-explicit-any */

import { useControls } from "leva";
import { DoubleSide } from "three";

export const Plane = (props: any) => {
  const { size, color, position } = useControls("Plane", {
    size: {
      value: 25,
      min: 1,
      max: 50,
      step: 1,
      label: "Size",
    },
    color: {
      value: "greenyellow",
      label: "Color",
    },
    position: {
      value: props.position,
      label: "Position",
    },
  }, {
    collapsed: true,
  });

  return (
    <mesh {...props} position={position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial side={DoubleSide} color={color} />
    </mesh>
  );
};
