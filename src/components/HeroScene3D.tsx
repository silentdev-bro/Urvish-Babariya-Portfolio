"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sphere, Capsule, Grid } from "@react-three/drei";
import * as THREE from "three";
function SmoothCoder() {
  const group = useRef<THREE.Group>(null);
  const head = useRef<THREE.Mesh>(null);
  const leftHand = useRef<THREE.Mesh>(null);
  const rightHand = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // Gentle floating breathing effect
      group.current.position.y = Math.sin(t * 1.5) * 0.05 - 1.2;
    }
    if (head.current) {
      // Looking around slightly at the screens
      head.current.rotation.y = Math.sin(t * 0.5) * 0.15 - 0.2;
      head.current.rotation.x = Math.sin(t * 0.8) * 0.05 + 0.1;
    }
    if (leftHand.current && rightHand.current) {
      // Rapid typing motion
      leftHand.current.position.y = Math.sin(t * 20) * 0.04 + 0.7;
      rightHand.current.position.y = Math.cos(t * 20) * 0.04 + 0.7;
    }
  });
  // Sleek, high-tech metallic materials instead of cubes
  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#4C7EFF", roughness: 0.2, metalness: 0.8 }), []);
  const jointMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#121826", roughness: 0.1, metalness: 0.9 }), []);
  return (
    <group ref={group} position={[3, -1, 0]} rotation={[0, -0.3, 0]}>
      {/* Torso */}
