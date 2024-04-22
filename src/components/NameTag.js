import useSpline from "@splinetool/r3f-spline";
import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NameTag({ action, setAction, ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/KnnuFsmNwhd4ZZAV/scene.splinecode"
  );

  const { scale, position } = useSpring({
    scale:
      (action === "nameTag" ? 0.017 : 0) ||
      (action === "home" ? 0.009 : 0) ||
      (action !== "nameTag" || "home" ? 0 : 0),
    position:
      (action === "nameTag" ? [0, 0.5, 0] : 0) ||
      (action === "home" ? [0, -1.6, 0] : 0) ||
      (action !== "nameTag" || "home" ? [0, -1.4, 0] : 0),
  });

  const meshRef = useRef();

  useFrame(() => {
    action === "nameTag"
      ? (meshRef.current.rotation.y += 0.005)
      : (meshRef.current.rotation.y = -0.3);
  });

  return (
    <animated.group
      ref={meshRef}
      scale={scale}
      position={position}
      onClick={() =>
        action === "home" ? setAction("nameTag") : setAction("home")
      }
    >
      <group name="Group">
        <mesh
          name="newlicense2.png"
          geometry={nodes["newlicense2.png"].geometry}
          material={materials["newlicense2.png Material"]}
          castShadow
          receiveShadow
          position={[-0.05, 0.04, 3.85]}
        />
        <mesh
          name="backlicense2.png"
          geometry={nodes["backlicense2.png"].geometry}
          material={materials["backlicense2.png Material"]}
          castShadow
          receiveShadow
          position={[-0.25, -0.03, -3.75]}
          rotation={[-3.14, 0, -3.14]}
          scale={1}
        />
        <group name="card" position={[0, 0, 2.03]} scale={[0.91, 0.89, 0.91]}>
          <mesh
            name="Rectangle 2"
            geometry={nodes["Rectangle 2"].geometry}
            material={materials["Mat 2"]}
            castShadow
            receiveShadow
            position={[0, 0, -6.07]}
          />
        </group>
      </group>
      {/* <directionalLight
        name="Directional Light"
        castShadow
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-1250}
        shadow-camera-right={1250}
        shadow-camera-top={1250}
        shadow-camera-bottom={-1250}
        position={[200, 300, 300]}
      /> */}

      {/* <hemisphereLight
        name="Default Ambient Light"
        intensity={0.75}
        color="#eaeaea"
      /> */}
    </animated.group>
  );
}





// export default function Scene({ ...props }) {
//   const { nodes, materials } = useSpline('https://prod.spline.design/KnnuFsmNwhd4ZZAV/scene.splinecode')
//   return (
    
//       <animated.group
//       ref={meshRef}
//       scale={scale}
//       position={position}
//       onClick={() =>
//         action === "home" ? setAction("nameTag") : setAction("home")
//       }
//     >
//           <group name="Group 3" position={[129.64, 107.43, -0.25]}>
//             <mesh
//               name="newlicense2.png"
//               geometry={nodes['newlicense2.png'].geometry}
//               material={materials['newlicense2.png Material']}
//               castShadow
//               receiveShadow
//               position={[0.16, 1.36, 3.85]}
//             />
//             <mesh
//               name="backlicense2.png"
//               geometry={nodes['backlicense2.png'].geometry}
//               material={materials['backlicense2.png Material']}
//               castShadow
//               receiveShadow
//               position={[-0.12, -0.58, -3.75]}
//               rotation={[-3.14, 0, 3.12]}
//               scale={1}
//             />
//             <group name="card" position={[0, 0.02, 2.04]} scale={[0.91, 0.86, 0.91]}>
//               <mesh
//                 name="Rectangle 2"
//                 geometry={nodes['Rectangle 2'].geometry}
//                 material={materials['Mat 2']}
//                 castShadow
//                 receiveShadow
//                 position={[0, 0, -6.07]}
//               />
//             </group>
//           </group>
//           <directionalLight
//             name="Directional Light"
//             castShadow
//             intensity={0.7}
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             shadow-camera-near={-10000}
//             shadow-camera-far={100000}
//             shadow-camera-left={-1250}
//             shadow-camera-right={1250}
//             shadow-camera-top={1250}
//             shadow-camera-bottom={-1250}
//             position={[200, 300, 300]}
//           />
          
//           <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
//       </animated.group>
    
//   )
// }


