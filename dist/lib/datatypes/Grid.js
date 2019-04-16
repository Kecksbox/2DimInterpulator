"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grid {
    constructor(data) {
        this.data = data;
    }
    add(dataPoint) {
        this.data.push(dataPoint);
    }
    remove(dataPoint) {
        const index = this.data.indexOf(dataPoint);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }
    predict(point) {
        // check if data has elements to predict from
        this.validateDataLength();
        // find 3-nearest-neighbours
        const nearestNeighbours = this.find3NearestNeighbours(point);
        // calcualte plain parameters B
        const plainParamters = this.caluclatePlainParameters(nearestNeighbours);
        // calculate the points value
        return this.calculate(point, plainParamters);
    }
    calculate(point, plainParamters) {
        return point.x * plainParamters[0] + point.y * plainParamters[1] + plainParamters[2];
    }
    find3NearestNeighbours(point) {
        const nearestNeighbours = Array(3);
        const nearestNeighbourScores = Array(3);
        let i;
        for (let dataPoint of this.data) {
            let dist = Math.sqrt(Math.pow(dataPoint.x - point.x, 2) + Math.pow(dataPoint.y - point.y, 2));
            for (i = 0; i < 3; ++i) {
                if (nearestNeighbours[i] === undefined || (dist !== undefined && nearestNeighbourScores[i] > dist)) {
                    const temp = nearestNeighbours[i];
                    const temp2 = nearestNeighbourScores[i];
                    nearestNeighbours[i] = dataPoint;
                    nearestNeighbourScores[i] = dist;
                    dataPoint = temp;
                    dist = temp2;
                }
            }
        }
        return nearestNeighbours;
    }
    caluclatePlainParameters(nearestNeighbours) {
        const a = nearestNeighbours[0].x;
        const b = nearestNeighbours[0].y;
        const c = nearestNeighbours[1].x;
        const d = nearestNeighbours[1].y;
        const e = nearestNeighbours[2].x;
        const f = nearestNeighbours[2].y;
        const z = nearestNeighbours[0].z;
        const u = nearestNeighbours[1].z;
        const i = nearestNeighbours[2].z;
        return [
            (-i * b + i * d + b * u - f * u - d * z + f * z) / (b * c - a * d - b * e + d * e + a * f - c * f),
            (i * a - i * c - a * u + e * u + c * z - e * z) / (b * c - a * d - b * e + d * e + a * f - c * f),
            (i * b * c - i * a * d - b * e * u + a * f * u + d * e * z - c * f * z) / (b * c - a * d - b * e + d * e + a * f - c * f)
        ];
    }
    validateDataLength() {
        if (this.data.length < 3) {
            throw new EvalError("Data must contain at least three dataPoints for prediction.");
        }
    }
}
exports.default = Grid;
