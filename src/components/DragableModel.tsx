import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { ModelPath, Urls } from '../constants/path';

const DragableModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

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

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Initialize Control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window); // optional
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 2;
    controlsRef.current = controls

    // Resize handler
    window.addEventListener('resize', onWindowResize);
    function onWindowResize() {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }

    // Load model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(ModelPath, function (gltf) {
      const model = gltf.scene;
      model.position.set(0, 0, 0); // Initial position
      scene.add(model);
    }, undefined, function (error) {
      console.error(error);
    });

    // Cleanup
    return () => {
      renderer.dispose();
      window.removeEventListener('resize', onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    // Animation loop
    const animate = () => {
      const camera = cameraRef.current!;
      const scene = sceneRef.current!;
      const renderer = rendererRef.current!;
      const controls = controlsRef.current!;
      requestAnimationFrame(animate);
      // Smooth Drag
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }, [])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
  )
}

export default DragableModel
