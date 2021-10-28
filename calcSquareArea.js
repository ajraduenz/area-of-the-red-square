// Input
const circularLenght = 15 //Example
// Function
function calcSquareArea(a) {
  return +Math.pow((a * 4) / (Math.PI * 2), 2).toFixed(2);
}
calcSquareArea(circularLenght)