interface I2DCoordinate {
    [key: string]: number,
    x: number,
    y: number,
}

interface I3DCoordinate extends I2DCoordinate {
    z: number,
}

export {
    I2DCoordinate,
    I3DCoordinate,
}