/*let age=20;
var course ="BBIT";
const university = "Strathmore University";

//let age=22
//var course ="BCOM"
//const university = "KCA University"
if (true){
  let time = "11:30"
  var day = "Monday"
  const year =2024
}
console.log(year)*/

function calculateArea(height, width)
{
    if (height ==null) {
        console.log('Height missing');
        return console.log('Height missing');
    }else if (width == null) {
        console.log('Width missing');
        return console.log('Width missing');
    }else {
    let area = height * width;
    return area;
  //console.log("Function calculateArea")
  //alert("function called /executed")
  }
}
console.log (calculateArea(54, 10));
console.log (calculateArea(5));
console.log (calculateArea());

const add= function add(number1, number2){
    return number1 + number2;
}
console.log(add(5, 10));

const multiply =(x, y) => x * y;
console.log(multiply(5, 10));
