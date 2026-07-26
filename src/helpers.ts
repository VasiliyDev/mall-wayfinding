import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { svgData as liftSVG } from '@/data/svg/Liftcode';

function normalizeGeometry(geometry, offset) {
  const vertices = geometry.attributes.position.array;
  for (let k = 0; k < vertices.length; k += 3) {
    vertices[k] -= offset.x;
  }
  for (let k = 1; k < vertices.length; k += 3) {
    vertices[k] -= offset.y;
  }
}
const OFFSET = new THREE.Vector2(24, 28);

function borderGeometry() {
  const testShape = new THREE.Shape();
  testShape.moveTo(39.29, 12);
  testShape.lineTo(8.7, 12);
  testShape.bezierCurveTo(6.1, 12, 4, 13.97, 4, 16.41);
  testShape.lineTo(4, 39.58);
  testShape.bezierCurveTo(4, 42.02, 6.1, 44, 8.7, 44);
  testShape.lineTo(39.29, 44);
  testShape.bezierCurveTo(41.89, 44, 44, 42.02, 44, 39.58);
  testShape.lineTo(44, 16.41);
  testShape.bezierCurveTo(44, 13.97, 41.89, 12, 39.29, 12);
  const points = testShape.getPoints();
  points.forEach((item) => item.sub(OFFSET).multiplyScalar(0.9).add(OFFSET));
  const holeShape = new THREE.Shape(points);
  testShape.holes.push(holeShape);
  return new THREE.ShapeGeometry(testShape);
}

const loadLiftSvg = (svg) => {
  return new Promise((resolve, reject) => {
    const loader = new SVGLoader();
    const liftIconGeometry = [borderGeometry()];

    loader.load(
      svg,
      (data) => {
        const paths = data.paths;
        for (let i = 1; i < paths.length; i++) {
          const path = paths[i];
          const shapes = SVGLoader.createShapes(path);
          for (let j = 0; j < shapes.length; j++) {
            const shape = shapes[j];
            const geometry = new THREE.ShapeGeometry(shape);
            liftIconGeometry.push(geometry);
          }
        }
        liftIconGeometry.forEach((el) => {
          normalizeGeometry(el, OFFSET);
        });
        resolve(liftIconGeometry);
      },
      undefined,
      reject,
    );
  });
};

export const liftIcon = async (size, color) => {
  const group = new THREE.Group();
  const geometries = await loadLiftSvg(liftSVG);
  geometries.forEach((el) => {
    const material = new THREE.MeshBasicMaterial({
      color: color,
      side: THREE.DoubleSide,
    });
    el.scale(size.x / 40, -size.y / 32, 1);
    const mesh = new THREE.Mesh(el, material);
    group.add(mesh);
  });
  return group;
};

export const RoundedRectangle = (w, h, r, s) => {
  // width, height, radius corner, smoothness

  // helper const's
  const wi = w / 2 - r; // inner width
  const hi = h / 2 - r; // inner height
  const w2 = w / 2; // half width
  const h2 = h / 2; // half height
  const ul = r / w; // u left
  const ur = (w - r) / w; // u right
  const vl = r / h; // v low
  const vh = (h - r) / h; // v high

  let positions = [
    -wi,
    -h2,
    0,
    wi,
    -h2,
    0,
    wi,
    h2,
    0,
    -wi,
    -h2,
    0,
    wi,
    h2,
    0,
    -wi,
    h2,
    0,
    -w2,
    -hi,
    0,
    -wi,
    -hi,
    0,
    -wi,
    hi,
    0,
    -w2,
    -hi,
    0,
    -wi,
    hi,
    0,
    -w2,
    hi,
    0,
    wi,
    -hi,
    0,
    w2,
    -hi,
    0,
    w2,
    hi,
    0,
    wi,
    -hi,
    0,
    w2,
    hi,
    0,
    wi,
    hi,
    0,
  ];

  let uvs = [
    ul,
    0,
    ur,
    0,
    ur,
    1,
    ul,
    0,
    ur,
    1,
    ul,
    1,
    0,
    vl,
    ul,
    vl,
    ul,
    vh,
    0,
    vl,
    ul,
    vh,
    0,
    vh,
    ur,
    vl,
    1,
    vl,
    1,
    vh,
    ur,
    vl,
    1,
    vh,
    ur,
    vh,
  ];

  let phia = 0;
  let phib, xc, yc, uc, vc, cosa, sina, cosb, sinb;

  for (let i = 0; i < s * 4; i++) {
    phib = (Math.PI * 2 * (i + 1)) / (4 * s);

    cosa = Math.cos(phia);
    sina = Math.sin(phia);
    cosb = Math.cos(phib);
    sinb = Math.sin(phib);

    xc = i < s || i >= 3 * s ? wi : -wi;
    yc = i < 2 * s ? hi : -hi;

    positions.push(
      xc,
      yc,
      0,
      xc + r * cosa,
      yc + r * sina,
      0,
      xc + r * cosb,
      yc + r * sinb,
      0,
    );

    uc = i < s || i >= 3 * s ? ur : ul;
    vc = i < 2 * s ? vh : vl;

    uvs.push(
      uc,
      vc,
      uc + ul * cosa,
      vc + vl * sina,
      uc + ul * cosb,
      vc + vl * sinb,
    );

    phia = phib;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(positions), 3),
  );
  geometry.setAttribute(
    'uv',
    new THREE.BufferAttribute(new Float32Array(uvs), 2),
  );

  return geometry;
};
