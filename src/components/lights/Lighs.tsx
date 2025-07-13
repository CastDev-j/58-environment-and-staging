import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, type DirectionalLight } from "three";

export const Lights = () => {
  const directionalLightOne = useRef<DirectionalLight>(null!);

  useHelper(directionalLightOne, DirectionalLightHelper, 1, "red");

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        position={[1,2,3]}
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

    </>
  );
};
