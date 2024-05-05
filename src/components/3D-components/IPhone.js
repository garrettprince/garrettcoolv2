import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";

export default function IPhone({ props, action, setAction }) {
  const { nodes, materials } = useGLTF("./models/i_phone_14_pro_copy (1).glb");

  const { scale, position } = useSpring({
    scale:
      (action === "contactPhone" ? 0.005 : 0) ||
      (action === "home" ? 0.00225 : 0) ||
      (action !== "contactPhone" || "home" ? 0 : 0),
    position:
      (action === "contactPhone" ? [0, 0.5, 0] : 0) ||
      (action === "home" ? [-1.3, -1.1, 0] : 0) ||
      (action !== "contactPhone" || "home" ? [-1.2, -1.8, 0] : 0),
  });

  const meshRef = useRef();

  // Subscribe this component to the render-loop, animating the mesh every frame
  useFrame(() => {
    action === "contactPhone"
      ? (meshRef.current.rotation.y += 0.005)
      : (meshRef.current.rotation.y = 0);
  });

  return (
    <group {...props} dispose={null}>
      <animated.group
        ref={meshRef}
        scale={scale}
        position={position}
        onClick={() =>
          action === "home" ? setAction("contactPhone") : setAction("home")
        }
      >
        <group position={[-0.296, 20.845, -4.123]}>
          <group position={[0.099, 7.825, 4.123]}>
            <group position={[-11.5, 252.794, 15.883]}>
              <group position={[11.579, -12.261, 1.281]}>
                <mesh
                  geometry={nodes.Ellipse_2.geometry}
                  material={nodes.Ellipse_2.material}
                  position={[27.831, 0.003, -0.346]}
                />
                <mesh
                  geometry={nodes.Ellipse.geometry}
                  material={nodes.Ellipse.material}
                  position={[27.831, 0.003, -0.814]}
                />
                <mesh
                  geometry={nodes.Rectangle.geometry}
                  material={nodes.Rectangle.material}
                  position={[0, 0, -1.067]}
                />
              </group>
              <mesh
                geometry={nodes.Rectangle_5.geometry}
                material={nodes.Rectangle_5.material}
                position={[11.5, 8.794, -0.007]}
              />
            </group>
            <group position={[7.816, -269.075, 0]}>
              <mesh
                geometry={nodes.Ellipse_6.geometry}
                material={nodes.Ellipse_6.material}
                position={[-35.184, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Ellipse_5.geometry}
                material={nodes.Ellipse_5.material}
                position={[59.184, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Ellipse_6_1.geometry}
                material={nodes.Ellipse_6_1.material}
                position={[-51.184, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Ellipse_4.geometry}
                material={nodes.Ellipse_4.material}
                position={[51.184, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Ellipse_3.geometry}
                material={nodes.Ellipse_3.material}
                position={[43.184, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Ellipse_6_2.geometry}
                material={nodes.Ellipse_6_2.material}
                position={[-59.184, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Ellipse_2_1.geometry}
                material={nodes.Ellipse_2_1.material}
                position={[35.184, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Ellipse_1.geometry}
                material={nodes.Ellipse_1.material}
                position={[20.184, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Rectangle_2_1.geometry}
                material={nodes.Rectangle_2_1.material}
                position={[-7.816, -0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Rectangle_2.geometry}
                material={nodes.Rectangle_2.material}
                position={[-7.816, 0.075, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group
              position={[26.328, 59.317, -14.804]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.066, 0.066, 0.001]}
            >
              <mesh
                geometry={nodes.Untitled.geometry}
                material={nodes.Untitled.material}
                position={[181, -238, 0]}
              />
              <mesh
                geometry={nodes.Untitled_1.geometry}
                material={nodes.Untitled_1.material}
                position={[423, -1, 0.01]}
              />
            </group>
            <group position={[52.978, 191.101, -23.025]} scale={1.159}>
              <mesh
                geometry={nodes.Cube_2.geometry}
                material={nodes.Cube_2.material}
                position={[0.243, -2.526, -1.133]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.863}
              />
              <mesh
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[0.243, -2.526, -1.814]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.863}
              />
              <group
                position={[-25.872, 36.929, -1.908]}
                scale={[0.939, 0.939, 0.846]}
              >
                <mesh
                  geometry={nodes.Ellipse_2.geometry}
                  material={nodes.Ellipse_2.material}
                  position={[0.129, 0.391, -2.253]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[1, 1, 1.11]}
                />
                <mesh
                  geometry={nodes.Ellipse_2_2.geometry}
                  material={nodes.Ellipse_2_2.material}
                  position={[0, 0, 0.661]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={[0.913, 0.913, 1]}
                />
                <mesh
                  geometry={nodes.Ellipse_3.geometry}
                  material={nodes.Ellipse_3.material}
                  position={[0.002, 0, 0.336]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={[0.913, 0.913, 1]}
                />
              </group>
              <mesh
                geometry={nodes.Ellipse_3_1.geometry}
                material={nodes.Ellipse_3_1.material}
                position={[-25.872, -41.025, -1.383]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[0.857, 0.857, 0.846]}
              />
              <group position={[25.454, -30.011, -0.782]} scale={0.864}>
                <mesh
                  geometry={nodes.Ellipse_7.geometry}
                  material={nodes.Ellipse_7.material}
                  position={[0, 0, 0.929]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_6_3.geometry}
                  material={nodes.Ellipse_6_3.material}
                  position={[0, 0, 0.496]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_10.geometry}
                  material={nodes.Ellipse_10.material}
                  position={[-0.167, -0.123, -2.074]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_5_1.geometry}
                  material={nodes.Ellipse_5_1.material}
                  position={[-0.167, -0.123, 1.099]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_4_1.geometry}
                  material={nodes.Ellipse_4_1.material}
                  position={[-0.5, -0.185, 1.597]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_9.geometry}
                  material={nodes.Ellipse_9.material}
                  position={[-3.496, 1.998, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  geometry={nodes.Ellipse_8.geometry}
                  material={nodes.Ellipse_8.material}
                  position={[1.502, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_3_2.geometry}
                  material={nodes.Ellipse_3_2.material}
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
              <group position={[-25.302, -2.156, -0.782]} scale={0.864}>
                <mesh
                  geometry={nodes.Ellipse_7_1.geometry}
                  material={nodes.Ellipse_7_1.material}
                  position={[0, 0, 0.929]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_6_4.geometry}
                  material={nodes.Ellipse_6_4.material}
                  position={[0, 0, 0.496]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_10_1.geometry}
                  material={nodes.Ellipse_10_1.material}
                  position={[-0.167, -0.123, -2.074]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_5_2.geometry}
                  material={nodes.Ellipse_5_2.material}
                  position={[-0.167, -0.123, 1.099]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_4_2.geometry}
                  material={nodes.Ellipse_4_2.material}
                  position={[-0.5, -0.185, 1.597]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_9_1.geometry}
                  material={nodes.Ellipse_9_1.material}
                  position={[-3.496, 1.998, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  geometry={nodes.Ellipse_8_1.geometry}
                  material={nodes.Ellipse_8_1.material}
                  position={[1.502, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_3_3.geometry}
                  material={nodes.Ellipse_3_3.material}
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
              <group position={[26.183, 23.962, -0.782]} scale={0.864}>
                <mesh
                  geometry={nodes.Ellipse_7_2.geometry}
                  material={nodes.Ellipse_7_2.material}
                  position={[0, 0, 0.929]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_6_5.geometry}
                  material={nodes.Ellipse_6_5.material}
                  position={[0, 0, 0.496]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_10_2.geometry}
                  material={nodes.Ellipse_10_2.material}
                  position={[-0.167, -0.123, -2.074]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_5_3.geometry}
                  material={nodes.Ellipse_5_3.material}
                  position={[-0.167, -0.123, 1.099]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_4_3.geometry}
                  material={nodes.Ellipse_4_3.material}
                  position={[-0.5, -0.185, 1.597]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_9_2.geometry}
                  material={nodes.Ellipse_9_2.material}
                  position={[-3.496, 1.998, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  geometry={nodes.Ellipse_8_2.geometry}
                  material={nodes.Ellipse_8_2.material}
                  position={[1.502, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  geometry={nodes.Ellipse_3_4.geometry}
                  material={nodes.Ellipse_3_4.material}
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
            </group>
            <group
              position={[10.634, 18.946, 0.826]}
              scale={[1.018, 1.018, 1.037]}
            >
              <mesh
                geometry={nodes.IMG_5648PNG.geometry}
                material={nodes.IMG_5648PNG.material}
                position={[-10.45, -18.61, 14.55]}
                scale={[0.983, 0.982, 0.964]}
              />
              <mesh
                geometry={nodes.Screen_Border.geometry}
                material={nodes.Screen_Border.material}
                position={[-10.451, -18.606, 14.386]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.079, 1.08, 1.065]}
              />
              <mesh
                geometry={nodes.Back_Side.geometry}
                material={nodes.Back_Side.material}
                position={[-10.041, -18.066, -9.559]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.079, 1.08, 1.065]}
              />
              <group
                position={[-139.661, 74.636, 0.258]}
                scale={[0.983, 0.982, 0.964]}
              >
                <mesh
                  geometry={nodes.Ellipse_4.geometry}
                  material={nodes.Ellipse_4.material}
                  position={[-0.02, -262.946, -0.093]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  geometry={nodes.Rectangle_9.geometry}
                  material={nodes.Rectangle_9.material}
                  position={[0.773, 61.218, -0.259]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.037, 1.018, 1.018]}
                />
                <mesh
                  geometry={nodes.Rectangle_8.geometry}
                  material={nodes.Rectangle_8.material}
                  position={[-1.512, 61.239, 2.074]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.037, 1.018, 1.018]}
                />
                <mesh
                  geometry={nodes.Rectangle_7.geometry}
                  material={nodes.Rectangle_7.material}
                  position={[-1.512, 11.96, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.037, 1.018, 1.018]}
                />
                <mesh
                  geometry={nodes.Rectangle_11.geometry}
                  material={nodes.Rectangle_11.material}
                  position={[0.235, -241.123, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.037, 1.018, 1.018]}
                />
                <mesh
                  geometry={nodes.Rectangle_10.geometry}
                  material={nodes.Rectangle_10.material}
                  position={[0.538, -241.123, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.037, 1.018, 1.018]}
                />
                <mesh
                  geometry={nodes.Rectangle_5_1.geometry}
                  material={nodes.Rectangle_5_1.material}
                  position={[-1.512, -38.907, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.037, 1.018, 1.018]}
                />
              </group>
              <group
                position={[118.565, -3.06, 0.258]}
                scale={[0.983, 0.982, 0.964]}
              >
                <mesh
                  geometry={nodes.Button.geometry}
                  material={nodes.Button.material}
                  position={[-0.254, -60.23, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.037, 1.018, 1.018]}
                />
                <mesh
                  geometry={nodes.Button_1.geometry}
                  material={nodes.Button_1.material}
                  position={[-1.526, 51.463, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.037, 1.018, 1.018]}
                />
              </group>
              <mesh
                geometry={nodes.Metal_Border.geometry}
                material={nodes.Metal_Border.material}
                position={[-10.451, -18.606, 13.043]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.079, 1.08, 1.065]}
              />
            </group>
            <mesh
              geometry={nodes.Rectangle_4.geometry}
              material={nodes.Rectangle_4.material}
              position={[76.086, 137.8, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Rectangle_3.geometry}
              material={nodes.Rectangle_3.material}
              position={[-62.448, -137.8, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Rectangle_2.geometry}
              material={nodes.Rectangle_2.material}
              position={[0, -215.434, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rectangle_1.geometry}
              material={nodes.Rectangle_1.material}
              position={[0, 210.743, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      </animated.group>
    </group>
  );
}

useGLTF.preload("./models/i_phone_14_pro_copy (1).glb");
