import {useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const MyScene = () => {
  const scene: THREE.Scene = new THREE.Scene();
  const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  renderer.setSize(
    window.innerWidth,
    window.innerHeight,
  );
  const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1,1,1);
  const material:THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial(
    { color: 0x0ff00}
  );
  const cube: THREE.Mesh = new THREE.Mesh(
    geometry,
    material
  );
  scene.add(cube);
  const container = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if (container.current) {
      container.current.append(renderer.domElement);
    }
  });

  function animate() {
  }

  function turnRight() {
    for (let i=0;i<45;i++){
      requestAnimationFrame(turnRight);
      cube.rotateY(i);
      renderer.render( scene, camera );
    }
  }

  turnRight();

  return (
    <div
    ref={container}
      onLoad={()=>{
        animate()
      }}
    >
    </div>
  );
}