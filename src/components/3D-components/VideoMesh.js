import React, { useRef } from "react";
import { useFrame, useVideoTexture } from "@react-three/drei";

export default function VideoMesh({ url, position, scale }) {
  // Get the video texture
  const videoTexture = useVideoTexture(url);

  // Create a reference to the mesh
  const meshRef = useRef();

  // Apply the video texture to the mesh's material
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.map = videoTexture;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={position} scale={scale}>
        <planeGeometry args={[4, 2.25]} />
        <meshStandardMaterial toneMapped={false} />
      </mesh>
    </>
  );
}
