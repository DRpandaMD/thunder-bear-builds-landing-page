// Standard imports
// THREE here is for the Library three.js
// you can get more info here https://threejs.org/
import '/style.css'
import * as THREE from 'three'

// scene creates a scene
const scene = new THREE.Scene();
// using the most common type of camera where we have (FOV, AspectRatio, Fustrum nearplane, Fustrum Far Plane)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// lets get a renderer, we are telling it to use the canvas we created referenced in the html and css files
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});
//set the pixel ratio to the device ratio
renderer.setPixelRatio(window.devicePixelRatio);
// make the canvas full screen by setting the renderer size to the size of the screen
renderer.setSize(window.innerWidth, window.innerHeight);
// now we set the position of the camera along the Z axis.  Remember this is in 3D!!
camera.position.setZ(20);

// now we can draw
renderer.render(scene, camera);

//from the docs we need to difine a 3d object geometry
// then give the object its material
// then create the mesh object
// then add it to the scene
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({color: 0xf60404, wireframe: true } );
const red_crazy_torus = new THREE.Mesh(geometry, material);
scene.add(red_crazy_torus);

//set up rendering automation
function animate() {
  requestAnimationFrame(animate);
  
  red_crazy_torus.rotation.x += 0.01;
  red_crazy_torus.rotation.y += 0.005;
  red_crazy_torus.rotation.z += 0.01;
  
  renderer.render( scene, camera );

}

animate();