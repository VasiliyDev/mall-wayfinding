import { svgData } from '@/data/floors/L4code';
const objects = [
  { x: -43.5, y: -10.0, type: 'lift' },
  { x: 15.8, y: 8.1, type: 'lift', angle: 5 },
  { x: 29.5, y: -4.0, type: 'lift', angle: -19 },
  { x: 19.3, y: -2.5, type: 'terminal' },
  { x: 18.2, y: -2.5, type: 'terminal' },
];

const path = [
  { x: -14.3, y: -11 },
  { x: -15.4, y: -0.7 },
  { x: -17.1, y: -1 },
];

const icons = [
  {
    file: require('@/assets/stairsL4-1.png'),
    width: 1.826,
    height: 2.2,
    position: { x: -13.35, y: -14.5 },
  },
  {
    file: require('@/assets/stairsL4-2.png'),
    width: 2.2,
    height: 1.276,
    position: { x: -11.04, y: -15.6 },
  },
];

const texts = [
  { name: 'L4-009', x: -39.1, y: -4.1 },
  { name: 'L4-114', x: -33.5, y: -4.1 },
  { name: 'L4-102', x: -30.3, y: -4.1 },
  { name: 'L4-116', x: -26.8, y: -4.1 },
  { name: 'L4-103', x: -23.8, y: -4.1 },
  { name: 'L4-118', x: -20.3, y: -3.4 },
  { name: 'L4-115', x: -14.5, y: -2.1 },
  { name: 'L4-101', x: -10.8, y: -2.1 },
  { name: 'L4-119', x: -7.7, y: -2.1 },
  { name: 'L4-104', x: -4.3, y: -2.1 },
  { name: 'L4-105', x: 2.8, y: -2.1 },
  { name: 'L4-106', x: 10.7, y: 1.63 },
  { name: 'L4-120', x: 9.2, y: 5.4 },
  { name: 'L4-113', x: 4.7, y: 9.9 },
  { name: 'L4-115', x: 20.1, y: 11.9 },
  { name: 'L4-121', x: 25.5, y: 3.1 },
  { name: 'L4-110', x: 28.1, y: 2.9 },
  { name: 'L4-122', x: 30.5, y: 2.2 },
  { name: 'L4-117', x: 33.6, y: 2.0 },
  { name: 'L4-123', x: 36.8, y: 2.7 },
  { name: 'L4-111', x: 27.2, y: -1.0 },
  { name: 'L4-007', x: 30.8, y: -1.6 },
  { name: 'L4-102', x: 33.6, y: -2.5 },
  { name: 'L4-124', x: 26.9, y: -2.8 },
  { name: 'L4-006', x: 26.3, y: -8.3 },
  { name: 'L4-008', x: 17.8, y: -7.8 },
  { name: 'L4-005', x: 10.6, y: -7.5 },
  { name: 'L4-004', x: 2.8, y: -9.5 },
  { name: 'L4-010', x: -1.9, y: -14.6 },
  { name: 'L4-011', x: -6.7, y: -14.6 },
  { name: 'L4-112', x: -12.8, y: -14.8 },
  { name: 'L4-003', x: -16.9, y: -15.1 },
  { name: 'L4-002', x: -21.5, y: -11.9 },
  { name: 'L4-001', x: -29.1, y: -11.2 },
];

const floorData = {
  name: 'L4',
  params: {
    path: svgData,
    type: 'svg',
    scale: 0.035,
    offsetX: -84,
    offsetY: -12,
    offsetObjectX: -33,
    offsetObjectY: -9,
  },
  objects: objects,
  vertices: [],
  texts: texts,
  path: path,
  icons: icons,
};
export default floorData;
