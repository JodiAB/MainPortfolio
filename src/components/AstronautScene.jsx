import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useInView, useReducedMotion } from "motion/react";
import { Astronaut } from "./Astronaut";
export default function AstronautScene() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  return (
    <div ref={ref} className="astronaut-scene">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={visible && !reduced ? "always" : "demand"}
        camera={{ position: [0, 1, 3] }}
        fallback={<div className="orbit-placeholder" />}
      >
        <Suspense fallback={null}>
          <Float enabled={visible && !reduced} speed={1} floatIntensity={0.35}>
            <Astronaut
              reducedMotion={reduced}
              scale={0.45}
              position={[0, -1, -1.5]}
            />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
