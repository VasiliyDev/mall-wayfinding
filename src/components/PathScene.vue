<template>
  <div
    id="scene-container"
    v-if="isAvailable"
    @click="stopCameraAnimation"
    :class="{ mobile: isMobile }"
  >
    <div class="camera-controls">
      <button class="car" @click.stop="moveToObject('car')"></button>
      <div class="camera-controls__zoom">
        <button
          class="plus"
          :class="{ disabled: zoomInDisabled }"
          @click="zoomCamera(1)"
        ></button>
        <button
          class="minus"
          :class="{ disabled: zoomOutDisabled }"
          @click="zoomCamera(0)"
        ></button>
      </div>
      <div class="camera-controls__floors" v-if="!isMobile">
        <button
          v-for="floor in allFloors"
          :key="floor"
          :class="{
            inactive: !activeFloors.includes(floor),
            current: floor === currentFloor,
          }"
          @click.stop="moveToObject(floor)"
        >
          {{ floor }}
        </button>
      </div>
    </div>
  </div>
  <div v-else>Incorrect data</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as THREE from 'three';
import {
  CSS2DRenderer,
  CSS2DObject,
} from 'three/addons/renderers/CSS2DRenderer.js';

import LineAnimation from '@/classes/Animation';
import { liftAnimation } from '@/classes/Animation';

import PathFinding from '@/classes/PathFinding';
import CameraController from '@/classes/Camera';

import { getFloor } from '@/data/floors';

export default defineComponent({
  name: 'PathScene',
  props: {
    // Empty floorFrom => single-floor mall (route from a kiosk to a unit on
    // the same level). Set floorFrom => multi-floor (lift between levels).
    floorFrom: String,
    floorTo: String,
    place: String,
    isMobile: Boolean,
    entryPoint: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      placeName: '',
      current: 0,
      zoomLevel: 1,
      camera: null,
      zoomInDisabled: false,
      zoomOutDisabled: true,
      currentFloor: '',
      isAvailable: true,
    };
  },
  computed: {
    allFloors() {
      if (this.floorTo === '3F') return ['3F'];
      else return ['L5', 'L4', 'L3', 'L2', 'L1', 'B1', 'B2', 'B3', 'B4'];
    },
    activeFloors() {
      return [this.floorFrom, this.floorTo];
    },
  },
  methods: {
    stopCameraAnimation() {
      if (this.lineAnimations)
        this.lineAnimations = this.lineAnimations.filter(
          (el) => el.name !== 'camera',
        );
    },
    zoomCamera(inc) {
      this.camera.zoom(inc);
    },
    moveToObject(name, animate = true, lift = false) {
      this.stopCameraAnimation();
      let moveTo;
      if (name === this.floorFrom)
        moveTo = { position: { x: -17.4, y: -0.5, z: 50 }, zoom: 1.74 };
      else if (name === this.floorTo)
        moveTo = { position: { x: -17.4, y: -0.5, z: 0 }, zoom: 1.74 };
      else if (name === 'car') {
        const place = this.floorObjects.find(
          (el) => el.name === this.placeName,
        );
        if (!place) return;
        moveTo = { position: { x: place.x, y: place.y, z: 0 }, zoom: 1.74 };
      } else if (name === 'entry' && this.entryPoint) {
        const place = this.floorBot.vertices.find(
          (el) => el.entryLabel === this.entryPoint,
        );
        if (!place) return;
        moveTo = { position: { x: place.x, y: place.y, z: 0 }, zoom: 1.74 };
      } else return;
      const params = lift ? { speed: 0.2, easing: 'normal' } : {};
      const animation = this.camera.moveTo(
        moveTo.position,
        moveTo.zoom,
        animate,
        params,
      );
      if (animate && animation) this.lineAnimations.push(animation);
    },

    findPrev() {
      const normalPlaces = this.floorObjects.filter(
        (el) => el.type === 'normal',
      );
      const index = normalPlaces.findIndex((el) => el.name === this.placeName);
      if (index > 0) this.placeName = normalPlaces[index - 1].name;
      this.findPath(this.placeName);
    },

    findNext() {
      const normalPlaces = this.floorObjects.filter(
        (el) => el.type === 'normal',
      );
      const index = normalPlaces.findIndex((el) => el.name === this.placeName);
      if (index < normalPlaces.length - 1)
        this.placeName = normalPlaces[index + 1].name;
      this.findPath(this.placeName);
    },

    setCarLabel(position) {
      if (!this.label) {
        const labelDiv = document.createElement('div');
        labelDiv.className = 'car-label';

        this.label = new CSS2DObject(labelDiv);
        this.label.position.set(0, 0, 0);
        this.label.center.set(0.5, 1);
        this.scene.add(this.label);
      }

      this.label.position.set(position.x, position.y, position.z);
    },

    async findPath(name) {
      const place = this.floorObjects.find((el) => el.name === name);
      if (!place) {
        console.error(`incorrect name: ${name}`);
        return;
      }
      this.setCarLabel({ x: place.x, y: place.y, z: 0.3 });

      if (this.isMobile && this.floorFrom) return;

      this.lineAnimations = this.lineAnimations.filter(
        (el) => el.name !== 'path',
      );

      if (!this.PF) this.PF = new PathFinding(this.floorBot.vertices);
      const path = this.PF.findPath(place, this.entryPoint);

      const points = [];
      path.forEach((el) => {
        points.push(new THREE.Vector3(el.x, el.y, 0.22));
      });

      if (this.pathCurve) this.pathCurve.remove(this.scene);

      this.pathCurve = new LineAnimation(points, 'path');
      this.pathCurve.init();
      this.pathCurve.add(this.scene);
      this.lineAnimations.push(this.pathCurve);

      const topFloorPath = [];
      if (this.floorBot?.params?.path) {
        const pathFromTerminal = [];
        this.floorBot.path[this.entryPoint].forEach((el) => {
          pathFromTerminal.push(new THREE.Vector3(el.x, el.y, 0.22));
        });
        this.terminalPath = new LineAnimation(pathFromTerminal);
        this.terminalPath.init();
        this.terminalPath.add(this.scene);
        this.lineAnimations.push(this.terminalPath);
      }

      if (this.floorTop) {
        this.floorTop.path.forEach((el) => {
          topFloorPath.push(new THREE.Vector3(el.x, el.y, 50.3));
        });
        const liftPoint = topFloorPath[topFloorPath.length - 1];
        liftPoint.x -= 0.36;
        liftPoint.y += 0.1;
        const verticalPoints = [
          new THREE.Vector3(liftPoint.x, liftPoint.y, 50),
          new THREE.Vector3(liftPoint.x, liftPoint.y, 0.8),
        ];
        if (!this.verticalLine) {
          this.verticalLine = new LineAnimation(verticalPoints);
          this.verticalLine.init();
          this.verticalLine.add(this.scene);
          this.lineAnimations.push(this.verticalLine);

          this.topFloorLine = new LineAnimation(topFloorPath);
          this.topFloorLine.init();
          this.topFloorLine.add(this.scene);
          this.lineAnimations.push(this.topFloorLine);

          const liftCaption = this.floorFrom + ' to ' + this.floorTo;
          this.liftAnimation = new liftAnimation(
            { x: liftPoint.x, y: liftPoint.y, z: 48 },
            liftCaption,
          );
          await this.liftAnimation.init();
          this.liftAnimation.add(this.scene);
          this.lineAnimations.push(this.liftAnimation);
        }
      }
    },

    initRenderers() {
      this.container = document.getElementById('scene-container');
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        depth: true,
      });
      this.renderer.setPixelRatio(window.devicePixelRatio || 1);
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight,
      );
      this.container.appendChild(this.renderer.domElement);

      this.labelRenderer = new CSS2DRenderer();
      this.labelRenderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight,
      );

      this.labelRenderer.domElement.style.position = 'absolute';
      this.labelRenderer.domElement.style.top = '0px';
      this.labelRenderer.domElement.style.pointerEvents = 'none';
      this.container.appendChild(this.labelRenderer.domElement);
    },
    initScene() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(175 / 255, 175 / 255, 175 / 255);
      const aspect = this.container.clientWidth / this.container.clientHeight;
      this.camera = new CameraController(aspect);
      this.camera.addOrbitControls(this.renderer, this.scene);
      this.$watch(
        () => this.camera.zoomLevel,
        (val) => {
          this.zoomInDisabled = val === CameraController.ZOOM_VALUES.length - 1;
          this.zoomOutDisabled = val === 0;
        },
      );
      if (this.floorTop) {
        this.$watch(
          () => this.camera.curAltitude,
          (val) => {
            if (val > 20) this.currentFloor = this.floorTop.name;
            else this.currentFloor = this.floorBot.name;
          },
        );
      }
    },

    async drawFloors() {
      await this.floorBot.loadAssets();
      this.floorBot.draw(this.scene, 0);
      if (!this.isMobile && this.floorFrom) {
        await this.floorTop.loadAssets();
        this.floorTop.draw(this.scene, 50);
      }
    },

    // Keep the renderer and orthographic frustum in sync with the viewport
    // (orientation change, mobile browser chrome show/hide).
    onResize() {
      if (!this.renderer || !this.camera || !this.container) return;
      const w = this.container.clientWidth;
      const h = this.container.clientHeight;
      if (!w || !h) return;
      this.renderer.setSize(w, h);
      this.labelRenderer.setSize(w, h);
      const d = 20;
      const aspect = w / h;
      const cam = this.camera.camera;
      cam.left = -d * aspect;
      cam.right = d * aspect;
      cam.top = d;
      cam.bottom = -d;
      cam.updateProjectionMatrix();
    },

    async init() {
      this.initRenderers();
      this.initScene();
      await this.drawFloors();

      this.clock = new THREE.Clock();
      this.lineAnimations = [];

      this.findPath(this.placeName);

      if (this.isMobile) {
        this.moveToObject('car', false);
      } else if (this.floorTop) {
        this.moveToObject(this.floorTop.name, false);
        this.moveToObject(this.floorBot.name, true, true);
      } else {
        this.moveToObject('entry', false);
        this.moveToObject('car', true, true);
      }
    },
    animate: function () {
      // Bail (and stop the RAF loop) until the renderer/scene are ready, e.g.
      // if init() failed — avoids spamming "reading 'render'" every frame.
      if (!this.renderer || !this.scene || !this.camera) return;
      this.rafId = requestAnimationFrame(this.animate);
      if (this.lineAnimations && this.lineAnimations.length) {
        this.lineAnimations = this.lineAnimations.filter(
          (el) => el.state !== 'finished',
        );
        const elapsedTime = this.clock.getElapsedTime();
        this.lineAnimations.forEach((el) => {
          el.animationTick(elapsedTime);
        });
      }
      this.renderer.render(this.scene, this.camera.camera);
      this.labelRenderer.render(this.scene, this.camera.camera);
    },
  },
  // Must be mounted(), not created(): init() reads #scene-container from the
  // DOM, which only exists after this component's template is mounted.
  async mounted() {
    try {
      if (this.floorFrom) this.floorTop = await getFloor(this.floorFrom);
      this.floorBot = await getFloor(this.floorTo);
    } catch (e) {
      this.isAvailable = false;
      console.error(e);
      return;
    }

    this.floorObjects = this.floorBot.objects;

    if (!this.floorObjects.find((el) => el.name === this.place)) {
      this.isAvailable = false;
      console.error(`place ${this.place} not found`);
      return;
    }
    this.placeName = this.place;

    this.init();
    window.addEventListener('resize', this.onResize);
    this.animate();
  },
  beforeUnmount() {
    // Stop the animation loop and release the context so remounts (via :key)
    // don't stack RAF loops / leak WebGL contexts.
    if (this.rafId) cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.onResize);
    this.renderer?.dispose?.();
  },
});
</script>

<style lang="scss">
@keyframes map-pin {
  from {
    transform: scale(0.7);
  }
  to {
    transform: scale(0.9);
  }
}

.car-label {
  width: 80px;
  height: 80px;
  position: relative;
}

.car-label::after {
  transform-origin: bottom;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation-name: map-pin;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  background-image: url('~@/assets/car.svg');
}

.mobile .car-label::after {
  background-image: url('~@/assets/car-mobile.svg');
}

.disabled {
  pointer-events: none;
  opacity: 0.6;
}

#scene-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  // Required for OrbitControls touch pan/zoom on mobile: without it the
  // browser swallows the drag as a page scroll and the controls never fire.
  touch-action: none;
}
#scene-container canvas {
  touch-action: none;
}

.camera-controls {
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: 64px;
  bottom: 64px;
  z-index: 10;
}

.camera-controls__zoom {
  margin: 0 64px 0 10px;
  display: flex;
  background: #fff;
  border-radius: 100px;
  height: 100%;
}

.camera-controls button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: #fff;
  color: #050c1e;
  border-radius: 100%;
  touch-action: manipulation;
  box-shadow: 0 0 2px rgba(0, 29, 66, 0.1), 0 1px 4px rgba(0, 29, 66, 0.1);
  font-weight: 700;
  font-size: 14px;
  background-size: 70% auto;
  background-repeat: no-repeat;
  background-position: center;
}

.camera-controls button.plus {
  width: 56px;
  height: 56px;
  background-image: url('~@/assets/plus.svg');
}

.camera-controls button.minus {
  background-image: url('~@/assets/minus.svg');
  width: 56px;
  height: 56px;
}

.camera-controls button.car {
  background-image: url('~@/assets/car-fill.svg');
  width: 56px;
  height: 56px;
  margin-right: 24px;
}

.camera-controls__zoom button {
  box-shadow: none;
}

.camera-controls__zoom button.disabled {
  color: #ccc;
  background-blend-mode: lighten;
  background-color: #ffffffa8;
  pointer-events: none;
}

.camera-controls__zoom button:first-child {
  border-radius: 100% 0 0 100%;
  border-right: 1px solid #eee;
}

.camera-controls__floors {
  display: flex;
  flex-direction: column;
  gap: 24px;

  button {
    width: 56px;
    height: 56px;
    font-size: 24px;
  }
}

.camera-controls__floors button.inactive {
  opacity: 0.2;
}

.camera-controls__floors button.current {
  color: #fff;
  background-color: #050c1e;
}

.mobile {
  .camera-controls {
    flex-direction: column-reverse;

    &__zoom {
      box-shadow: 0 0 2px rgba(0, 29, 66, 0.1), 0 1px 4px rgba(0, 29, 66, 0.1);
      flex-direction: column;
      margin-right: 0;
      margin-bottom: 24px;

      button {
        &:first-child {
          border-radius: 100% 100% 0 0;
          border-right: none;
        }
      }
    }

    .car {
      margin-right: 0;
    }

    button {
      width: 40px;
      height: 40px;
      font-size: 24px;
      padding: 0;
    }
  }
}

// On phones the kiosk-sized 64px insets push the controls far from the edge.
@media (max-width: 640px) {
  .camera-controls {
    right: 12px;
    bottom: 12px;
  }
  .camera-controls__zoom {
    margin: 0 12px 0 10px;
  }
}
</style>
