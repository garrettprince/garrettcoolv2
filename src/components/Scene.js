// Package imports
import { Canvas } from "@react-three/fiber";
import { Float, Loader, OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

// Component imports
import PlayDate from "./3D-components/PlayDate";
import FloatingHead from "./3D-components/FloatingHead";
import Phone from "./3D-components/Phone";
import MacBook from "./3D-components/MacBook";
import Grass from "./3D-components/Grass";

export default function Scene({ action, setAction }) {
  return (
    <>
      <Canvas>
        {/* Lighting */}
        <ambientLight intensity={1} />
        <directionalLight position={[4, 5, 6]} intensity={1} color={"#fff"} />
        <directionalLight position={[1, 1, 1]} intensity={1} color={"#fff"} />
        {/* Camera */}
        <OrbitControls />
        Objects
        <Float
          action={action}
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={action === "home" ? 0.7 : 0.25} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.6} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={action === "home" ? [0.1, -0.1] : [0.05, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <FloatingHead action={action} setAction={setAction} />
        </Float>
        <Float
          action={action}
          speed={1}
          rotationIntensity={0.6}
          floatIntensity={0.7}
          floatingRange={[-0.04, 0.04]}
        >
          <PlayDate action={action} setAction={setAction} />
        </Float>
        <Float
          action={action}
          speed={1}
          rotationIntensity={0.6}
          floatIntensity={0.7}
          floatingRange={[-0.04, 0.04]}
        >
          <Phone action={action} setAction={setAction} />
        </Float>
        <Float
          action={action}
          speed={1}
          rotationIntensity={0.6}
          floatIntensity={0.7}
          floatingRange={[-0.04, 0.04]}
        >
          <MacBook action={action} setAction={setAction} />
        </Float>
        {/* Find out why loader doesn't work */}
        {/* <Loader /> */}
        {/* Find out why grass component doesn't render */}
        {/* <Grass /> */}
      </Canvas>
    </>
  );
}
