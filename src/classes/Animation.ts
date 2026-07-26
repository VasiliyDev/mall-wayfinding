import * as THREE from 'three';
import {
  liftIcon as loadLiftIcon,
  RoundedRectangle as RoundedRectangle,
} from '@/helpers';
import { Text } from 'troika-three-text';
const STRIPE_WIDTH = 0.36;

export default class LineAnimation {
  altitude = 0;
  lineStripe = null;
  arrows = [];
  points = [];
  len = 0;
  lenParts = [];
  isVectical = false;
  name = '';

  constructor(points, name = 'animation') {
    this.name = name;
    this.points = points;
    if (this.points[0].z === this.points[1].z) this.altitude = this.points[0].z;
    else {
      this.isVertical = true;
    }
  }
  arrowMesh() {
    const testShape = new THREE.Shape();
    testShape.moveTo(0.05, 1.72);
    testShape.lineTo(2.05, -1.49);
    testShape.bezierCurveTo(2.16, -1.65, 1.99, -1.85, 1.81, -1.77);
    testShape.lineTo(0.05, -1.1);
    testShape.bezierCurveTo(-0.05, -1.03, -0.19, -1.03, -0.32, -1.08);
    testShape.lineTo(-2.05, -1.78);
    testShape.bezierCurveTo(-2.23, -1.85, -2.4, -1.65, -2.3, -1.49);
    testShape.lineTo(-0.29, 1.73);
    testShape.bezierCurveTo(-0.21, 1.85, -0.04, 1.85, 0.05, 1.73);
    const geometry = new THREE.ShapeGeometry(testShape);
    geometry.scale((STRIPE_WIDTH * 0.7) / 4.4, (STRIPE_WIDTH * 0.7) / 3.61, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      flatShading: false,
    });
    return new THREE.Mesh(geometry, material);
  }

  createStripe() {
    const testShape = new THREE.Shape();
    if (this.isVertical) {
      testShape.moveTo(-STRIPE_WIDTH / 2, this.points[0].z);
      testShape.lineTo(-STRIPE_WIDTH / 2, this.points[1].z);
      testShape.lineTo(STRIPE_WIDTH / 2, this.points[1].z);
      testShape.lineTo(STRIPE_WIDTH / 2, this.points[0].z);
      testShape.lineTo(STRIPE_WIDTH / 2, this.points[0].z);
      const geometry = new THREE.ShapeGeometry(testShape);
      const material = new THREE.MeshBasicMaterial({
        color: 0xe53e7e,
        flatShading: false,
      });
      this.lineStripe = new THREE.Mesh(geometry, material);
      this.lineStripe.position.set(
        this.points[0].x,
        this.points[0].y,
        this.altitude + 0.1,
      );
      //0.745,0.596,0.546
      this.lineStripe.rotation.set(Math.PI / 2, 0.78, 0);
      return;
    }
    let pointsBack = [];
    for (let i = 0; i < this.points.length; i++) {
      if (i > 0) {
        const vectorP0P1 = this.points[i - 1]
          .clone()
          .sub(this.points[i])
          .normalize();
        const orthogonalVector1 = new THREE.Vector3(
          -vectorP0P1.y,
          vectorP0P1.x,
          0,
        ).multiplyScalar(STRIPE_WIDTH / 2);

        testShape.lineTo(
          this.points[i].x + orthogonalVector1.x,
          this.points[i].y + orthogonalVector1.y,
        );
        pointsBack.unshift({
          x: this.points[i].x - orthogonalVector1.x,
          y: this.points[i].y - orthogonalVector1.y,
        });
      }

      if (i < this.points.length - 1) {
        const vectorP1P2 = this.points[i]
          .clone()
          .sub(this.points[i + 1])
          .normalize();
        const orthogonalVector2 = new THREE.Vector3(
          -vectorP1P2.y,
          vectorP1P2.x,
          0,
        ).multiplyScalar(STRIPE_WIDTH / 2);
        if (i === 0) {
          testShape.moveTo(
            this.points[i].x + orthogonalVector2.x,
            this.points[i].y + orthogonalVector2.y,
          );
          pointsBack.unshift({
            x: this.points[i].x + orthogonalVector2.x,
            y: this.points[i].y + orthogonalVector2.y,
          });
        } else {
          testShape.lineTo(
            this.points[i].x + orthogonalVector2.x,
            this.points[i].y + orthogonalVector2.y,
          );
        }
        pointsBack.unshift({
          x: this.points[i].x - orthogonalVector2.x,
          y: this.points[i].y - orthogonalVector2.y,
        });
      }
    }

    pointsBack.forEach((p) => {
      testShape.lineTo(p.x, p.y);
    });

    const geometry = new THREE.ShapeGeometry(testShape);
    const material = new THREE.MeshBasicMaterial({
      color: 0xe66194,
      flatShading: false,
    });
    this.lineStripe = new THREE.Mesh(geometry, material);
    this.lineStripe.position.set(0, 0, this.altitude + 0.1);
  }

  initLenParts() {
    let len = 0;
    let lenParts = [];
    for (let i = 0; i < this.points.length - 1; i++) {
      const dist = this.points[i].distanceTo(this.points[i + 1]);
      lenParts.push(dist);
      len += dist;
    }
    let sum = 0;
    this.lenParts = lenParts.map((el) => {
      sum += el / len;
      return sum;
    });
    this.len = len;
  }

  getArrowPosition(percent) {
    let num = 0;
    while (percent > this.lenParts[num] && num < this.points.length - 1) num++;

    const prevPercent = num > 0 ? this.lenParts[num - 1] : 0;
    const linePercent =
      (percent - prevPercent) / (this.lenParts[num] - prevPercent);
    const position = this.points[num]
      .clone()
      .lerp(this.points[num + 1], linePercent);
    const directionVector = this.points[num]
      .clone()
      .sub(this.points[num + 1])
      .normalize();
    const yAxis = new THREE.Vector3(0, 1, 0);
    const angle = Math.PI - directionVector.angleTo(yAxis);
    const crossProduct = new THREE.Vector3().crossVectors(
      directionVector,
      yAxis,
    );
    return { pos: position, angle: crossProduct.z > 0 ? angle : -angle };
  }

  animationTick(time) {
    for (let i = 0; i < this.arrows.length; i++) {
      const position = this.getArrowPosition(
        (i / this.arrows.length + (time * 0.03 * 58) / this.len) % 1,
      );
      if (this.isVertical) {
        this.arrows[i].position.set(
          position.pos.x,
          position.pos.y - 0.01,
          position.pos.z,
        );
      } else
        this.arrows[i].position.set(
          position.pos.x,
          position.pos.y,
          position.pos.z + 0.11,
        );
      if (this.isVertical)
        this.arrows[i].rotation.set(Math.PI / 2, 0.78, Math.PI);
      else this.arrows[i].rotation.set(0, 0, position.angle);
    }
  }
  remove(scene) {
    scene.remove(this.lineStripe);
    this.arrows.forEach((el) => {
      scene.remove(el);
    });
  }
  add(scene) {
    scene.add(this.lineStripe);

    const ARROW_COUNT = Math.ceil((2 * this.len) / 3);
    for (let i = 0; i < ARROW_COUNT; i++) {
      this.arrows.push(this.arrowMesh());
      scene.add(this.arrows[i]);
    }
  }
  init() {
    this.createStripe();
    this.initLenParts();
  }
}

export class liftAnimation {
  position = null;
  name = '';
  liftGroup = null;
  altitude = 50;
  text = '';
  constructor(position, text, name = 'lift') {
    this.altitude = position.z;
    this.position = position;
    this.name = name;
    this.text = text;
  }
  async init() {
    const circleGeometry = new THREE.CircleGeometry(1.5, 50);
    //const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    const iconTexture = new THREE.TextureLoader().load(
      require('@/assets/lifticon.png'),
    );
    const iconMaterial = new THREE.MeshBasicMaterial({ map: iconTexture });
    const circle = new THREE.Mesh(circleGeometry, iconMaterial);
    const liftIcon = await loadLiftIcon({ x: 1.6, y: 1.4 }, 0x000000);
    liftIcon.position.set(0, 0, 0.1);

    const boundingBox = new THREE.Box3().setFromObject(circle);
    const textureSize = boundingBox.getSize(new THREE.Vector3());
    const desiredSize = new THREE.Vector2(
      textureSize.x * 1.5,
      textureSize.y * 1.5,
    );
    iconTexture.repeat.set(
      desiredSize.x / textureSize.x,
      desiredSize.y / textureSize.y,
    );
    iconTexture.offset.set(
      (textureSize.x - desiredSize.x) / (2 * textureSize.x),
      (textureSize.y - desiredSize.y) / (2 * textureSize.y),
    );

    const roundedGeometry = RoundedRectangle(3.1, 1.3, 0.3, 20);
    const roundedMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const roundedRectangle = new THREE.Mesh(roundedGeometry, roundedMaterial);
    roundedRectangle.position.set(0, -2.7, 0);

    const liftLabel = new Text();
    liftLabel.text = this.text;
    liftLabel.color = 0x000000;
    liftLabel.fontSize = 0.7;
    liftLabel.position.y = -2.2;
    liftLabel.position.x = -1.3;
    liftLabel.position.z = 0.1;

    const liftGroup = new THREE.Group();
    liftGroup.add(circle);
    //liftGroup.add(liftIcon);
    liftGroup.add(roundedRectangle);
    liftGroup.add(liftLabel);
    liftGroup.rotation.set(0.745, 0.596, 0.546);
    liftGroup.position.set(this.position.x + 1, this.position.y - 1, 10);
    this.liftGroup = liftGroup;
  }
  remove(scene) {
    scene.remove(this.liftGroup);
  }
  add(scene) {
    scene.add(this.liftGroup);
  }
  animationTick(time) {
    const MIN_ALTITUDE = 5.5;
    const TRANSPARENT_START_POSITION = 10;
    const position =
      MIN_ALTITUDE + (this.altitude - MIN_ALTITUDE) * (1 - ((time / 10) % 1));
    this.liftGroup.position.setZ(position);
    const opacity =
      position < TRANSPARENT_START_POSITION
        ? (position - MIN_ALTITUDE) /
          (TRANSPARENT_START_POSITION - MIN_ALTITUDE)
        : 1;

    this.liftGroup.children.forEach((child) => {
      if (child.material) {
        child.material.transparent = true;
        child.material.opacity = opacity;
      }
    });
  }
}
