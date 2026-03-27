"use client";

import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type Props = {
  className?: string;
  particleColor?: string;
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
};

export const SparklesCore = ({
  className,
  particleColor = "#ffffff",
  particleDensity = 80,
  minSize = 0.4,
  maxSize = 1,
}: Props) => {
  const [init, setInit] = useState(false);
  const id = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {};

  return (
    <div className={className}>
      {init && (
        <Particles
          id={id}
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            particles: {
              number: { value: particleDensity },
              color: { value: particleColor },
              size: {
                value: { min: minSize, max: maxSize },
              },
              move: {
                enable: true,
                speed: 0.5,
              },
              opacity: {
                value: { min: 0.1, max: 1 },
              },
            },
          }}
        />
      )}
    </div>
  );
};