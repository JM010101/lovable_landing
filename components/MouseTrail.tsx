'use client';

import { useMemo, useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const Particles = dynamic(() => import('@tsparticles/react').then((mod) => mod.default), {
  ssr: false,
});

export default function MouseTrail() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'trail' as const,
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 0.1,
            pauseOnStop: false,
            quantity: 3,
          },
        },
      },
      particles: {
        color: {
          value: ['#6366f1', '#8b5cf6', '#ec4899'],
        },
        links: {
          enable: false,
        },
        move: {
          direction: 'none' as const,
          enable: true,
          outModes: {
            default: 'destroy' as const,
          },
          random: false,
          speed: { min: 0.5, max: 2 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 0,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
            destroy: 'none' as const,
            startValue: 'random' as const,
          },
        },
        shape: {
          type: 'circle' as const,
        },
        size: {
          value: { min: 2, max: 5 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
            destroy: 'none' as const,
            startValue: 'random' as const,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!isMounted) {
    return null;
  }

  return (
    <Particles
      id="mouse-trail"
      init={particlesInit}
      options={options as any}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
