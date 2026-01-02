// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import Experience from "./components/Experience";
// import Interface from "./components/Interface";

// function App() {
//   return (
//     <>
//     <div className="flex items-center justify-center">
//       <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
//         <Experience />
//       </Canvas>
//       <Interface />
//       </div>
//     </>
//   );
// }

// export default App;


import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas
        camera={{ position: [1.5, 2, 3], fov: 45 }}
        shadows
        style={{ width: "100%", height: "100%" }}
      >
        {/* BLACK R3F BACKGROUND */}
        <color attach="background" args={["white"]} />

        <Experience />
      </Canvas>

      <Interface />
    </div>
  );
}

export default App;
