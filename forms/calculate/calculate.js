
function calcAvgSquare (num1, num2, num3) {
  return (((num1 + num2 + num3)/3) * (Math.pow(num1, 2)))
  }
  
let x= Number(prompt('Enter a number'))
let y= Number(prompt('Enter a number'))
let z= Number(prompt('Enter a number'))
alert(`The answer using ${x}, ${y}, and ${z} is ${calcAvgSquare(x, y, z)}`)
