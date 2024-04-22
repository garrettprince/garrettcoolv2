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

export default function Model({ action, setAction }) {
  const { nodes, materials } = useGLTF("/facetest3.gltf");

  const { scale, position, rotation } = useSpring({
    scale: action !== "home" ? 0.4 : 0.95,
    position: action !== "home" ? [-1.2, -1.8, 0] : [0, 0.5, 0],
    rotation: action !== "home" ? [-.1, 0.5, 0] : [0.2, 0, 0],
  });

  const meshRef = useRef();

  return (
    <animated.group
      ref={meshRef}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FBHead003.geometry}
        material={materials["FBHead.001_preview_mat"]}
      />
    </animated.group>
  );
}

useGLTF.preload("/facetest3.gltf");
