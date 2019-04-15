import Grid from "../../lib/datatypes/Grid";

const point0 = {
    x: 0,
    y: 0,
    z: 1,
};
const point1 = {
    x: 1,
    y: 0,
    z: 2,
};
const point2 = {
    x: 0,
    y: 1,
    z: 1,
};
const point3 = {
    x: 1,
    y: 1,
    z: 3,
};
const testGrid = new Grid(
    [
        point0,
        point1,
        point2,
        point3,
    ]
);

test('predicts 1.5 for (0.5, 0.25)', () => {
    expect(testGrid.predict({
        x: 0.5,
        y: 0.25,
    })).toBe(1.5);
});

test('predicts 1.5 for (0.5, 0.75)', () => {
    expect(testGrid.predict({
        x: 0.5,
        y: 0.75,
    })).toBe(2);
});