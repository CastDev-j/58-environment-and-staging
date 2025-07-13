/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from "react";

import { useControls } from "leva";

export const Sphere = (props: any) => {
  const meshRef = useRef<any>(null);

  const { radius, color, position } = useControls(
    "Sphere",
    {
      radius: {
        value: 1,
        min: 0.1,
        max: 5,
        step: 0.1,
        label: "Radius",
      },
      color: {
        value: "orange",
        label: "Color",
      },
      position: {
        value: props.position,
        label: "Position",
      },
    },
    {
      collapsed: true,
    }
  );

  return (
    <mesh {...props} ref={meshRef} position={position} castShadow>
      <sphereGeometry args={[radius]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
