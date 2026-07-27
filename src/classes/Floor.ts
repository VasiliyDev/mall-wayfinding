import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import * as Three from 'three';
import { Text } from 'troika-three-text';
import { liftIcon as loadLiftIcon } from '@/helpers';

const liftIcon = await loadLiftIcon({ x: 1.5, y: 1.1 }, 0xffffff);

export default class Floor {
  name = 'floor';
  params = {};
  shape = null;
  objects = [];
  vertices = [];
  objectLabels = [];
  texts = [];
  current = false;
  altitude = 0;
  baseObjects = {};

  constructor(
    name,
    params = {},
    objects = [],
    vertices = [],
    texts = [],
    path = [],
    icons,
  ) {
    this.name = name;
    this.params = params;
    this.objects = objects;
    this.vertices = vertices;
    this.texts = texts;
    this.path = path;
    this.icons = icons;
  }
  async loadAssets() {
    if (this.objects.length) this.setBasicObjects();
    if (this.params.type === 'svg' && this.params.path)
      return this.loadFloorSVG();
    else this.defaultShape();
  }
  defaultShape() {
    const innerShape = new Three.Shape();
    innerShape.moveTo(-32.2, 1.45);
    innerShape.lineTo(-31.8, 7.0);
    innerShape.lineTo(-30.45, 6.9);
    innerShape.lineTo(-24.2, 8.55);
    innerShape.lineTo(-24.2, 12);
    innerShape.lineTo(27, 12);
    innerShape.lineTo(30, 9);
    innerShape.lineTo(30, -17.9);
    innerShape.lineTo(19.8, -17.9);
    innerShape.bezierCurveTo(19.8, -17.9, 10.55, -8.55, -32.2, 1.45);

    const outerShape = new Three.Shape();
    outerShape.moveTo(-33.2, 0.45);
    outerShape.lineTo(-32.6, 8.1);
    outerShape.lineTo(-30.45, 7.9);
    outerShape.lineTo(-25.2, 9.35);
    outerShape.lineTo(-25.2, 13);
    outerShape.lineTo(28, 13);
    outerShape.lineTo(31, 10);
    outerShape.lineTo(31, -18.9);
    outerShape.lineTo(18.8, -18.9);
    outerShape.bezierCurveTo(18.8, -18.9, 9.55, -9, -33.2, 0.45);

    const floorInner = new Three.Mesh(
      new Three.ShapeGeometry(innerShape),
      new Three.MeshBasicMaterial({ color: 0xd1d3de }),
    );
    floorInner.position.set(0, 0, 0);
    const floorOuter = new Three.Mesh(
      new Three.ShapeGeometry(outerShape),
      new Three.MeshBasicMaterial({ color: 0xffffff, side: Three.DoubleSide }),
    );
    floorOuter.position.set(0, 0, -0.05);

    const group = new Three.Group();
    group.add(floorInner);
    group.add(floorOuter);
    this.shape = group;
  }
  loadFloorSVG() {
    return new Promise((resolve, reject) => {
      const loader = new SVGLoader();
      //const boundingBox = new THREE.Box3();
      loader.load(
        this.params.path,
        (data) => {
          const paths = data.paths;
          const group = new THREE.Group();
          for (let i = 0; i < paths.length; i++) {
            const path = paths[i];
            const material = new THREE.MeshBasicMaterial({
              color: path.color,
              depthWrite: false,
              transparent: true,
              opacity: 1,
            });
            const shapes = SVGLoader.createShapes(path);
            const scaleFactor = this.params.scale ? this.params.scale : 1;
            // const shape = shapes[0];
            shapes.forEach((el) => {
              const geometry = new THREE.ShapeGeometry(el);
              geometry.scale(scaleFactor, scaleFactor, scaleFactor);
              const vertices = geometry.attributes.position.array;
              for (let k = 0; k < vertices.length; k += 3) {
                vertices[k] += this.params.offsetX ? this.params.offsetX : 0;
              }
              for (let k = 1; k < vertices.length; k += 3) {
                vertices[k] += this.params.offsetY ? this.params.offsetY : 0;
              }
              // console.log(i, geometry);
              const mesh = new THREE.Mesh(geometry, material);
              mesh.scale.y = -1;
              //console.log('name', this.name);
              if (this.name === 'L4' || this.name === 'L5') {
                mesh.material.opacity = 0.5;
              }
              if (i === 0 || i === 2) {
                mesh.position.set(-23.1, 23.2, -25);
              }
              if (i === 1) {
                mesh.position.set(-2.78, 2.78, -3);
              }

              //boundingBox.expandByObject(mesh);
              group.add(mesh);
            });
          }
          //console.log(boundingBox);
          //group.scale.y = -1; //why does the image reflects on load???
          this.shape = group;
          resolve(data);
        },
        undefined,
        reject,
      );
    });
  }

  setBasicObjects() {
    let geometry = new THREE.PlaneGeometry(2, 0.9);
    geometry.computeVertexNormals();
    const normalPlace = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ color: 0xffffff, flatShading: false }),
    );

    const miniPlace = new THREE.Mesh(
      new THREE.PlaneGeometry(1.1, 0.4),
      new THREE.MeshBasicMaterial({ color: 0xffffff, flatShading: false }),
    );

    const terminalColors = [];

    const terminalGeometry = new THREE.BoxGeometry(0.9, 0.15, 2);
    const terminalMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true,
    });

    let color1 = [160 / 255, 160 / 255, 160 / 255];
    let color2 = [0.85, 0.85, 0.85];
    let positionAttribute = terminalGeometry.getAttribute('position');
    for (let i = 0; i < positionAttribute.count; i += 3) {
      if (i === 12) {
        terminalColors.push(...color1);
        terminalColors.push(...color1);
        terminalColors.push(...color1);
      } else if (i === 15) {
        terminalColors.push(...color1);
        terminalColors.push(...color1);
        terminalColors.push(...color2);
      } else {
        terminalColors.push(...color2);
        terminalColors.push(...color2);
        terminalColors.push(...color2);
      }
    }

    terminalGeometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(terminalColors, 3),
    );
    const terminal = new THREE.Mesh(terminalGeometry, terminalMaterial);

    const liftGeometry = new THREE.BoxGeometry(2, 2, 0.2);
    const liftMaterial = new THREE.MeshBasicMaterial({ vertexColors: true });

    const colors = [];
    color1 = [19 / 255, 53 / 255, 105 / 255];
    color2 = [54 / 255, 89 / 255, 143 / 255];
    //const color2 = [145/255, 163/255, 191/255];

    positionAttribute = liftGeometry.getAttribute('position');
    for (let i = 0; i < positionAttribute.count; i += 3) {
      if (i === 3 || i === 0 || i === 12) {
        colors.push(...color1);
        colors.push(...color1);
        colors.push(...color1);
      } else if (i === 15) {
        colors.push(...color1);
        colors.push(...color2);
        colors.push(...color2);
      } else {
        colors.push(...color2);
        colors.push(...color2);
        colors.push(...color2);
      }
    }

    liftGeometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(colors, 3),
    );
    const lift = new Three.Group();
    const liftBox = new THREE.Mesh(liftGeometry, liftMaterial);

    const liftIconClone = new THREE.Group();
    liftIcon.children.forEach((child) => {
      if (child.isMesh) {
        const clonedMesh = child.clone();
        liftIconClone.add(clonedMesh);
      }
    });
    lift.add(liftBox);
    liftIconClone.position.set(0, -0.1, 0.11);
    lift.add(liftIconClone);

    this.baseObjects.normal = normalPlace;
    this.baseObjects.mini = miniPlace;
    this.baseObjects.lift = lift;
    this.baseObjects.terminal = terminal;
  }

  async addObjects() {
    const offsetX = this.params.offsetObjectX ? this.params.offsetObjectX : 0;
    const offsetY = this.params.offsetObjectY ? this.params.offsetObjectY : 0;
    this.objects.forEach((el) => {
      if (this.baseObjects[el.type] === undefined) return;
      const obj = this.baseObjects[el.type].clone();
      let objFloor = 0.35;
      if (el.type === 'lift') objFloor = 0.2;
      if (el.type === 'terminal') objFloor = 1;
      if (el.z) objFloor = el.z;
      obj.position.set(el.x + offsetX, el.y + offsetY, objFloor);

      if (el.angle) obj.rotation.set(0, 0, (el.angle * Math.PI) / 180);
      this.objects.push(obj);
      this.shape.add(obj);

      if (el.name) {
        const label = new Text();
        label.text = el.name;
        label.fontSize = 0.15;
        const LABEL_HEIGHT = label.fontSize;
        const LABEL_WIDTH = 0.4;
        label.position.z = 0.355;
        label.color = 0x000000;
        //scene.add(label);
        let rotation = el.angle ? el.angle : 0;
        switch (el.type) {
          case 'normal':
            if (el.angle === 90) rotation = 0;
            break;
        }
        rotation = (rotation * Math.PI) / 180;
        label.position.y =
          el.y +
          (-LABEL_WIDTH * Math.sin(rotation) +
            LABEL_HEIGHT * Math.cos(rotation)) /
            2;
        label.position.x =
          el.x -
          (LABEL_WIDTH * Math.cos(rotation) +
            LABEL_HEIGHT * Math.sin(rotation)) /
            2;
        if (el.angle && (el.type !== 'mini') !== 90)
          label.rotation.set(0, 0, rotation);
        this.objectLabels.push(label);
        this.shape.add(label);
        label.sync();
      }
    });
  }

  addTexts() {
    if (!this.texts.length) return;
    const offsetX = this.params.offsetObjectX ? this.params.offsetObjectX : 0;
    const offsetY = this.params.offsetObjectY ? this.params.offsetObjectY : 0;
    this.texts.forEach((el) => {
      const label = new Text();
      label.text = el.name ? el.name : '';
      label.fontSize = 0.25;
      label.position.z = 0.105;
      label.color = 0x000000;
      label.position.x = el.x + offsetX;
      label.position.y = el.y + offsetY;
      label.rotation.set(0, 0, el.angle ? el.angle : 0);
      this.shape.add(label);
    });
  }

  addIcons() {
    this.icons.forEach((el) => {
      const texture = new THREE.TextureLoader().load(el.file);
      const geometry = new THREE.PlaneGeometry(el.width, el.height);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(el.position.x, el.position.y, 2);
      mesh.rotation.set(0.745, 0.596, 0.546);
      this.shape.add(mesh);
    });
  }

  draw(scene, altitude) {
    this.altitude = altitude;
    if (!this.shape) return;
    if (this.objects.length) this.addObjects();
    if (this.texts.length) this.addTexts();
    if (this.icons && this.icons.length) this.addIcons();
    this.shape.position.set(0, 0, altitude);
    scene.add(this.shape);
  }

  drawVertices(scene, type = 'circles') {
    this.vertices.forEach((el, i) => {
      if (type === 'numbers') {
        const label = new Text();
        label.text = i;
        label.fontSize = 0.5;
        label.position.x = el.x;
        label.position.y = el.y;
        label.position.z = 1;
        label.color = 0x000000;
        scene.add(label);
      } else {
        const geometry = new THREE.CircleGeometry(0.2, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const circle = new THREE.Mesh(geometry, material);
        circle.position.x = el.x;
        circle.position.y = el.y;
        circle.position.z = 1;
        scene.add(circle);
      }
    });
  }
}
