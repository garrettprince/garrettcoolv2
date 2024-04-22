import useSpline from "@splinetool/r3f-spline";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

export default function LongAddition({ action, setAction, ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/5NTUfm7CHUasvnyE/scene.splinecode"
  );

  const { scale, position } = useSpring({
    scale:
      (action === "longAddition" ? 0.002 : 0) ||
      (action === "home" ? 0.00085 : 0) ||
      (action !== "longAddition" || "home" ? 0 : 0),
    position:
      (action === "longAddition" ? [0, 0.5, 0] : 0) ||
      (action === "home" ? [1.35, -1, 0] : 0) ||
      (action !== "longAddition" || "home" ? [1, -1.4, 0] : 0),
  });

  const meshRef = useRef();

  // Subscribe this component to the render-loop, animating the mesh every frame
  useFrame(() => {
    action === "longAddition"
      ? (meshRef.current.rotation.y += 0.005)
      : (meshRef.current.rotation.y = 0.2);
  });

  return (
    <animated.group
      {...props}
      dispose={null}
      ref={meshRef}
      scale={scale}
      position={position}
      onClick={() =>
        action === "home" ? setAction("longAddition") : setAction("home")
      }
    >
      <mesh
        name="Shape"
        geometry={nodes.Shape.geometry}
        material={materials["Shape Material"]}
        castShadow
        receiveShadow
        position={[22.77, 598.81, 1]}
      />
      <directionalLight
        name="Directional Light"
        castShadow
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-1000}
        shadow-camera-right={1000}
        shadow-camera-top={1000}
        shadow-camera-bottom={-1000}
        position={[200, 300, 300]}
      />

      <hemisphereLight
        name="Default Ambient Light"
        intensity={0.75}
        color="#eaeaea"
      />
    </animated.group>
  );
}
