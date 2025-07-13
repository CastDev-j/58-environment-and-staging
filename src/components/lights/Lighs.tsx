import { Sky, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { DirectionalLightHelper, type DirectionalLight } from "three";

export const Lights = () => {
  const directionalLightOne = useRef<DirectionalLight>(null!);

  useHelper(directionalLightOne, DirectionalLightHelper, 1, "red");

  const { sunPosition } = useControls("Environment", {
    sunPosition: {
      value: [-0.2, 0.2, 2.6],
      label: "Sun Position",
      step: 0.01,
      min: -1,
      max: 1,
    },
  }) as {
    sunPosition: [number, number, number];
  };

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        position={sunPosition}
        intensity={4.5}
        ref={directionalLightOne}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={13}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />

      <Sky sunPosition={sunPosition} />
    </>
  );
};
