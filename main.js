import * as THREE from "three";

console.log("load js");
console.log(THREE);

const scene = new THREE.Scene();
const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);

const geometry = new THREE.BoxGeometry(1, 1, 1); // Object
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
