// import React from "react";
// import { OrbitControls } from "@react-three/drei";
// import Woman from "./Woman";

// const Experience = () => {
//   return (
//     <>
//       <OrbitControls />
//       <ambientLight />
//       <directionalLight
//         position={[-5, 5, 5]}
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//       />
//       <group position={[0, -1, 0]}>
//         <Woman />
//       </group>
//       <mesh
//         rotation={[-0.5 * Math.PI, 0, 0]}
//         position={[0, -1, 0]}
//         receiveShadow
//       >
//         {/* <planeBufferGeometry args={[10, 10, 1, 1]} /> */}
//         <planeGeometry args={[10, 10, 1, 1]} />

//         <shadowMaterial transparent opacity={0.2} />
//       </mesh>
//     </>
//   );
// };

// export default Experience;


import React from "react";
import { OrbitControls } from "@react-three/drei";
import Woman from "./Woman";

const Experience = () => {
  return (
    <>

      <OrbitControls
        enablePan={false}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={1.5}
        maxDistance={5}
      />


      <ambientLight intensity={0.3} />

 
      <directionalLight
        position={[3, 5, 3]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />


      <spotLight
        position={[-2, 3, -2]}
        intensity={0.7}
        angle={0.5}
        penumbra={0.5}
        castShadow
      />

   
      <group position={[0, -1, 0]}>
        <Woman castShadow />
      </group>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <shadowMaterial transparent opacity={0.25} />
      </mesh>
    </>
  );
};

export default Experience;
