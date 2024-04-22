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

export default function GarrettFace({ action, setAction }) {
  const { scale, position, rotation } = useSpring({
    scale: action !== "home" ? 0.7 : 1.8,
    position: action !== "home" ? [-1.2, -1.8, 0] : [0, 0.5, 0],
    rotation: action !== "home" ? [0.2, 0.8, 0] : [0, 0, 0],
  });

  const meshRef = useRef();

  return (
    <animated.mesh
      ref={meshRef}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <animated.boxGeometry />
      <animated.meshStandardMaterial color={"red"} />
    </animated.mesh>
  );
}
