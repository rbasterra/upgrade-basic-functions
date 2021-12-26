const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let average = 0;

  for (let i = 0; i< param.length; i++){
      average+= param[i];
  }
  return average/param.length;
}

console.log(average(numbers));