import Floor from '@/classes/Floor';

const FLOORS_DATA = {
  '3F': import('@/data/floors/3F'),
  L4: import('@/data/floors/L4'),
  L5: import('@/data/floors/L5'),
  B3: import('@/data/floors/B3'),
  B4: import('@/data/floors/B4'),
};

export async function getFloor(floorName) {
  if (!(floorName in FLOORS_DATA)) {
    throw new Error(`Floor '${floorName}' not found`);
  }
  const floorData = await FLOORS_DATA[floorName];
  return new Floor(...Object.values(floorData.default));
}
