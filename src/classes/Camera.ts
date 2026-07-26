import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}
export default class CameraController {
  static ZOOM_VALUES = [1, 1.32, 1.74, 2.3, 3.05, 4];
  camera = null;
  zoomLevel = 0;
  curAltitude = 40;
  constructor(aspect) {
    const d = 20;
    this.camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      1,
      10000,
    );
    this.camera.up.set(0, 0, 1);
    // this.camera.position.set(120, -120, 180);
    // this.camera.lookAt(0,0,40);
    // console.log(this.camera.rotation);
    // let vec = new THREE.Vector3();
    // this.camera.getWorldDirection(vec);
    // console.log(vec);
    // const cameraVector = new THREE.Vector3(120,-120,130);
    // const lookAtVector = new THREE.Vector3(0,20,0);
    // console.log('test',lookAtVector.add(cameraVector));
    //this.camera.lookAt(20,0,0);
    // const rotation = new THREE.Euler();
    // rotation.z = Math.atan2(translationVector.y, translationVector.x);
    // const horizontalDistance = Math.sqrt(translationVector.x ** 2 + translationVector.y ** 2);
    // rotation.y = -Math.atan2(translationVector.z, horizontalDistance);
    // console.log(rotation);
  }
  addOrbitControls(renderer, scene) {
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.addEventListener('change', () => {
      var minPan = new THREE.Vector3(-40, -20, -10);
      var maxPan = new THREE.Vector3(27, 25, 60);
      this.controls.target.clamp(minPan, maxPan);
      this.camera.position.set(
        this.controls.target.x + 120,
        this.controls.target.y - 120,
        this.controls.target.z + 130,
      );
      renderer.render(scene, this.camera);
      const MAX_ZOOM = CameraController.ZOOM_VALUES.length - 1;
      const currentZoom = this.camera.zoom;
      this.curAltitude = this.camera.position.z - 130;
      this.zoomLevel = 0;
      while (
        CameraController.ZOOM_VALUES[this.zoomLevel] < currentZoom &&
        this.zoomLevel < MAX_ZOOM
      )
        this.zoomLevel++;
    });
    this.controls.mouseButtons = {
      MIDDLE: THREE.MOUSE.DOLLY,
      LEFT: THREE.MOUSE.PAN,
    };
    this.controls.touches.ONE = THREE.TOUCH.PAN;

    this.controls.enablePan = true;
    this.controls.enableRotate = false;
    this.controls.minZoom = CameraController.ZOOM_VALUES[0];
    this.controls.maxZoom =
      CameraController.ZOOM_VALUES[CameraController.ZOOM_VALUES.length - 1];
    this.controls.update();
  }
  setView2d() {
    this.camera.position.set(0, 0, 200);
  }
  moveTo(position, zoom = 1, animate = false, params) {
    if (!animate) {
      this.camera.position.set(
        position.x + 120,
        position.y - 120,
        position.z + 130,
      );
      this.controls.target.set(position.x, position.y, position.z);
      this.camera.zoom = zoom;
      this.controls.update();
    } else {
      const camera = this.camera;
      const controls = this.controls;
      const start = {
        x: this.controls.target.x,
        y: this.controls.target.y,
        z: this.controls.target.z,
      };
      const finish = position;
      const zoomStart = this.camera.zoom;
      const zoomFinish = zoom;
      const SPEED = params.speed ? params.speed : 1;
      const dx = (finish.x - start.x) * SPEED;
      const dy = (finish.y - start.y) * SPEED;
      const dz = (finish.z - start.z) * SPEED;
      if (dx === 0 && dy === 0 && dz === 0) return;
      let startTime = null;
      return {
        name: 'camera',
        state: 'active',
        animationTick: function (time) {
          if (startTime === null) {
            startTime = time;
          }
          const easing = params.easing ? params.easing : 'cubic';
          const diff =
            easing === 'normal'
              ? (time - startTime) / 2
              : easeOutCubic((time - startTime) / 2);
          const x = start.x + dx * diff;
          const y = start.y + dy * diff;
          const z = start.z + dz * diff;
          const zoom = zoomStart + (zoomFinish - zoomStart) * diff;
          let endAnimation = false;
          if ((dx > 0 && finish.x < x) || (dx < 0 && finish.x > x))
            endAnimation = true;
          else if ((dy > 0 && finish.y < y) || (dy < 0 && finish.y > y))
            endAnimation = true;
          else if ((dz > 0 && finish.z < z) || (dz < 0 && finish.z > z))
            endAnimation = true;
          if (endAnimation) {
            camera.position.set(finish.x + 120, finish.y - 120, finish.z + 130);
            camera.zoom = zoomFinish;
            controls.target.set(finish.x, finish.y, finish.z);
            this.state = 'finished';
          } else {
            camera.position.set(x + 120, y - 120, z + 130);
            controls.target.set(x, y, z);
            camera.zoom = zoom;
          }
          controls.update();
        },
      };
    }
  }
  zoom(inc = true) {
    const MAX_ZOOM = CameraController.ZOOM_VALUES.length - 1;
    if (inc && this.zoomLevel === MAX_ZOOM) return;
    else if (!inc && this.zoomLevel === 0) return;
    this.zoomLevel += inc ? 1 : -1;
    this.camera.zoom = CameraController.ZOOM_VALUES[this.zoomLevel];
    this.controls.update();
  }
}
