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

function calculateArea(height, width) {
    if (height == null) {
        console.log('Height missing');
        return console.log('Height missing');
    } else if (width == null) {
        console.log('Width missing');
        return console.log('Width missing');
    } else {
        let area = height * width;
        return area;
        //console.log("Function calculateArea")
        //alert("function called /executed")
    }
}
console.log(calculateArea(54, 10));
console.log(calculateArea(5));
console.log(calculateArea());

const add = function add(number1, number2) {
    return number1 + number2;
}
console.log(add(5, 10));

const multiply = (x, y) => x * y;
console.log(multiply(5, 10));


/** JAVASCRIPT arrays(related) **/
const scores = [45, 56, 67, 67, 78];

//acess array_name[index  ]
//78
console.log(scores[4]);
//67
console.log(scores[2]);
//45
console.log(scores[0]);
//56
console.log(scores[1]);


let student_names = ["omondi", "Wafula", "Kiprotich", "Nyambane", "toipan"];

//print out Kiprotich on the console window 
console.log(student_names[2]);

let governors = [
    [47, "johnson Sakaja"],
    [1, "Abdullswamad Sheriff"],
    [21, "Irungu kang'ata"]
];
// The governor of county number 1 is abdullswamad Sherriff
console.log("The governor of the county number", governors[1][0], "is", governors[1][1]);


//map(perform an operationon each element)
let doubled = scores.map(x => x * 2);//multiply each element by 2
console.log(doubled);

//properties
//the class has j students(student_names)
console.log("The class has", student_names.length, "students");

// kenya has b governors
console.log("Kenya has", governors.length, "governors");

//for
for (let index in scores) {
    console.log(scores[index]);
}

//for of
for (let score of scores) {
    console.log(score);
}

//for each
scores.forEach(function (score) {
    console.log("score:", score);
});

const student = {
    name: "Alice",
    age: 20,
    passed: true,
    grade: 'A',
    "Admission number": 12345,
    course: "BBIT",
    group: "2A",
    attendance: 20,
    addAttendance: function () {
        this.attendance + this.attendance + 1;
    }


};
//accessing properties
console.log('My name is ', student.name, "From ", student["Admission number"], "university ");

//a method in the object
student.addAttendance();//add 1 to the attendance
console.log(student.attendance);//21

let bbit_2b = [
    { adm: 223251, name: "Blessing" },
    { adm: 192977, name: "Ryan " },
    { adm: 222024, name: "Ambrose" },
    { adm: 220941, name: "Neema" }

];
// print out the  names of all students in bbit_2busing a loop
bbit_2b.forEach(function (student) { 
console.log(student.name);
});
//@TODO: SHOW looping of objects 

//getting the keys of an object as an array
//console.log(student.keys().toArray());

//getting the values of an object as an array   
//console.log(student.values().toArray());

//getting the entries of an object as an array
//console.log(student.entries().toArray());











