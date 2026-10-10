"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroScene3DProps {
  isTwilight?: boolean;
}

export function HeroScene3D({ isTwilight = false }: HeroScene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const waveMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 3, 7);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // River Water Wave Geometry
    const waveGeo = new THREE.PlaneGeometry(16, 16, 32, 32);
    waveGeo.rotateX(-Math.PI / 2);

    // Shader or Material for subtle reflective ripples
    const waveMat = new THREE.MeshBasicMaterial({
      color: isTwilight ? 0x14283f : 0x1b4335,
      wireframe: true,
      transparent: true,
      opacity: isTwilight ? 0.22 : 0.18,
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.position.y = -1.2;
    scene.add(waveMesh);
    waveMeshRef.current = waveMesh;

    // Floating Aromatic Particles (steam & golden particles)
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = Math.random() * 5 - 1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      scales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeo.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const particleMat = new THREE.PointsMaterial({
      color: isTwilight ? 0xdec089 : 0xc3a165,
      size: 0.08,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse / Touch interaction coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const rect = container.getBoundingClientRect();
      targetX = ((clientX - rect.left) / rect.width) * 2 - 1;
      targetY = -(((clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    // Animation Loop
    let clock = new THREE.Clock();
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      camera.position.x = mouseX * 0.8;
      camera.position.y = 3 + mouseY * 0.4;
      camera.lookAt(0, 0, 0);

      // Animate wave vertices
      if (waveMeshRef.current) {
        const positionAttr = waveMeshRef.current.geometry.attributes
          .position as THREE.BufferAttribute;
        for (let i = 0; i < positionAttr.count; i++) {
          const u = positionAttr.getX(i);
          const v = positionAttr.getZ(i);
          const y =
            Math.sin(u * 0.5 + elapsedTime * 1.2) * 0.2 +
            Math.cos(v * 0.6 + elapsedTime * 1.5) * 0.2;
          positionAttr.setY(i, y);
        }
        positionAttr.needsUpdate = true;
      }

      // Animate floating particles rising like coffee steam
      if (particlesRef.current) {
        const posAttr = particlesRef.current.geometry.attributes
          .position as THREE.BufferAttribute;
        for (let i = 0; i < particleCount; i++) {
          let y = posAttr.getY(i) + delta * 0.45;
          if (y > 4.5) {
            y = -1;
            posAttr.setX(i, (Math.random() - 0.5) * 10);
            posAttr.setZ(i, (Math.random() - 0.5) * 6);
          }
          posAttr.setY(i, y);
        }
        posAttr.needsUpdate = true;
        particlesRef.current.rotation.y = elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [isTwilight]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
