import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./SceneContainer";
// import * as THREE from "three";
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import "./index.css";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { ColladaLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/ColladaLoader.js";

// THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
//   console.log(
//     "Started loading file: " +
//       url +
//       ".\nLoaded " +
//       itemsLoaded +
//       " of " +
//       itemsTotal +
//       " files."
//   );
// };

// THREE.DefaultLoadingManager.onLoad = function () {
//   console.log("Loading Complete!");
// };

// THREE.DefaultLoadingManager.onProgress = function (
//   url,
//   itemsLoaded,
//   itemsTotal
// ) {
//   console.log(
//     "Loading file: " +
//       url +
//       ".\nLoaded " +
//       itemsLoaded +
//       " of " +
//       itemsTotal +
//       " files."
//   );
// };

// THREE.DefaultLoadingManager.onError = function (url) {
//   console.log("There was an error loading " + url);
// };

let clock, camera, scene, renderer, mixer;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    25,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(15, 10, -15);

  scene = new THREE.Scene();

  clock = new THREE.Clock();

  const loadingManager = new THREE.LoadingManager(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("fade-out");

    // optional: remove loader from DOM via event listener
    loadingScreen.addEventListener("transitionend", onTransitionEnd);
  });

  // collada

  const loader = new ColladaLoader(loadingManager);
  loader.load(
    "https://threejs.org/examples/models/collada/stormtrooper/stormtrooper.dae",
    (collada) => {
      const animations = collada.animations;
      const avatar = collada.scene;

      mixer = new THREE.AnimationMixer(avatar);
      const action = mixer.clipAction(animations[0]).play();

      scene.add(avatar);
    }
  );

  //

  const gridHelper = new THREE.PolarGridHelper(8, 16);
  scene.add(gridHelper);

  //

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, -1);
  scene.add(directionalLight);

  //

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 2, 0);
  controls.update();

  //

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  const delta = clock.getDelta();

  if (mixer !== undefined) mixer.update(delta);

  renderer.render(scene, camera);
}

function onTransitionEnd(event) {
  event.target.remove();
}

function App() {
  return (
    <>
      <section id="loading-screen">
        <div id="loader"></div>
      </section>
      <Canvas>
        <SceneContainer />
      </Canvas>
    </>
  );
}

export default App;
