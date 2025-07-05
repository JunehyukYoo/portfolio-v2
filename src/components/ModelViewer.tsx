import { type FC, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  url: string;
  animation: "floating" | "idle" | "moon_walk" | "wave";
}

const Model: FC<ModelProps> = ({ url, animation }) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    console.log("Animations available:", names);
    if (actions && names.length > 0) {
      actions[animation]?.reset().fadeIn(0.5).play();
    }
  }, [actions, names, animation]);

  return <primitive ref={group} object={scene} position={[0, -1.1, 0]} />;
};

const ModelViewer: FC<{
  url: string;
  animation: "floating" | "idle" | "moon_walk" | "wave";
}> = ({ url, animation }) => {
  return (
    <Canvas camera={{ position: [0, 2, 3], fov: 50 }} className="w-full h-full">
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Environment */}
      <Environment preset="sunset" />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      {/* Model */}
      <Model url={url} animation={animation} />
    </Canvas>
  );
};

export default ModelViewer;
