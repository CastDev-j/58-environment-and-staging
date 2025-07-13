/* eslint-disable @typescript-eslint/no-explicit-any */
import { useControls } from "leva";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Box = (props: any) => {
  const meshRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.5 * delta;
    }
  });

  const { size, color, position } = useControls(
    "Box",
    {
      size: {
        value: 2,
        min: 1,
        max: 20,
        step: 1,
        label: "Size",
      },
      color: {
        value: "mediumpurple",
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
    <>
      <mesh {...props} position={position} ref={meshRef} castShadow>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
