import { svgData } from '@/data/floors/L5code';
const objects = [
  { x: 8.4, y: -12.9, type: 'lift', angle: 42 },
  { x: -40.1, y: -10.4, type: 'lift' },
  { x: 19.1, y: 8.3, type: 'lift', angle: 4 },
  { x: 33.1, y: -4.1, type: 'lift', angle: -18 },
  { x: 22.5, y: -2.5, type: 'terminal' },
  { x: 21.4, y: -2.5, type: 'terminal' },
];

const path = [
  { x: -14.3, y: -11.5 },
  { x: -15.4, y: -0.7 },
  { x: -17.1, y: -1 },
];

const icons = [
  {
    file: require('@/assets/stairsL5.png'),
    width: 2.2,
    height: 1.32,
    position: { x: -11.45, y: -14.85 },
  },
];

const texts = [
  { name: 'L5-001', x: -34, y: -8.3 },
  { name: 'L5-119', x: -24.3, y: -3.9 },
  { name: 'L5-101', x: -21.0, y: -3.9 },
  { name: 'L5-102', x: -16.8, y: -3.9 },
  { name: 'L5-120', x: -13.6, y: -4.7 },
  { name: 'L5-103', x: -10.2, y: -5.0 },
  { name: 'L5-104', x: -7.4, y: -5.1 },
  { name: 'L5-121', x: -4.4, y: -4.9 },
  { name: 'L5-105', x: -1.5, y: -4.5 },
  { name: 'L5-115', x: 2.4, y: -4.1 },
  { name: 'L5-106', x: 5.3, y: -3.6 },
  { name: 'L5-107', x: 8.1, y: -2.6 },
  { name: 'L5-122', x: 10.4, y: -1.7 },
  { name: 'L5-117', x: 13.8, y: 0.9 },
  { name: 'L5-118', x: 17.1, y: 1.2 },
  { name: 'L5-115', x: 19.3, y: 2.5 },
  { name: 'L5-114', x: 24.3, y: 8.2 },
  { name: 'L5-124', x: 29.1, y: 7.9 },
  { name: 'L5-005', x: 31.1, y: 0.3 },
  { name: 'L5-007', x: 27.3, y: -6.0 },
  { name: 'L5-008', x: 18.0, y: -6.8 },
  { name: 'L5-110', x: 9.0, y: -7.5 },
  { name: 'L5-123', x: -1.2, y: -13.3 },
  { name: 'L5-113', x: -5.7, y: -13.3 },
  { name: 'L5-111', x: -11.8, y: -11.3 },
  { name: 'L5-003', x: -15.8, y: -10.1 },
  { name: 'L5-002', x: -19.1, y: -9.8 },
  { name: 'L5-112', x: -23.9, y: -9.3 },
];

const floorData = {
  name: 'L5',
  params: {
    path: svgData,
    type: 'svg',
    scale: 0.035,
    offsetX: -76.7,
    offsetY: -6,
    offsetObjectX: -36.7,
    offsetObjectY: -9,
  },
  objects: objects,
  vertices: [],
  texts: texts,
  path: path,
  icons: icons,
};
export default floorData;
