import { Box } from "./geometries/Box";
import { Plane } from "./geometries/Plane";
import { Sphere } from "./geometries/Sphere";

export const Models = () => {

  return (
    <group>


      <Box position={[2, 0.25, 0]} />
    
      <Sphere position={[-2, 0.25, 0]} />

      <Plane position={[0, -1, 0]} />

    </group>
  );
};
