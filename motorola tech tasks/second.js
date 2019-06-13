function solution(X) {
    const fullFillmentSymbol = ' * ';
    const spaceSymbol = '   ';
    let triangle = '\n';
  
    // write your code in JavaScript

    for (var index = 0; index < X; index++) {
        for (var i = 1; i < X-index; i++) {
          triangle = triangle + spaceSymbol;
        }
        for (var j = 1; j <= (2*index+1); j++) {
          triangle = triangle + fullFillmentSymbol;
        }
        triangle = triangle + '\n';
      }
  
    return triangle;
  };



console.log(solution(6));