"use client";
import { useReducedMotion } from "motion/react";
import ShapeGrid from "@/components/reactbits/ShapeGrid";

export function CtaTexture() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-auto absolute inset-0 [mask-image:radial-gradient(80%_100%_at_30%_50%,black_10%,transparent_85%)]"
    >
      <ShapeGrid
        shape="hexagon"
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="#2F293A"
        hoverFillColor="#697dcc"
        hoverTrailAmount={0}
      />
    </div>
  );
}