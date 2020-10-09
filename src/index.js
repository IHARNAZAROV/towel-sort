// You should implement your task here.

module.exports = function towelSort(matrix) {
    let array = [];
    if (matrix === undefined) {
        return array;
    }
    for (let i = 0; i < matrix.length; i += 1) {
        if (!(i % 2 === 0)) matrix[i].reverse();

        for (let j = 0; j < matrix[i].length; j += 1) {
            array.push(matrix[i][j]);
        }
    }
    return array;
}
