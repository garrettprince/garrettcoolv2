// Package imports
import { Canvas } from "@react-three/fiber";
import {
  Float,
  Loader,
  OrbitControls,
  Html,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { Flex, Box } from "@react-three/flex";

// Component imports
import PlayDate from "./PlayDate";
import FloatingHead from "./FloatingHead";
import Phone from "./Phone";
import MacBook from "./MacBook";
import Grass from "./Grass";
import PrimaryButton from "../UI/PrimaryButton";

export default function Scene({ action, setAction }) {
  return (
    <>
      <Canvas>
        {/* <OrthographicCamera makeDefault zoom={1.5} position={[0, 0, 5]} /> */}
        {/* Lighting */}
        <ambientLight intensity={1} />
        <directionalLight position={[4, 5, 6]} intensity={1} color={"#fff"} />
        <directionalLight position={[1, 1, 1]} intensity={1} color={"#fff"} />
        {/* Camera */}
        <OrbitControls />

        {/* <Float
          action={action}
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={action === "home" ? 0.7 : 0.25} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.6} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={action === "home" ? [0.1, -0.1] : [0.05, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <FloatingHead action={action} setAction={setAction} />
        </Float> */}
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
        {/* Find out why grass component doesn't render */}
        <Grass />
        {/* <Html className="flex flex-col md:flex-row items-center md:items-start">
          <div className="p-1">
            <FloatingHead action={action} setAction={setAction} />
          </div>
          <div className="p-1">
            <FloatingHead action={action} setAction={setAction} />
          </div>
          <div className="p-1">
            <FloatingHead action={action} setAction={setAction} />
          </div>
        </Html> */}
        {/* <Flex flexDirection="row">
          <Box>
            
            <FloatingHead action={action} setAction={setAction} />
          </Box>
          <Box padding={1}>
            <FloatingHead action={action} setAction={setAction} />
          </Box>
          <Box>
            <FloatingHead action={action} setAction={setAction} />
          </Box>
        </Flex> */}
        {/* The Flex component is used here to create a flexible container that adjusts its layout and alignment based on the screen size. 
          - flexDirection: Sets the direction of the flex items. On small screens, items are stacked in a column, while on medium and larger screens, items are aligned in a row.
          - alignItems: Controls the alignment of items along the cross axis. On small screens, items are centered, while on medium and larger screens, items start from the flex-start position.
          - justifyContent: Centers the items along the main axis.
          - width and height: Both are set to 100% to ensure the Flex container fills its parent container. */}
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          // width="100%"
          // height="100%"
          // size={[3, 3, 2]}
        >
          <Box flex={1} margin={0.5}>
            <FloatingHead action={action} setAction={setAction} />
          </Box>
          <Box flex={1} margin={0.5}>
            <FloatingHead action={action} setAction={setAction} />
          </Box>
          <Box flex={1} margin={0.5}>
            <FloatingHead action={action} setAction={setAction} />
          </Box>
        </Flex>
      </Canvas>
      <Loader />
    </>
  );
}
