function transposeMatrix(matrix) {
    // Get the number of rows and columns
    const rows = matrix.length;
    const columns = matrix[0].length;
  
    // Create a new empty matrix with swapped dimensions
    const transposedMatrix = [];
    for (let i = 0; i < columns; i++) {
      transposedMatrix[i] = new Array(rows);
    }
  
    // Fill the transposed matrix with the values from the original matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  // Example usage
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transposed = transposeMatrix(matrix);
  console.log(transposed);
  