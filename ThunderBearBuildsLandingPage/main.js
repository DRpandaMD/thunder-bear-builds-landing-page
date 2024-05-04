// Standard imports
// THREE here is for the Library three.js
// you can get more info here https://threejs.org/
import '/style.css'
import * as THREE from 'three'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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
camera.position.setZ(38);

// adding orbit controls to allow me to move around the scene
const controls = new OrbitControls( camera, renderer.domElement);

// now we can draw
renderer.render(scene, camera);

//from the docs we need to difine a 3d object geometry
// then give the object its material
// then create the mesh object
// then add it to the scene
const geometry = new THREE.TorusKnotGeometry(8, 2, 100, 32);
const material = new THREE.MeshStandardMaterial( {color: 0xf60404} );
const red_crazy_torus = new THREE.Mesh(geometry, material);
scene.add(red_crazy_torus);

//lighting
// adding ambient light so I can see something
const amb_light = new THREE.AmbientLight( 0x404040 );
scene.add(amb_light);


//point light 1, positioned up and to the left from the z axis
const point_light01 = new THREE.PointLight (0xffffff, 5, 0, 0);
point_light01.position.set( -10, 7, 5 );
scene.add(point_light01);

//point light 2, 
const point_light02 = new THREE.PointLight(0xffffff, 5, 0, 0);
point_light02.position.set(5, -5, 5);
scene.add(point_light02);


//point light helper to help me see where in the world the point light is
const sphere_size = 1;
const light_helper01 = new THREE.PointLightHelper(point_light01, sphere_size);
const light_helper02 = new THREE.PointLightHelper(point_light02, sphere_size);
scene.add(light_helper01, light_helper02);

//grid helper
const grid_helper = new THREE.GridHelper(100, 100);
scene.add(grid_helper);

//set up rendering automation
function animate() {
  requestAnimationFrame(animate);
  
  red_crazy_torus.rotation.x += 0.01;
  red_crazy_torus.rotation.y += 0.005;
  red_crazy_torus.rotation.z += 0.01;

  controls.update();
  
  renderer.render( scene, camera );

}

animate();