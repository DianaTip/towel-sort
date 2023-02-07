
// You should implement your task here.

module.exports = function towelSort (matrix) {
 var matrix1 = []
  for (var i = 0; i < matrix.length; i++)
   {   if (i%2 !== 0)
      { matrix[i].reverse();}
    
      for (var j = 0; j < matrix.length; j++)
       {matrix1.push(matrix[i][j]);
       } 
      }

  return [matrix1];
}
