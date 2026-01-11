'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0a0f14');

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, velocityX: 0, velocityY: 0 };
    const scroll = { y: 0, targetY: 0, normalized: 0 };

    // Fibonacci Spiral Pattern
    const fibonacciGroup = new THREE.Group();
    scene.add(fibonacciGroup);

    // Generate Fibonacci sequence
    const fibonacci = (n: number): number => {
      if (n <= 1) return n;
      let a = 0, b = 1;
      for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
      }
      return b;
    };

    // Create Fibonacci spiral with golden ratio
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const spiralPoints: THREE.Vector3[] = [];
    const spiralColors: number[] = [];
    const spiralSizes: number[] = [];
    const maxIterations = 12;
    const scale = 2.5;

    for (let i = 0; i < maxIterations; i++) {
      const fib = fibonacci(i);
      const angle = i * (Math.PI * 2 / goldenRatio);
      const radius = fib * scale;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (i % 2) * 0.5 - 2;

      spiralPoints.push(new THREE.Vector3(x, y, z));
      
      // Cyber-themed colors (cyan/teal gradient)
      const hue = 0.5 + (i / maxIterations) * 0.15; // 0.5 to 0.65 (cyan to teal)
      const color = new THREE.Color().setHSL(hue, 0.9, 0.5 + (i / maxIterations) * 0.3);
      spiralColors.push(color.r, color.g, color.b);
      
      spiralSizes.push(0.3 + (fib / 50) * 0.5);
    }

    // Create subtle spiral dots - smaller and more refined
    const spiralPositions = new Float32Array(spiralPoints.length * 3);
    const spiralColorArray = new Float32Array(spiralColors);

    spiralPoints.forEach((point, i) => {
      spiralPositions[i * 3] = point.x;
      spiralPositions[i * 3 + 1] = point.y;
      spiralPositions[i * 3 + 2] = point.z;
    });

    const spiralGeometry = new THREE.BufferGeometry();
    spiralGeometry.setAttribute('position', new THREE.BufferAttribute(spiralPositions, 3));
    spiralGeometry.setAttribute('color', new THREE.BufferAttribute(spiralColorArray, 3));

    const spiralMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const spiralDots = new THREE.Points(spiralGeometry, spiralMaterial);
    fibonacciGroup.add(spiralDots);
    
    // Store original spiral positions for animation
    const originalSpiralPositions = new Float32Array(spiralPositions);

    // Create multiple subtle Fibonacci spirals for depth - galaktik görünüm
    const spiralCount = 4;
    const spirals: THREE.Group[] = [];
    for (let s = 0; s < spiralCount; s++) {
      const spiralGroup = new THREE.Group();
      const offset = s * 1.2;
      const rotationOffset = s * 0.4;
      
      const points: THREE.Vector3[] = [];
      const colors: number[] = [];
      for (let i = 0; i < maxIterations; i++) {
        const fib = fibonacci(i);
        const angle = (i * (Math.PI * 2 / goldenRatio)) + rotationOffset;
        const radius = fib * scale * (1 - s * 0.08);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = offset - 6;

        points.push(new THREE.Vector3(x, y, z));
        
        const hue = 0.5 + (s / spiralCount) * 0.12;
        const color = new THREE.Color().setHSL(hue, 0.7, 0.5 + (i / maxIterations) * 0.2);
        colors.push(color.r, color.g, color.b);
      }

      const positions = new Float32Array(points.length * 3);
      points.forEach((point, i) => {
        positions[i * 3] = point.x;
        positions[i * 3 + 1] = point.y;
        positions[i * 3 + 2] = point.z;
      });

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));

      const material = new THREE.PointsMaterial({
        size: 0.05 - s * 0.01,
        vertexColors: true,
        transparent: true,
        opacity: 0.4 - s * 0.08,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      });

      const dots = new THREE.Points(geometry, material);
      spiralGroup.add(dots);
      fibonacciGroup.add(spiralGroup);
      spirals.push(spiralGroup);
    }

    // Subtle glowing orbs - galaktik yıldızlar gibi
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);
    
    const orbCount = 8;
    const orbs: THREE.Mesh[] = [];
    for (let i = 0; i < orbCount; i++) {
      const orbGeometry = new THREE.SphereGeometry(0.15 + Math.random() * 0.2, 16, 16);
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.52 + Math.random() * 0.1, 0.8, 0.6),
        transparent: true,
        opacity: 0.3 + Math.random() * 0.2,
        blending: THREE.AdditiveBlending,
      });
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      // Distribute along Fibonacci spiral
      const angle = (i / orbCount) * Math.PI * 2 * goldenRatio;
      const radius = 20 + Math.random() * 15;
      orb.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.random() - 0.5) * 15 - 5
      );
      orb.userData = {
        pulseSpeed: Math.random() * 1.5 + 0.8,
        pulseOffset: Math.random() * Math.PI * 2,
        originalScale: orb.scale.clone(),
        basePosition: orb.position.clone(),
      };
      orbs.push(orb);
      orbGroup.add(orb);
    }

    // Galaktik partiküller - canlı ve dönen
    const particleCount = 3000;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const particleAngles = new Float32Array(particleCount);
    const particleRadii = new Float32Array(particleCount);
    const particleZOffsets = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Galaktik spiral dağılımı
      const angle = (i / particleCount) * Math.PI * 2 * goldenRatio;
      const radius = Math.sqrt(i / particleCount) * 45;
      const z = (Math.random() - 0.5) * 20 - 8;

      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = Math.sin(angle) * radius;
      particlePositions[i * 3 + 2] = z;

      const hue = 0.5 + (i / particleCount) * 0.15;
      const color = new THREE.Color().setHSL(hue, 0.7, 0.5 + Math.random() * 0.3);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
      
      // Her partikül için hız ve açı
      particleSpeeds[i] = 0.02 + Math.random() * 0.03;
      particleAngles[i] = angle;
      particleRadii[i] = radius;
      particleZOffsets[i] = z;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // Küçük sparkles - galaktik toz gibi
    const sparkleCount = 2000;
    const sparklePositions = new Float32Array(sparkleCount * 3);
    const sparkleColors = new Float32Array(sparkleCount * 3);
    const sparkleAngles = new Float32Array(sparkleCount);
    const sparkleRadii = new Float32Array(sparkleCount);
    const sparkleSpeeds = new Float32Array(sparkleCount);

    for (let i = 0; i < sparkleCount; i++) {
      const angle = (i / sparkleCount) * Math.PI * 2 * goldenRatio * 0.7;
      const radius = Math.sqrt(i / sparkleCount) * 55;
      sparklePositions[i * 3] = Math.cos(angle) * radius;
      sparklePositions[i * 3 + 1] = Math.sin(angle) * radius;
      sparklePositions[i * 3 + 2] = (Math.random() - 0.5) * 25 - 10;

      const hue = 0.5 + Math.random() * 0.12;
      const color = new THREE.Color().setHSL(hue, 0.9, 0.6 + Math.random() * 0.3);
      sparkleColors[i * 3] = color.r;
      sparkleColors[i * 3 + 1] = color.g;
      sparkleColors[i * 3 + 2] = color.b;
      
      sparkleAngles[i] = angle;
      sparkleRadii[i] = radius;
      sparkleSpeeds[i] = 0.015 + Math.random() * 0.02;
    }

    const sparkleGeometry = new THREE.BufferGeometry();
    sparkleGeometry.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3));
    sparkleGeometry.setAttribute('color', new THREE.BufferAttribute(sparkleColors, 3));

    const sparkleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial);
    scene.add(sparkles);

    // Enhanced mouse handler with smooth velocity tracking
    const handleMouseMove = (event: MouseEvent) => {
      const newTargetX = (event.clientX / window.innerWidth) * 2 - 1;
      const newTargetY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Smooth velocity calculation with easing
      mouse.velocityX = (newTargetX - mouse.targetX) * 0.6;
      mouse.velocityY = (newTargetY - mouse.targetY) * 0.6;
      
      mouse.targetX = newTargetX;
      mouse.targetY = newTargetY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Mouse leave handler with smooth return
    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      mouse.velocityX *= 0.5;
      mouse.velocityY *= 0.5;
    };
    window.addEventListener('mouseleave', handleMouseLeave);

    // Scroll handler with smooth tracking
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      scroll.targetY = window.scrollY;
      scroll.normalized = Math.min(scroll.targetY / Math.max(scrollHeight, 1), 1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Enhanced smooth mouse follow with advanced easing
      const mouseEasing = 0.1;
      mouse.x += (mouse.targetX - mouse.x) * mouseEasing;
      mouse.y += (mouse.targetY - mouse.y) * mouseEasing;
      mouse.velocityX *= 0.92;
      mouse.velocityY *= 0.92;

      // Smooth scroll tracking
      scroll.y += (scroll.targetY - scroll.y) * 0.05;
      const scrollNormalized = Math.min(scroll.y / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1), 1);
      
      // Scroll-based camera movement
      const scrollOffset = scrollNormalized * 15;
      camera.position.z = 30 - scrollOffset * 0.3;
      
      // Scroll-based rotation for depth effect
      const scrollRotation = scrollNormalized * Math.PI * 0.1;

      // Enhanced mouse interaction with scroll combination
      const mouseInfluence = 1 + Math.abs(mouse.x) + Math.abs(mouse.y);
      const scrollInfluence = 1 + scrollNormalized * 0.5;

      // Animate Fibonacci spiral group with combined mouse and scroll interaction
      fibonacciGroup.rotation.z = time * 0.02 + mouse.x * 0.12 + scrollRotation;
      fibonacciGroup.rotation.x = mouse.y * 0.18 + scrollNormalized * 0.1;
      fibonacciGroup.rotation.y = mouse.x * 0.15;
      fibonacciGroup.position.x = mouse.x * 4 + Math.sin(scrollNormalized * Math.PI) * 2;
      fibonacciGroup.position.y = mouse.y * 3 + scrollNormalized * 1.5;
      fibonacciGroup.position.z = -scrollOffset * 0.2;

      // Animate spiral dots - enhanced with scroll and mouse
      const spiralPosAttr = spiralDots.geometry.getAttribute('position');
      const spiralPos = spiralPosAttr.array as Float32Array;

      for (let i = 0; i < spiralPoints.length; i++) {
        const baseX = originalSpiralPositions[i * 3];
        const baseY = originalSpiralPositions[i * 3 + 1];
        const baseZ = originalSpiralPositions[i * 3 + 2];

        // Enhanced mouse interaction with smooth wave
        const mouseWorldX = mouse.x * 25;
        const mouseWorldY = mouse.y * 18;
        const dx = baseX - mouseWorldX;
        const dy = baseY - mouseWorldY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const waveRadius = 15;
        const waveStrength = Math.max(0, 1 - dist / waveRadius);
        const wave = Math.sin(dist * 0.25 - time * 2) * waveStrength * 1.2;

        // Scroll-based pulsing
        const scrollPulse = Math.sin(scrollNormalized * Math.PI * 2 + i * 0.5) * 0.2;
        const timePulse = Math.sin(time * 0.4 + i * 0.3) * 0.15;

        spiralPos[i * 3] = baseX + wave * 0.4 + scrollPulse * 0.3;
        spiralPos[i * 3 + 1] = baseY + wave * 0.4 + scrollPulse * 0.3;
        spiralPos[i * 3 + 2] = baseZ + wave * 0.6 + timePulse + scrollNormalized * 0.5;
      }
      spiralPosAttr.needsUpdate = true;

      // Animate multiple spirals - enhanced with scroll
      spirals.forEach((spiral, s) => {
        const scrollRotation = scrollNormalized * (s + 1) * 0.05;
        spiral.rotation.z = time * (0.008 + s * 0.003) + mouse.x * 0.04 + scrollRotation;
        spiral.rotation.x = mouse.y * 0.06 + scrollNormalized * 0.03;
        const pulse = Math.sin(time * 0.2 + s + scrollNormalized * Math.PI) * 0.12;
        const scrollScale = 1 + scrollNormalized * 0.1;
        spiral.scale.setScalar((1 + pulse) * scrollScale);
      });

      // Animate glowing orbs - enhanced with scroll and mouse
      orbs.forEach((orb, index) => {
        const { pulseSpeed, pulseOffset, originalScale, basePosition } = orb.userData;
        const pulse = 1 + Math.sin(time * pulseSpeed + pulseOffset) * 0.35;
        const scrollPulse = 1 + Math.sin(scrollNormalized * Math.PI * 2 + index) * 0.15;
        orb.scale.set(
          originalScale.x * pulse * scrollPulse,
          originalScale.y * pulse * scrollPulse,
          originalScale.z * pulse * scrollPulse
        );
        (orb.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(time * pulseSpeed + pulseOffset) * 0.25 + scrollNormalized * 0.1;
        
        // Enhanced floating with scroll
        const scrollOffsetX = Math.sin(scrollNormalized * Math.PI + index) * 1;
        const scrollOffsetY = Math.cos(scrollNormalized * Math.PI + index) * 1;
        orb.position.x = basePosition.x + Math.sin(time * 0.3 + pulseOffset) * 0.6 + scrollOffsetX + mouse.x * 2;
        orb.position.y = basePosition.y + Math.cos(time * 0.3 + pulseOffset) * 0.6 + scrollOffsetY + mouse.y * 1.5;
        orb.position.z = basePosition.z + scrollNormalized * 2;
      });

      // Animate particles - enhanced with scroll
      const particlePosAttr = particles.geometry.getAttribute('position');
      const particlePos = particlePosAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const scrollSpeedMultiplier = 1 + scrollNormalized * 0.3;
        const newAngle = particleAngles[i] + time * particleSpeeds[i] * scrollSpeedMultiplier;
        const radius = particleRadii[i] * (1 + scrollNormalized * 0.2);
        const baseX = Math.cos(newAngle) * radius;
        const baseY = Math.sin(newAngle) * radius;
        
        // Enhanced mouse interaction with smooth easing
        const mouseInfluence = 1 + (Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.2;
        particlePos[i * 3] = baseX + mouse.x * 4 * mouseInfluence + Math.sin(scrollNormalized * Math.PI + i * 0.1) * 1;
        particlePos[i * 3 + 1] = baseY + mouse.y * 3 * mouseInfluence + Math.cos(scrollNormalized * Math.PI + i * 0.1) * 1;
        particlePos[i * 3 + 2] = particleZOffsets[i] + Math.sin(time * 0.5 + i * 0.01) * 0.4 + scrollNormalized * 3;
      }
      particlePosAttr.needsUpdate = true;
      
      // Rotate particles - enhanced with scroll
      particles.rotation.z = time * 0.015 + mouse.x * 0.06 + scrollNormalized * 0.1;
      particles.rotation.x = mouse.y * 0.05 + scrollNormalized * 0.05;
      particles.rotation.y = mouse.x * 0.05;
      
      // Animate sparkles - enhanced with scroll
      const sparklePosAttr = sparkles.geometry.getAttribute('position');
      const sparklePos = sparklePosAttr.array as Float32Array;
      for (let i = 0; i < sparkleCount; i++) {
        const scrollSpeedMultiplier = 1 + scrollNormalized * 0.25;
        const newAngle = sparkleAngles[i] + time * sparkleSpeeds[i] * scrollSpeedMultiplier;
        const radius = sparkleRadii[i] * (1 + scrollNormalized * 0.15);
        sparklePos[i * 3] = Math.cos(newAngle) * radius + mouse.x * 2.5 + Math.sin(scrollNormalized * Math.PI * 2 + i * 0.05) * 0.5;
        sparklePos[i * 3 + 1] = Math.sin(newAngle) * radius + mouse.y * 2 + Math.cos(scrollNormalized * Math.PI * 2 + i * 0.05) * 0.5;
        sparklePos[i * 3 + 2] += Math.sin(time * 0.3 + i * 0.02) * 0.15 + scrollNormalized * 2;
      }
      sparklePosAttr.needsUpdate = true;
      
      sparkles.rotation.z = -time * 0.01 + mouse.x * 0.04 + scrollNormalized * 0.08;
      sparkles.rotation.x = mouse.y * 0.04 + scrollNormalized * 0.04;
      sparkles.rotation.y = mouse.x * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
