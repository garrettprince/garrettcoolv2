import { useGLTF, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";

export default function FloatingHead({ action, setAction }) {
  const { nodes, materials } = useGLTF("./models/facetest3.gltf");

  const { scale, position, rotation } = useSpring({
    scale: action !== "home" ? 0.4 : 0.3,
    position: action !== "home" ? [-3.2, -1.8, 0] : [0, 0.5, 0],
    rotation: action !== "home" ? [-0.1, 0.5, 0] : [0.2, 0, 0],
  });

  const meshRef = useRef();

  return (
    <animated.group
      ref={meshRef}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <PresentationControls>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FBHead003.geometry}
          material={materials["FBHead.001_preview_mat"]}
        />
      </PresentationControls>
    </animated.group>
  );
}

useGLTF.preload("/models/facetest3.gltf");
