
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length==0 || matrix.length==0){
    return [];
  }
  let sol = [];
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[i].length; j++){
      if(i==0 || i%2==0){
        sol.push(matrix[i][j]);
      } 
      else{
        sol.push(matrix[i][matrix[i].length-j-1]);
      }
    }
  }
  return sol;
}
