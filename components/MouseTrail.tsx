'use client';

import { useCallback, useMemo, useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function MouseTrail() {
  useEffect(() => {
    const initParticles = async () => {
      const { tsParticles } = await import('@tsparticles/engine');
      await loadSlim(tsParticles);
    };
    initParticles();
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

  return (
    <Particles
      id="mouse-trail"
      options={options as any}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
