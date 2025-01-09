import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useEffect, useRef } from 'react';
import { ModelPath, Urls } from '../constants/path';

const MouseControlModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  const handleMouseMove = (event: any) => {
    if (!containerRef.current) return;
    const windowHalfX = containerRef.current.clientWidth / 2;
    const windowHalfY = containerRef.current.clientHeight / 2;

    // Normalize mouse position relative to the window center
    mouse.current.x = (event.clientX - windowHalfX) / windowHalfX;
    mouse.current.y = -(event.clientY - windowHalfY) / windowHalfY;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current!;

    // Initialize scene
    const scene = new THREE.Scene();
    const textureCube = new THREE.CubeTextureLoader().load(Urls);
    scene.background = textureCube;
    scene.fog = new THREE.FogExp2(0xcccccc, 0.02);
    sceneRef.current = scene;

    // Initialize Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.75);
    directionalLight.position.set(10, 10, 10).normalize();
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(60, containerRef.current.clientWidth / containerRef.current.clientHeight, 1, 1000);
    camera.position.set(0, 1, 4);
    cameraRef.current = camera;

    // Load model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      ModelPath,
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0); // Initial position
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error);
      }
    );

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Resize handler
    const onWindowResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [])

  useEffect(() => {
    const animate = () => {
      const camera = cameraRef.current!;
      const scene = sceneRef.current!;
      const renderer = rendererRef.current!;

      // Update camera position based on mouse
      camera.position.x += (mouse.current.x * 3 - camera.position.x) * 0.02; // Smooth transition
      camera.position.y += (mouse.current.y * 3 - camera.position.y) * 0.02; // Smooth transition
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }} onMouseMove={(e) => { handleMouseMove(e) }} />
  )
}

export default MouseControlModel
