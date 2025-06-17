// src/components/PageWrapper.jsx
import { Canvas } from "@react-three/fiber";
import Stars from "./blob/Stars";

export default function PageWrapper({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas className="!absolute inset-0 bg-black">
          <ambientLight />
          <directionalLight position={[0, 0, 5]} />
          <Stars />
        </Canvas>
      </div>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 z-20 bg-black/50" />

      {/* Content */}
      <div className="relative z-30 w-full overflow-hidden px-4 sm:px-6 mx-auto">
        {children}
      </div>
    </div>
  );
}
