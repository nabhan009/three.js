// // "use client";

// // import { useEffect, useRef } from "react";
// // import * as THREE from "three";

// // export default function ShadowScene() {
// //   const mountRef = useRef(null);

// //   useEffect(() => {
// //     // Scene
// //     const scene = new THREE.Scene();
// //     scene.background = new THREE.Color(0xffffff);

// //     // Camera
// //     const camera = new THREE.PerspectiveCamera(
// //       75,
// //       window.innerWidth / window.innerHeight,
// //       0.1,
// //       100
// //     );
// //     camera.position.set(0, 3, 6);

// //     // Renderer
// //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     renderer.setPixelRatio(window.devicePixelRatio);
// //     renderer.shadowMap.enabled = true; // ✅ ENABLE SHADOWS
// //     renderer.shadowMap.type = THREE.VSMShadowMap;

// //     mountRef.current.appendChild(renderer.domElement);

// //     // Ambient Light
// //     const light = new THREE.SpotLight(0xffffff, 1);
// //     light.angle = Math.PI / 6;
// //     light.castShadow = true;
// //     scene.add(light);

// //     // Directional Light (casts shadow)
// //     const dirLight = new THREE.DirectionalLight(0xffffff, 1);
// //     dirLight.position.set(5, 10, 5);
// //     dirLight.castShadow = true; // ✅ CAST SHADOW

// //     scene.add(dirLight);

// //     // Cube (casts shadow)
// //     const cube = new THREE.Mesh(
// //       new THREE.BoxGeometry(1, 1, 1),
// //       new THREE.MeshStandardMaterial({ color: 0x00ffcc })
// //     );
// //     cube.position.y = 1;
// //     cube.castShadow = true; // ✅ CAST SHADOW
// //     scene.add(cube);

// //     // Ground (receives shadow)
// //     const ground = new THREE.Mesh(
// //       new THREE.PlaneGeometry(110, 110),
// //       new THREE.MeshStandardMaterial({ color: 0x111111 })
// //     );
// //     ground.rotation.x = -Math.PI / 2;
// //     ground.receiveShadow = true; // ✅ RECEIVE SHADOW
// //     scene.add(ground);

// //     // Animation
// //     const animate = () => {
// //       cube.rotation.x += 0.01;
// //       cube.rotation.y += 0.01;

// //       renderer.render(scene, camera);
// //       requestAnimationFrame(animate);
// //     };

// //     animate();

// //     // Resize handling
// //     const handleResize = () => {
// //       camera.aspect = window.innerWidth / window.innerHeight;
// //       camera.updateProjectionMatrix();
// //       renderer.setSize(window.innerWidth, window.innerHeight);
// //     };

// //     window.addEventListener("resize", handleResize);

// //     // Cleanup
// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //       mountRef.current.removeChild(renderer.domElement);
// //       renderer.dispose();
// //     };
// //   }, []);

// //   return <div ref={mountRef} />;
// // }


// // "use client";

// // import { useEffect, useRef } from "react";
// // import * as THREE from "three";
// // import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// // import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

// // export default function CameraEnvironmentScene() {
// //   const mountRef = useRef(null);

// //   useEffect(() => {
// //     /* ---------------- Scene ---------------- */
// //     const scene = new THREE.Scene();

// //     /* ---------------- Camera ---------------- */
// //     const camera = new THREE.PerspectiveCamera(
// //       75,
// //       window.innerWidth / window.innerHeight,
// //       0.1,
// //       100
// //     );
// //     camera.position.set(0, 2, 5);

// //     /* ---------------- Renderer ---------------- */
// //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     renderer.setPixelRatio(window.devicePixelRatio);

// //     // Shadows
// //     renderer.shadowMap.enabled = true;
// //     renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// //     // Physical lighting
// //     renderer.physicallyCorrectLights = true;
// //     renderer.toneMapping = THREE.ACESFilmicToneMapping;
// //     renderer.toneMappingExposure = 1;

// //     mountRef.current.appendChild(renderer.domElement);

// //     /* ---------------- Controls ---------------- */
// //     const controls = new OrbitControls(camera, renderer.domElement);
// //     controls.enableDamping = true;
// //     controls.target.set(0, 1, 0);

// //     /* ---------------- Lights ---------------- */
// //     scene.add(new THREE.AmbientLight(0xffffff, 0.3));

// //     const sun = new THREE.DirectionalLight(0xffffff, 1);
// //     sun.position.set(5, 10, 5);
// //     sun.castShadow = true;
// //     sun.shadow.mapSize.set(2048, 2048);
// //     sun.shadow.camera.near = 1;
// //     sun.shadow.camera.far = 20;
// //     sun.shadow.camera.left = -10;
// //     sun.shadow.camera.right = 10;
// //     sun.shadow.camera.top = 10;
// //     sun.shadow.camera.bottom = -10;
// //     scene.add(sun);

// //     /* ---------------- Environment (HDR) ---------------- */
// //     new RGBELoader().load(
// //       "/studio.hdr.jpg", // put HDR in public folder
// //       (texture) => {
// //         texture.mapping = THREE.EquirectangularReflectionMapping;
// //         scene.environment = texture;
// //         scene.background = texture;
// //       }
// //     );

// //     /* ---------------- Objects ---------------- */
// //     // Cube
// //     const cube = new THREE.Mesh(
// //       new THREE.BoxGeometry(1, 1, 1),
// //       new THREE.MeshStandardMaterial({
// //         color: 0xff8844,
// //         roughness: 0.4,
// //         metalness: 0.3,
// //       })
// //     );
// //     cube.position.y = 1;
// //     cube.castShadow = true;
// //     scene.add(cube);

// //     // Ground
// //     const ground = new THREE.Mesh(
// //       new THREE.PlaneGeometry(20, 20),
// //       new THREE.MeshStandardMaterial({ color: 0x444444 })
// //     );
// //     ground.rotation.x = Math.PI / 2;
// //     // ground.rotation.y = -Math.PI / 2;
// //     ground.receiveShadow = true;
// //     scene.add(ground);

// //     /* ---------------- Animation Loop ---------------- */
// //     const animate = () => {
// //       cube.rotation.y += 0.01;

// //       controls.update();
// //       renderer.render(scene, camera);
// //       requestAnimationFrame(animate);
// //     };
// //     animate();

// //     /* ---------------- Resize ---------------- */
// //     const onResize = () => {
// //       camera.aspect = window.innerWidth / window.innerHeight;
// //       camera.updateProjectionMatrix();
// //       renderer.setSize(window.innerWidth, window.innerHeight);
// //     };
// //     window.addEventListener("resize", onResize);

// //     /* ---------------- Cleanup ---------------- */
// //     return () => {
// //       window.removeEventListener("resize", onResize);
// //       mountRef.current.removeChild(renderer.domElement);
// //       renderer.dispose();
// //     };
// //   }, []);

// //   // return 
// //   return (
// //   <div
// //     ref={mountRef}
// //     style={{
// //       position: "fixed",
// //       top: 0,
// //       left: 0,
// //       width: "100vw",
// //       height: "100vh",
// //       overflow: "hidden",
// //     }}
// //   />
// // );

// // }


// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// const SolarSystem = () => {
//   const mountRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [showOrbits, setShowOrbits] = useState(true);
//   const [speed, setSpeed] = useState(1);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Camera position
//     camera.position.set(0, 150, 250);
//     camera.lookAt(0, 0, 0);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0x333333);
//     scene.add(ambientLight);

//     const sunLight = new THREE.PointLight(0xffffff, 2, 0);
//     sunLight.position.set(0, 0, 0);
//     scene.add(sunLight);

//     // Starfield
//     const starGeometry = new THREE.BufferGeometry();
//     const starVertices = [];
//     for (let i = 0; i < 10000; i++) {
//       const x = (Math.random() - 0.5) * 4000;
//       const y = (Math.random() - 0.5) * 4000;
//       const z = (Math.random() - 0.5) * 4000;
//       starVertices.push(x, y, z);
//     }
//     starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
//     const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     // Sun
//     const sunGeometry = new THREE.SphereGeometry(20, 32, 32);
//     const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xfdb813 });
//     const sun = new THREE.Mesh(sunGeometry, sunMaterial);
//     scene.add(sun);

//     // Planet data: [name, size, distance, color, speed, tilt]
//     const planetsData = [
//       ['Mercury', 2, 40, 0x8c7853, 4.15, 0.03],
//       ['Venus', 4, 60, 0xffc649, 1.62, 177.4],
//       ['Earth', 4.5, 85, 0x4169e1, 1, 23.5],
//       ['Mars', 2.5, 110, 0xcd5c5c, 0.53, 25.2],
//       ['Jupiter', 12, 160, 0xdaa520, 0.08, 3.1],
//       ['Saturn', 10, 210, 0xf4a460, 0.03, 26.7],
//       ['Uranus', 7, 260, 0x4fd0e7, 0.01, 97.8],
//       ['Neptune', 7, 310, 0x4169e1, 0.006, 28.3]
//     ];

//     const planets = [];
//     const orbits = [];

//     planetsData.forEach(([name, size, distance, color, orbitalSpeed, tilt]) => {
//       // Create orbit line
//       const orbitGeometry = new THREE.BufferGeometry();
//       const orbitPoints = [];
//       for (let i = 0; i <= 64; i++) {
//         const angle = (i / 64) * Math.PI * 2;
//         orbitPoints.push(
//           Math.cos(angle) * distance,
//           0,
//           Math.sin(angle) * distance
//         );
//       }
//       orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(orbitPoints, 3));
//       const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x444444 });
//       const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//       scene.add(orbit);
//       orbits.push(orbit);

//       // Create planet
//       const planetGeometry = new THREE.SphereGeometry(size, 32, 32);
//       const planetMaterial = new THREE.MeshStandardMaterial({ color });
//       const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      
//       // Add to scene
//       scene.add(planet);
      
//       planets.push({
//         mesh: planet,
//         distance,
//         angle: Math.random() * Math.PI * 2,
//         speed: orbitalSpeed,
//         tilt: tilt * Math.PI / 180,
//         name
//       });

//       // Add Saturn's rings
//       if (name === 'Saturn') {
//         const ringGeometry = new THREE.RingGeometry(size * 1.5, size * 2.5, 64);
//         const ringMaterial = new THREE.MeshBasicMaterial({
//           color: 0xc9b07a,
//           side: THREE.DoubleSide,
//           transparent: true,
//           opacity: 0.6
//         });
//         const ring = new THREE.Mesh(ringGeometry, ringMaterial);
//         ring.rotation.x = Math.PI / 2;
//         planet.add(ring);
//       }
//     });

//     // Mouse controls
//     let mouseX = 0;
//     let mouseY = 0;
//     let targetX = 0;
//     let targetY = 0;

//     const onMouseMove = (event) => {
//       mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener('mousemove', onMouseMove);

//     // Animation
//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (!isPaused) {
//         // Rotate sun
//         sun.rotation.y += 0.001 * speed;

//         // Update planets
//         planets.forEach(planet => {
//           planet.angle += 0.001 * planet.speed * speed;
//           planet.mesh.position.x = Math.cos(planet.angle) * planet.distance;
//           planet.mesh.position.z = Math.sin(planet.angle) * planet.distance;
//           planet.mesh.rotation.y += 0.01 * speed;
//           planet.mesh.rotation.x = planet.tilt;
//         });
//       }

//       // Camera movement based on mouse
//       targetX = mouseX * 50;
//       targetY = mouseY * 50;
//       camera.position.x += (targetX - camera.position.x) * 0.05;
//       camera.position.y += (targetY + 150 - camera.position.y) * 0.05;
//       camera.lookAt(0, 0, 0);

//       // Update orbit visibility
//       orbits.forEach(orbit => {
//         orbit.visible = showOrbits;
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('mousemove', onMouseMove);
//       mountRef.current?.removeChild(renderer.domElement);
//     };
//   }, [isPaused, showOrbits, speed]);

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       <div ref={mountRef} className="w-full h-full" />
      
//       {/* Controls */}
//       <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-80 text-white p-4 rounded-lg space-y-3">
//         <h2 className="text-xl font-bold mb-2">Solar System</h2>
        
//         <button
//           onClick={() => setIsPaused(!isPaused)}
//           className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition"
//         >
//           {isPaused ? 'Resume' : 'Pause'}
//         </button>
        
//         <button
//           onClick={() => setShowOrbits(!showOrbits)}
//           className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition"
//         >
//           {showOrbits ? 'Hide Orbits' : 'Show Orbits'}
//         </button>
        
//         <div className="space-y-1">
//           <label className="text-sm">Speed: {speed.toFixed(1)}x</label>
//           <input
//             type="range"
//             min="0.1"
//             max="5"
//             step="0.1"
//             value={speed}
//             onChange={(e) => setSpeed(parseFloat(e.target.value))}
//             className="w-full"
//           />
//         </div>
        
//         <div className="text-xs text-gray-400 mt-3">
//           Move your mouse to rotate the camera view
//         </div>
//       </div>

//       {/* Planet Info */}
//       <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-80 text-white p-3 rounded-lg text-sm">
//         <div className="font-bold mb-1">Planets:</div>
//         <div className="space-y-0.5 text-xs">
//           <div>🔴 Mercury • 🟡 Venus • 🔵 Earth • 🔴 Mars</div>
//           <div>🟠 Jupiter • 🟠 Saturn • 🔵 Uranus • 🔵 Neptune</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolarSystem;