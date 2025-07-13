import { Environment } from "@react-three/drei";
import { useControls } from "leva";

export const Lights = () => {
  // const directionalLightOne = useRef<DirectionalLight>(null!);
  // useHelper(directionalLightOne, DirectionalLightHelper, 1, "red");

  // const { sunPosition } = useControls("Environment", {
  //   sunPosition: {
  //     value: [-0.2, 0.2, 2.6],
  //     label: "Sun Position",
  //     step: 0.01,
  //     min: -1,
  //     max: 1,
  //   },
  // }) as {
  //   sunPosition: [number, number, number];
  // };

  const { environmentIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("Environment", {
      environmentIntensity: {
        value: 1.0,
        label: "Environment Intensity",
        step: 0.1,
        min: 0,
        max: 10,
      },
      envMapHeight: {
        value: 7,
        label: "EnvMap Height",
        step: 1,
        min: 1,
        max: 20,
      },
      envMapRadius: {
        value: 28,
        label: "EnvMap Radius",
        step: 1,
        min: 1,
        max: 100,
      },
      envMapScale: {
        value: 100,
        label: "EnvMap Scale",
        step: 1,
        min: 1,
        max: 200,
      },
    });

  return (
    <>
      {/* <ambientLight intensity={1.5} /> */}
      {/* <directionalLight
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
      /> */}
      {/* <Sky sunPosition={sunPosition} /> */}

      <Environment
        // files={"/environmentMaps/the_sky_is_on_fire_2k.hdr"}
        // background
        // resolution={32}
        // blur={0.5}
        environmentIntensity={environmentIntensity}
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      >
        {/* <mesh position={[0, 0, -15]}>
          <planeGeometry args={[25, 25]} />
          <meshBasicMaterial color={[10, 0, 0]} />
        </mesh> */}

        {/* <Lightformer
          color={"red"}
          position={[0, 0, -15]}
          scale={10}
          intensity={20}
          form='ring'
          visible={false}
        /> */}

        <color args={["#000000"]} attach={"background"} />
      </Environment>
    </>
  );
};
