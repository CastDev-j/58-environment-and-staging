import { Box } from "./geometries/Box";
// import { Plane } from "./geometries/Plane";
import { Sphere } from "./geometries/Sphere";

export const Models = () => {

  return (
    <group>


      <Box position={[2, 1.5, 0]} />
    
      <Sphere position={[-2, 1.25, 0]} />

      {/* <Plane position={[0, 0, 0]} /> */}

    </group>
  );
};
