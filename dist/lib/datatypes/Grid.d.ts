import { I3DCoordinate, I2DCoordinate } from './InterpolationData';
declare class Grid {
    private data;
    constructor(data: I3DCoordinate[]);
    add(dataPoint: I3DCoordinate): void;
    remove(dataPoint: I3DCoordinate): void;
    predict(point: I2DCoordinate): number;
    private calculate;
    private find3NearestNeighbours;
    private caluclatePlainParameters;
    private validateDataLength;
}
export default Grid;
