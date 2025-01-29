let id = 0;

export const makePottery = (shape, weight, height) => {
    id += 1;
    const piece = {
        shape: shape,
        weight: weight,
        height: height,
        id: id
    }

    return piece;
}