import { ContactShadows } from "@react-three/drei";
import { useControls } from "leva";

export const Shadows = () => {
  const { blur, color, opacity } = useControls("Contact Shadows", {
    color: {
      value: "#000000",
      label: "Shadow Color",
    },
    opacity: {
      value: 1.0,
      label: "Shadow Opacity",
      min: 0,
      max: 2,
      step: 0.01,
    },
    blur: {
      value: 1.0,
      label: "Shadow Blur",
      min: 0,
      max: 10,
      step: 0.1,
    },
  });
  return (
    <>
      {/* <BakeShadows /> */}
      {/* <SoftShadows size={25}  samples={10} focus={0}/> */}
      {/* <AccumulativeShadows
          position={[0, -0.99, 0]}
          scale={25}
          color="#316d39"
          opacity={0.8}
          frames={100}
          // blend={100}
          temporal
        >
          <RandomizedLight
            amount={8}
            radius={1}
            ambient={0.5}
            intensity={3}
            position={[1, 2, 3]}
            bias={0.001}
          />
        </AccumulativeShadows> */}

      <ContactShadows
        position={[0, -0.99, 0]}
        scale={30}
        resolution={512}
        far={5}
        blur={blur}
        color={color}
        opacity={opacity}
      />
    </>
  );
};
