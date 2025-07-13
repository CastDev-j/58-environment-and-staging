import { Canvas } from "@react-three/fiber";
import { Models } from "./Models";
import { OrbitControls, Stage } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { LinearSRGBColorSpace, SRGBColorSpace, NoColorSpace } from "three";
import { Perf } from "r3f-perf";

const colorSpaceMap = {
  srgb: SRGBColorSpace,
  linear: LinearSRGBColorSpace,
  none: NoColorSpace,
};

export const Experience = () => {
  const { bgColor, colorSpace } = useControls(
    "Environment",
    {
      bgColor: {
        value: "ivory",
        label: "BackGround Color",
      },
      colorSpace: {
        value: "srgb",
        options: Object.keys(colorSpaceMap),
        label: "Color Space",
      },
    },
    {
      collapsed: true,
    }
  ) as {
    bgColor: string;
    colorSpace: keyof typeof colorSpaceMap;
  };

  const { perfVisibility } = useControls("Environment", {
    perfVisibility: {
      value: true,
      label: "Performance Monitor Visibility",
    },
  });

  return (
    <div className={`h-screen w-screen`}>
      {/* Leva GUI for controls */}
      <Leva
        collapsed // default = false, when true the GUI is collpased
        // hidden // default = false, when true the GUI is hidden
      />

      {/* Canvas for 3D rendering */}
      <Canvas
        className="bg-transparent"
        gl={{
          outputColorSpace: colorSpaceMap[colorSpace],
        }}
        camera={{
          fov: 45,
          position: [-8, 8, 8],
        }}
        // shadows
      >
        {/* Models */}
        {/* <Models /> */}

        {/* Controls */}
        <OrbitControls makeDefault enablePan={false} />

        {/* Lights */}
        {/* <Lights /> */}

        {/* Performance Monitor */}
        <Perf
          position="bottom-right"
          style={{
            visibility: perfVisibility ? "visible" : "hidden",
          }}
        />

        {/* Clear Color */}
        <color attach={"background"} args={[bgColor]} />

        {/* Shadow Testing */}
        {/* <Shadows /> */}

        {/* Stage */}
        <Stage
          shadows={{
            type: "contact",
            opacity: 0.2,
            blur: 0.3,
          }}
          environment={'sunset'}
          preset={'portrait'}
          intensity={2.0}
        >
          <Models />
        </Stage>
      </Canvas>
    </div>
  );
};
