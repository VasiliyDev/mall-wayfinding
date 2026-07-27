export default class PathFinding {
  vertices = [];
  startIndex = 0;
  constructor(vertices) {
    this.setVertices(vertices);
  }
  setVertices(vertices) {
    this.vertices = vertices;
  }

  distance(point1, point2) {
    return Math.sqrt(
      (point1.x - point2.x) * (point1.x - point2.x) +
        (point1.y - point2.y) * (point1.y - point2.y),
    );
  }

  calculateDistance(START_VERTEX = 0) {
    this.vertices.forEach((el) => {
      el.distance = -1;
    });
    let checkedVertices = [START_VERTEX];
    let queue = [START_VERTEX];
    this.vertices[START_VERTEX].distance = 0;
    while (queue.length > 0) {
      const cur = queue[0];
      checkedVertices.push(cur);
      this.vertices[cur].neighbours.forEach((el) => {
        const d =
          this.distance(this.vertices[el], this.vertices[cur]) +
          this.vertices[cur].distance;
        if (this.vertices[el].distance === -1 || this.vertices[el].distance > d)
          this.vertices[el].distance = d;
        if (!checkedVertices.includes(el)) queue.push(el);
      });
      queue.shift();
    }
    // console.log(this.vertices.map((el, i) => {
    //     return {index: i, d: el.distance};
    // }).sort((a, b) => {
    //     return b.d - a.d;
    // }));
  }

  findPath(place, entryLabel = '') {
    if (entryLabel) {
      this.startIndex = this.vertices.findIndex(
        (el) => el?.entryLabel === entryLabel,
      );
      if (this.startIndex === -1) this.startIndex = 0;
    }
    if (this.vertices[this.startIndex].distance !== -1)
      this.calculateDistance(this.startIndex);
    const path = this.pathToPlace(place);
    if (path[0].index === 0) return path;
    if (!path[0].index) console.log('BUG INDEX!!');
    const enterPoint = this.findPlaceEnterSide(
      place,
      path[path.length - 2],
    ).point;
    path[path.length - 1] = enterPoint;
    const path2 = this.backPath(path[0].index);
    return path2.concat(path);
  }

  findPlaceEnterSide(place, from) {
    const angle = (place.angle * Math.PI) / 180;
    const WIDTH = (2 * 0.8) / 2;
    const points = [];
    points.push({
      x: place.x + WIDTH * Math.cos(angle),
      y: place.y + WIDTH * Math.sin(angle),
    });
    points.push({
      x: place.x - WIDTH * Math.cos(angle),
      y: place.y - WIDTH * Math.sin(angle),
    });
    const HEIGHT = (0.9 * 0.9) / 2;
    points.push({
      x: place.x - HEIGHT * Math.cos(Math.PI / 2 - angle),
      y: place.y + HEIGHT * Math.sin(Math.PI / 2 - angle),
    });
    points.push({
      x: place.x + HEIGHT * Math.cos(Math.PI / 2 - angle),
      y: place.y - HEIGHT * Math.sin(Math.PI / 2 - angle),
    });
    return points.reduce(
      (best, el) => {
        const dist = this.distance(el, from);
        if (dist < best.dist) return { dist: dist, point: el };
        return best;
      },
      { point: {}, dist: 9999 },
    );
  }

  intersectionWithPlace(point1, point2, place) {
    let points = [];
    if (place.angle % 90 === 0) {
      if (point1.x !== point2.x)
        points.push({
          x: place.x,
          y:
            point1.y +
            ((point2.y - point1.y) * (place.x - point1.x)) /
              (point2.x - point1.x),
        });
      if (point1.y !== point2.y)
        points.push({
          x:
            point1.x +
            ((point2.x - point1.x) * (place.y - point1.y)) /
              (point2.y - point1.y),
          y: place.y,
        });
    } else {
      const tg1 = Math.tan((place.angle * Math.PI) / 180);
      const b1 = place.y - tg1 * place.x;
      const denominator1 = point2.y - point1.y - tg1 * (point2.x - point1.x);
      const tg2 = Math.tan(((place.angle - 90) * Math.PI) / 180);
      const b2 = place.y - tg2 * place.x;
      const denominator2 = point2.y - point1.y - tg2 * (point2.x - point1.x);
      if (denominator1 !== 0) {
        const x =
          (point1.x * point2.y -
            point2.x * point1.y +
            b1 * (point2.x - point1.x)) /
          denominator1;
        points.push({
          x: x,
          y: tg1 * x + b1,
        });
      }
      if (denominator2 !== 0) {
        const x =
          (point1.x * point2.y -
            point2.x * point1.y +
            b2 * (point2.x - point1.x)) /
          denominator2;
        points.push({
          x: x,
          y: tg2 * x + b2,
        });
      }
    }
    points = points.filter((el) => {
      if ((el.x - point1.x) * (el.x - point2.x) > 0.1) return false;
      if ((el.y - point1.y) * (el.y - point2.y) > 0.1) return false;
      return true;
    });
    if (!points.length) {
      return null;
    }
    if (points.length === 1) return points[0];
    return this.distance(place, points[0]) > this.distance(place, points[1])
      ? points[1]
      : points[0];
  }

  pathToPlace(place) {
    const LIMIT = 3;
    const contenders = this.vertices
      .map((el, i) => {
        el.index = i;
        return el;
      })
      .filter((el) => {
        return (
          Math.abs(el.x - place.x) < LIMIT || Math.abs(el.y - place.y) < LIMIT
        );
      })
      .map((el) => el.index);
    const min = contenders.reduce((min, el) => {
      const distance = this.distance(place, this.vertices[el]);
      if (distance > 2) return min;
      if (min === null || distance < min.d) return { index: el, d: distance };
      return min;
    }, null);
    const closestVertex = min ? min.index : null;

    let checkedVertices = [];
    const closestIntersection = contenders.reduce((min2, el, i, contenders) => {
      checkedVertices.push(el);
      const min = this.vertices[el].neighbours.reduce((min, n) => {
        if (!contenders.includes(n) || checkedVertices.includes(n)) return min;
        const intersection = this.intersectionWithPlace(
          this.vertices[el],
          this.vertices[n],
          place,
        );
        if (!intersection) return min;
        if (
          min === null ||
          this.findPlaceEnterSide(place, intersection).dist < min.d
        ) {
          return {
            index1: el,
            index2: n,
            point: intersection,
            d: this.findPlaceEnterSide(place, intersection).dist,
          };
        }
        return min;
      }, null);
      if (min === null) return min2;
      if (min2 === null || min.d < min2.d)
        return {
          index1: min.index1,
          index2: min.index2,
          point: min.point,
          d: min.d,
        };
      return min2;
    }, null);

    let distance = -1;
    let path = [];
    if (closestIntersection !== null && closestIntersection.d < LIMIT) {
      path = [closestIntersection.point, { x: place.x, y: place.y }];
      const v1 = this.vertices[closestIntersection.index1];
      const v2 = this.vertices[closestIntersection.index2];
      const dist1 = this.distance(closestIntersection.point, v1) + v1.distance;
      const dist2 = this.distance(closestIntersection.point, v2) + v2.distance;
      if (dist2 > dist1) {
        path.unshift(v1);
        distance = dist1;
      } else {
        path.unshift(v2);
        distance = dist2;
      }
    }
    if (closestVertex === null) return path;
    let distToVertex =
      this.distance(place, this.vertices[closestVertex]) +
      this.vertices[closestVertex].distance;
    if (distToVertex < 5) distToVertex += 1.5;

    if (distance === -1 || distance > distToVertex)
      path = [this.vertices[closestVertex], { x: place.x, y: place.y }];
    return path;
  }

  backPath(v) {
    const START_VERTEX = this.startIndex;
    let indexes = [v];
    let path = [];
    let tr = 0;
    while (indexes[0] !== START_VERTEX && tr < 100) {
      tr++;
      let min = this.vertices[indexes[0]].neighbours.reduce((min, el) => {
        const distance =
          this.vertices[el].distance +
          this.distance(this.vertices[indexes[0]], this.vertices[el]);
        if (min === null || distance < min.d) return { index: el, d: distance };
        return min;
      }, null);
      indexes.unshift(min.index);
      path.unshift({
        x: this.vertices[min.index].x,
        y: this.vertices[min.index].y,
      });
    }

    return path;
  }
}
