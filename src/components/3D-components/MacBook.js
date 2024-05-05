import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";

export default function MacBook({ action, setAction, ...props }) {
  const { nodes, materials } = useGLTF("./models/macbook_pro_copy.glb");

  const { scale, position, rotation } = useSpring({
    scale:
      (action === "portfolio" ? 0.0035 : 0) ||
      (action === "home" ? 0.0018 : 0) ||
      (action !== "portfolio" || "home" ? 0 : 0),
    position:
      (action === "portfolio" ? [0, 0.5, 0] : 0) ||
      (action === "home" ? [-1.3, 2.5, 0] : 0) ||
      (action !== "portfolio" || "home" ? [-1.2, 2.5, 0] : 0),
    rotation: action === "home" ? [0.5, 0, 0] : [0.5, 0, 0],
  });

  const meshRef = useRef();

  // Subscribe this component to the render-loop, animating the mesh every frame
  useFrame(() => {
    action === "portfolio"
      ? (meshRef.current.rotation.y += 0.005)
      : (meshRef.current.rotation.y = 0);
  });

  return (
    <animated.group
      {...props}
      ref={meshRef}
      scale={scale}
      position={position}
      rotation={rotation}
      onClick={() =>
        action === "home" ? setAction("portfolio") : setAction("home")
      }
    >
      <group>
        <group
          position={[-15.425, 142.72, -212.286]}
          rotation={[-2.919, -0.44, -3.027]}
          scale={0.392}
        >
          <pointLight
            intensity={1.9}
            decay={2}
            distance={2000}
            color="#d591ff"
            position={[-260.186, 737.205, 1655.588]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.069}
          />
          <pointLight
            intensity={1.9}
            decay={2}
            distance={2000}
            color="#ffb9f7"
            position={[-285.397, -58.2, -10.105]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.069}
          />
          <pointLight
            intensity={1.9}
            decay={2}
            distance={2000}
            color="#b76aff"
            position={[0, -58.2, -10.105]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.069}
          />
          <group position={[-1.273, -436.608, -17.856]} scale={[1, 1, 1.002]}>
            <group
              position={[-6.964, 478.108, 16.318]}
              scale={[1.957, 1.957, 1089621.131]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.logo_apple_1.geometry}
                material={nodes.logo_apple_1.material}
                position={[-22.723, 24.789, 0]}
                scale={[0.094, 0.094, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.logo_apple_2.geometry}
                material={nodes.logo_apple_2.material}
                position={[0.139, 47.161, 0]}
                scale={[0.094, 0.094, 0]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.connector.geometry}
              material={nodes.connector.material}
              position={[1.273, -20.522, -5.615]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={2.069}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.screen_1.geometry}
              material={nodes.screen_1.material}
              position={[669.198, 44.158, 0.656]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.899, 0.9, 0.9]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.green_light.geometry}
              material={nodes.green_light.material}
              position={[-25.412, 906.024, 0.612]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.818, 0.81, 0.922]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.black_border_notch_screen.geometry}
              material={nodes.black_border_notch_screen.material}
              position={[691.334, 915.76, 0.966]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[0.902, 0.902, 1.004]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grey_border_creen.geometry}
              material={nodes.grey_border_creen.material}
              position={[0.451, 448.36, 9.162]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.902, 0.902, 1.004]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle.geometry}
              material={nodes.Rectangle.material}
              position={[0, 448.36, 15.068]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.902, 0.902, 1.004]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.metalic_screen.geometry}
              material={nodes.metalic_screen.material}
              position={[0, 448.36, 10.166]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.902, 0.902, 1.004]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.camera.geometry}
              material={nodes.camera.material}
              position={[-3.459, 906.024, 0.612]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.818, 0.81, 0.922]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.border_black_camera.geometry}
              material={nodes.border_black_camera.material}
              position={[-3.459, 906.024, 0.841]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.818, 0.81, 0.922]}
            />
          </group>
          <group position={[-56.341, -457.519, -546.112]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              material={nodes.Cube.material}
              position={[56.341, 17.747, 516.407]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[2.069, 2.069, 2.074]}
            />
            <group
              position={[5.418, -7.126, -0.405]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.base_2.geometry}
                material={nodes.base_2.material}
                position={[10.976, 13.354, 134.945]}
              />
            </group>

            <group
              position={[51.909, -18.233, -11.947]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_3.geometry}
                material={nodes.Subdiv_3.material}
                position={[466.778, 3.425, -412.464]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.092, 1.146, 1.127]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_3_1.geometry}
                material={nodes.Subdiv_3_1.material}
                position={[466.778, -2.641, -412.464]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.033]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_3_2.geometry}
                material={nodes.Subdiv_3_2.material}
                position={[-466.778, 3.425, -412.464]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.092, 1.146, 1.127]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_3_3.geometry}
                material={nodes.Subdiv_3_3.material}
                position={[-463.996, -3.761, -412.392]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.033]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_2.geometry}
                material={nodes.Subdiv_2.material}
                position={[466.778, 3.425, 326.825]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.092, 1.146, 1.127]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv_2_1.geometry}
                material={nodes.Subdiv_2_1.material}
                position={[466.778, -2.641, 326.825]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.033]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Subdiv.geometry}
                material={nodes.Subdiv.material}
                position={[-466.778, 3.425, 326.825]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.092, 1.146, 1.127]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[-466.778, -2.641, 326.825]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.033]}
              />
            </group>
            <group
              position={[57.789, 37.671, 198.94]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus.geometry}
                material={nodes.Torus.material}
                position={[542.483, -3.08, -197.924]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.167}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign.geometry}
                material={nodes.keybord_lign.material}
                position={[306.674, -9.042, 198.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_1.geometry}
                material={nodes.keybord_lign_1.material}
                position={[-550.659, -9.042, 198.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_2.geometry}
                material={nodes.keybord_lign_2.material}
                position={[-364.399, -9.042, 120.028]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_3.geometry}
                material={nodes.keybord_lign_3.material}
                position={[-405.798, -9.042, 40.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_4.geometry}
                material={nodes.keybord_lign_4.material}
                position={[-429.326, -9.042, -40.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_6.geometry}
                material={nodes.Rectangle_6.material}
                position={[-39.254, -9.042, 198.255]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_7.geometry}
                material={nodes.Rectangle_7.material}
                position={[214.76, -9.042, 198.255]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_5.geometry}
                material={nodes.Rectangle_5.material}
                position={[-293.933, -9.042, 198.255]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_14.geometry}
                material={nodes.Rectangle_14.material}
                position={[466.157, -8.966, 180.772]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.667]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_13.geometry}
                material={nodes.Rectangle_13.material}
                position={[466.157, -8.966, 215.498]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.667]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_12.geometry}
                material={nodes.Rectangle_12.material}
                position={[548.766, -8.966, 215.498]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.667]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_11.geometry}
                material={nodes.Rectangle_11.material}
                position={[386.568, -8.966, 215.498]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.667]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8.geometry}
                material={nodes.Rectangle_8.material}
                position={[494.676, -9.042, 120.419]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_4.geometry}
                material={nodes.Rectangle_4.material}
                position={[-499.797, -9.042, 120.419]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_9.geometry}
                material={nodes.Rectangle_9.material}
                position={[513.917, -9.042, 40.905]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_3.geometry}
                material={nodes.Rectangle_3.material}
                position={[-519.297, -9.042, 40.905]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_10.geometry}
                material={nodes.Rectangle_10.material}
                position={[523.26, -9.042, -119.429]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2_1.geometry}
                material={nodes.Rectangle_2_1.material}
                position={[-530.797, -9.042, -40.801]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2.geometry}
                material={nodes.Rectangle_2.material}
                position={[-529.297, -9.042, -196.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_5.geometry}
                material={nodes.keybord_lign_5.material}
                position={[-429.326, -9.042, -196.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keybord_lign_6.geometry}
                material={nodes.keybord_lign_6.material}
                position={[-549.326, -9.042, -118.989]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_1.geometry}
                material={nodes.keyboard_1.material}
                position={[0, -7.703, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.159]}
              />
              <group
                position={[-550.659, -9.042, 198.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_25_instance_1.geometry}
                  material={nodes.mesh_25_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_25_instance_2.geometry}
                  material={nodes.mesh_25_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_25_instance_3.geometry}
                  material={nodes.mesh_25_instance_3.material}
                  position={[162, 0, 0]}
                />
              </group>
              <group
                position={[-364.399, -9.042, 120.028]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_1.geometry}
                  material={nodes.mesh_26_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_2.geometry}
                  material={nodes.mesh_26_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_3.geometry}
                  material={nodes.mesh_26_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_4.geometry}
                  material={nodes.mesh_26_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_5.geometry}
                  material={nodes.mesh_26_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_6.geometry}
                  material={nodes.mesh_26_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_7.geometry}
                  material={nodes.mesh_26_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_8.geometry}
                  material={nodes.mesh_26_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_9.geometry}
                  material={nodes.mesh_26_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_26_instance_10.geometry}
                  material={nodes.mesh_26_instance_10.material}
                  position={[729, 0, 0]}
                />
              </group>
              <group
                position={[-405.798, -9.042, 40.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_1.geometry}
                  material={nodes.mesh_27_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_2.geometry}
                  material={nodes.mesh_27_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_3.geometry}
                  material={nodes.mesh_27_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_4.geometry}
                  material={nodes.mesh_27_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_5.geometry}
                  material={nodes.mesh_27_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_6.geometry}
                  material={nodes.mesh_27_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_7.geometry}
                  material={nodes.mesh_27_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_8.geometry}
                  material={nodes.mesh_27_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_9.geometry}
                  material={nodes.mesh_27_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_10.geometry}
                  material={nodes.mesh_27_instance_10.material}
                  position={[729, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_27_instance_11.geometry}
                  material={nodes.mesh_27_instance_11.material}
                  position={[810, 0, 0]}
                />
              </group>
              <group
                position={[-429.326, -9.042, -40.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_1.geometry}
                  material={nodes.mesh_28_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_2.geometry}
                  material={nodes.mesh_28_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_3.geometry}
                  material={nodes.mesh_28_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_4.geometry}
                  material={nodes.mesh_28_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_5.geometry}
                  material={nodes.mesh_28_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_6.geometry}
                  material={nodes.mesh_28_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_7.geometry}
                  material={nodes.mesh_28_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_8.geometry}
                  material={nodes.mesh_28_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_9.geometry}
                  material={nodes.mesh_28_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_10.geometry}
                  material={nodes.mesh_28_instance_10.material}
                  position={[729, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_11.geometry}
                  material={nodes.mesh_28_instance_11.material}
                  position={[810, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_12.geometry}
                  material={nodes.mesh_28_instance_12.material}
                  position={[891, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_28_instance_13.geometry}
                  material={nodes.mesh_28_instance_13.material}
                  position={[972, 0, 0]}
                />
              </group>
              <group
                position={[-429.326, -9.042, -196.639]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_1.geometry}
                  material={nodes.mesh_43_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_2.geometry}
                  material={nodes.mesh_43_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_3.geometry}
                  material={nodes.mesh_43_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_4.geometry}
                  material={nodes.mesh_43_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_5.geometry}
                  material={nodes.mesh_43_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_6.geometry}
                  material={nodes.mesh_43_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_7.geometry}
                  material={nodes.mesh_43_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_8.geometry}
                  material={nodes.mesh_43_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_9.geometry}
                  material={nodes.mesh_43_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_10.geometry}
                  material={nodes.mesh_43_instance_10.material}
                  position={[729, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_11.geometry}
                  material={nodes.mesh_43_instance_11.material}
                  position={[810, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_12.geometry}
                  material={nodes.mesh_43_instance_12.material}
                  position={[891, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_43_instance_13.geometry}
                  material={nodes.mesh_43_instance_13.material}
                  position={[972, 0, 0]}
                />
              </group>
              <group
                position={[-549.326, -9.042, -118.989]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_1.geometry}
                  material={nodes.mesh_44_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_2.geometry}
                  material={nodes.mesh_44_instance_2.material}
                  position={[81, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_3.geometry}
                  material={nodes.mesh_44_instance_3.material}
                  position={[162, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_4.geometry}
                  material={nodes.mesh_44_instance_4.material}
                  position={[243, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_5.geometry}
                  material={nodes.mesh_44_instance_5.material}
                  position={[324, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_6.geometry}
                  material={nodes.mesh_44_instance_6.material}
                  position={[405, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_7.geometry}
                  material={nodes.mesh_44_instance_7.material}
                  position={[486, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_8.geometry}
                  material={nodes.mesh_44_instance_8.material}
                  position={[567, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_9.geometry}
                  material={nodes.mesh_44_instance_9.material}
                  position={[648, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_10.geometry}
                  material={nodes.mesh_44_instance_10.material}
                  position={[729, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_11.geometry}
                  material={nodes.mesh_44_instance_11.material}
                  position={[810, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_12.geometry}
                  material={nodes.mesh_44_instance_12.material}
                  position={[891, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_44_instance_13.geometry}
                  material={nodes.mesh_44_instance_13.material}
                  position={[972, 0, 0]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_24_instance_1.geometry}
                material={nodes.mesh_24_instance_1.material}
                position={[306.674, -9.042, 198.694]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              position={[-4.129, 34.514, -284.996]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.trackpad_top.geometry}
                material={nodes.trackpad_top.material}
                position={[-61.189, -1.672, -41.264]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.834, 0.835, 5]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.trackpad_border.geometry}
                material={nodes.trackpad_border.material}
                position={[-61.189, -2.481, -41.264]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.834, 0.835, 5]}
              />
            </group>
            <group
              position={[-633.046, 12.571, 270.937]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_9_1.geometry}
                material={nodes.Rectangle_9_1.material}
                position={[-2.047, -20.268, 425.433]}
                rotation={[Math.PI / 2, 1.276, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_10_1.geometry}
                material={nodes.Rectangle_10_1.material}
                position={[0, 0, -105.067]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_9_2.geometry}
                material={nodes.Rectangle_9_2.material}
                position={[0, 2.5, -26.067]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8_1.geometry}
                material={nodes.Rectangle_8_1.material}
                position={[0, 2.945, 79.567]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
            <group position={[745.729, 14.036, 293.612]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8_2.geometry}
                material={nodes.Rectangle_8_2.material}
                position={[-1.384, -18.907, -448.108]}
                rotation={[Math.PI / 2, 1.231, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_3_1.geometry}
                material={nodes.Rectangle_3_1.material}
                position={[0.772, 1.08, 83.997]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse.geometry}
                material={nodes.Ellipse.material}
                position={[0.485, -0.08, -113.497]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_6_1.geometry}
                material={nodes.Rectangle_6_1.material}
                position={[0.485, 0.575, -58.939]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_5_1.geometry}
                material={nodes.Rectangle_5_1.material}
                position={[0.485, 0.575, 5.16]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_4_1.geometry}
                material={nodes.Rectangle_4_1.material}
                position={[0.485, 1.08, 83.997]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
          </group>
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("./models/macbook_pro_copy.glb");
