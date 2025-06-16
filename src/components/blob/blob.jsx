//src/components/blob/blob.jsx

import { useMemo, useRef } from "react";
import vertexShader from "./VertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame, extend } from "@react-three/fiber";
import { MathUtils, IcosahedronGeometry } from "three";

// Extend to support <icosahedronGeometry />
extend({ IcosahedronGeometry });

const Blob = () => {
  const mesh = useRef();
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 }, // Fixed intensity
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={1.5} // 👈 Reduced scale
      position={[0, 0, 0]}
    >
      <icosahedronGeometry args={[1.2, 20]} /> {/* 👈 Smaller radius */}
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
