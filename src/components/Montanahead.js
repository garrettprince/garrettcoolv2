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

export default function Montanahead({ action, setAction, ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/DkkLIG8aBvbDdWio/scene.splinecode"
  );

  const { scale, position } = useSpring({
    scale:
      (action === "montanahead" ? 0.005 : 0) ||
      (action === "home" ? 0.0026 : 0) ||
      (action !== "montanahead" || "home" ? 0 : 0),
    position:
      (action === "montanahead" ? [0, 0.5, 0] : 0) ||
      (action === "home" ? [0, 3.1, 0] : 0) ||
      (action !== "montanahead" || "home" ? [0, 3.1, 0] : 0),
  });

  const meshRef = useRef();

  useFrame(() => {
    action === "montanahead"
      ? (meshRef.current.rotation.z -= 0.005)
      : (meshRef.current.rotation.z = -0.25);
  });

  return (
    <animated.group
      {...props}
      dispose={null}
      ref={meshRef}
      scale={scale}
      position={position}
      onClick={() =>
        action === "home" ? setAction("montanahead") : setAction("home")
      }
      rotation={[1.5, 0, 0]}
    >
      <group
        name="Paper"
        position={[-2.44, 14.88, -2.26]}
        rotation={[0, 0, -Math.PI]}
      >
        <mesh
          name="3dbackdemo.png"
          geometry={nodes["3dbackdemo.png"].geometry}
          material={materials["3dbackdemo.png Material"]}
          castShadow
          receiveShadow
          position={[82.26, 21.69, -0.85]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="3dsidedemo.png"
          geometry={nodes["3dsidedemo.png"].geometry}
          material={materials["3dsidedemo.png Material"]}
          castShadow
          receiveShadow
          position={[131.33, -0.56, 0.19]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="3dfrontdemo.png"
          geometry={nodes["3dfrontdemo.png"].geometry}
          material={materials["3dfrontdemo.png Material"]}
          castShadow
          receiveShadow
          position={[-2.36, -21.69, 0.85]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        />
      </group>
      <group
        name="Spokes 2"
        position={[16.73, 13.96, -90.05]}
        rotation={[0, 0, -Math.PI]}
      >
        <mesh
          name="Cube 6"
          geometry={nodes["Cube 6"].geometry}
          material={materials["Cube 6 Material"]}
          castShadow
          receiveShadow
          position={[11.93, 0, -18.87]}
          rotation={[-Math.PI / 2, 0, 0.97]}
          scale={1}
        />
        <mesh
          name="Cube 5"
          geometry={nodes["Cube 5"].geometry}
          material={materials["Cube 5 Material"]}
          castShadow
          receiveShadow
          position={[-11.53, 0, 19.77]}
          rotation={[-Math.PI / 2, 0, 0.97]}
          scale={1}
        />
        <mesh
          name="Cube 4"
          geometry={nodes["Cube 4"].geometry}
          material={materials["Cube 4 Material"]}
          castShadow
          receiveShadow
          position={[12.04, 0, 19.23]}
          rotation={[-Math.PI / 2, 0, 0.69]}
          scale={1}
        />
        <mesh
          name="Cube 3"
          geometry={nodes["Cube 3"].geometry}
          material={materials["Cube 3 Material"]}
          castShadow
          receiveShadow
          position={[-12.7, 0, -19.78]}
          rotation={[-Math.PI / 2, 0, 0.5]}
          scale={1}
        />
        <mesh
          name="Cube 2"
          geometry={nodes["Cube 2"].geometry}
          material={materials["Cube 2 Material"]}
          castShadow
          receiveShadow
          position={[22.76, 0, 0.06]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials["Cube Material"]}
          castShadow
          receiveShadow
          position={[-22.76, 0, 0.35]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
      </group>
      <group name="Spokes" position={[-14.73, 16, 89.85]} rotation={[0, 0, 0]}>
        <mesh
          name="Cube 61"
          geometry={nodes["Cube 61"].geometry}
          material={materials["Cube 61 Material"]}
          castShadow
          receiveShadow
          position={[11.93, 0, -18.87]}
          rotation={[-Math.PI / 2, 0, 0.97]}
          scale={1}
        />
        <mesh
          name="Cube 51"
          geometry={nodes["Cube 51"].geometry}
          material={materials["Cube 51 Material"]}
          castShadow
          receiveShadow
          position={[-11.53, 0, 19.77]}
          rotation={[-Math.PI / 2, 0, 0.97]}
          scale={1}
        />
        <mesh
          name="Cube 41"
          geometry={nodes["Cube 41"].geometry}
          material={materials["Cube 41 Material"]}
          castShadow
          receiveShadow
          position={[12.04, 0, 19.23]}
          rotation={[-Math.PI / 2, 0, 0.69]}
          scale={1}
        />
        <mesh
          name="Cube 31"
          geometry={nodes["Cube 31"].geometry}
          material={materials["Cube 31 Material"]}
          castShadow
          receiveShadow
          position={[-12.7, 0, -19.78]}
          rotation={[-Math.PI / 2, 0, 0.5]}
          scale={1}
        />
        <mesh
          name="Cube 21"
          geometry={nodes["Cube 21"].geometry}
          material={materials["Cube 21 Material"]}
          castShadow
          receiveShadow
          position={[22.76, 0, 0.06]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name="Cube1"
          geometry={nodes.Cube1.geometry}
          material={materials["Cube1 Material"]}
          castShadow
          receiveShadow
          position={[-22.76, 0, 0.35]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
      </group>
      <mesh
        name="Shape 2"
        geometry={nodes["Shape 2"].geometry}
        material={materials["Shape 2 Material"]}
        castShadow
        receiveShadow
        position={[-257.7, 60.48, 256.69]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Shape"
        geometry={nodes.Shape.geometry}
        material={materials["Shape Material"]}
        castShadow
        receiveShadow
        position={[-266.11, 60.48, 256.31]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Tape"
        geometry={nodes.Tape.geometry}
        material={materials["Tape Material"]}
        castShadow
        receiveShadow
        position={[11.49, 3.5, 53.83]}
        rotation={[-Math.PI / 2, 0, -1.55]}
        scale={1}
      />
      <mesh
        name="Boolean 2"
        geometry={nodes["Boolean 2"].geometry}
        material={nodes["Boolean 2"].material}
        castShadow
        receiveShadow
        position={[0, 16, 0]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <directionalLight
        name="Directional Light"
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-1250}
        shadow-camera-right={1250}
        shadow-camera-top={1250}
        shadow-camera-bottom={-1250}
        position={[-87.94, 379.43, 751.32]}
      />
      <group name="Case" position={[1, 14.99, 0]}>
        <mesh
          name="Case Top"
          geometry={nodes["Case Top"].geometry}
          material={materials["Glass Test"]}
          castShadow
          receiveShadow
          position={[0, -0.82, -209.99]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1}
        />
        <mesh
          name="Case Side Right"
          geometry={nodes["Case Side Right"].geometry}
          material={materials["Glass Test"]}
          castShadow
          receiveShadow
          position={[135, 0.01, -0.13]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={1}
        />
        <mesh
          name="Case Side Left"
          geometry={nodes["Case Side Left"].geometry}
          material={materials["Glass Test"]}
          castShadow
          receiveShadow
          position={[-131, 0.01, -0.53]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={1}
        />
        <mesh
          name="Case Bottom"
          geometry={nodes["Case Bottom"].geometry}
          material={materials["Glass Test"]}
          castShadow
          receiveShadow
          position={[0, -0.82, 206]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1}
        />
        <mesh
          name="Case Back"
          geometry={nodes["Case Back"].geometry}
          material={materials["Glass Test"]}
          castShadow
          receiveShadow
          position={[0, 17.99, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1}
        />
        <mesh
          name="Case Front"
          geometry={nodes["Case Front"].geometry}
          material={materials["Glass Test"]}
          castShadow
          receiveShadow
          position={[0, -22, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1}
        />
      </group>
    </animated.group>
  );
}
