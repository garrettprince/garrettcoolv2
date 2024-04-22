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

export function PlayDate({ action, setAction, ...props }) {
  const { nodes, materials } = useGLTF(
    "/playdate-handheld-console-by-panic.glb"
  );

  const { scale, position } = useSpring({
    scale:
      (action === "playDate" ? 1.8 : 0) ||
      (action === "home" ? 0.75 : 0) ||
      (action !== "playDate" || "home" ? 0 : 0),
    position: action === "playDate" ? [0, 0.5, 0] : [1.4, 2.5, 0],
  });

  const meshRef = useRef();

  // Subscribe this component to the render-loop, animating the mesh every frame
  useFrame(() => {
    action === "playDate"
      ? (meshRef.current.rotation.y += 0.005)
      : (meshRef.current.rotation.y = -0.4);
  });

  return (
    // Credit to blendswapisweird for model
    // Can be seen at https://blendswap.com/blend/25751

    <group {...props} dispose={null}>
      <animated.group
        ref={meshRef}
        scale={scale}
        position={position}
        onClick={() =>
          action === "home" ? setAction("playDate") : setAction("home")
        }
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackPlate.geometry}
          material={materials.TexturedGlossPlastic}
          position={[-0.007, 0.044, 0.086]}
          scale={0.181}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt001.geometry}
          material={materials.PlainMetal}
          position={[0.506, 0.531, -0.071]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.178, 0.178, 0.179]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt002.geometry}
          material={materials.PlainMetal}
          position={[0.506, 0.531, 0.01]}
          scale={[0.178, 0.178, 0.179]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt003.geometry}
          material={materials.PlainMetal}
          position={[0.506, -0.515, 0.01]}
          scale={[0.178, 0.178, 0.179]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt004.geometry}
          material={materials.PlainMetal}
          position={[-0.511, -0.515, 0.01]}
          scale={[0.178, 0.178, 0.179]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt005.geometry}
          material={materials.PlainMetal}
          position={[0.506, -0.515, -0.071]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.178, 0.178, 0.179]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt006.geometry}
          material={materials.PlainMetal}
          position={[-0.511, 0.531, -0.071]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.178, 0.178, 0.179]}
        />
        <group position={[-0.007, 0.044, 0]} scale={0.181}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube000.geometry}
            material={materials.TexturedGlossPlastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube000_1.geometry}
            material={materials.GrillMetal}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt.geometry}
          material={materials.PlainMetal}
          position={[-0.511, -0.515, -0.071]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.178, 0.178, 0.179]}
        />
        <group position={[0.599, -0.004, -0.03]} scale={0.204}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CrankBolt.geometry}
            material={materials.SoftTouchPlastic}
            position={[0.084, 0.001, -0.002]}
            scale={0.884}
          />
          <group position={[0.084, 0.001, -0.002]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CrankStem.geometry}
              material={materials.PlainMetal}
              position={[0.002, 0.779, 0]}
              scale={0.884}
            />
            <group position={[0.013, 1.499, -0.001]}>
              <group scale={0.884}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube002.geometry}
                  material={materials.PlainMetal}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube002_1.geometry}
                  material={materials.SoftTouchPlastic}
                />
              </group>
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CrankHinge.geometry}
            material={materials.PlainMetal}
            rotation={[0, 0, Math.PI / 2]}
            scale={0.884}
          />
        </group>
        <group position={[0.234, -0.546, -0.03]} scale={0.181}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.PlainMetal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.SoftTouchPlastic}
          />
        </group>
        <group position={[-0.025, 0.266, 0.009]} scale={0.181}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.BezelGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials.ScreenGlass}
          />
        </group>
        <group position={[-0.007, 0.044, 0]} scale={0.181}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.SoftTouchPlastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials.PlainMetal}
          />
        </group>
      </animated.group>
    </group>
  );
}

useGLTF.preload("/playdate-handheld-console-by-panic.glb");
