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
console.log(Object.keys(student));

//getting the values of an object as an array   
console.log(Object.values(student));

//getting the entries of an object as an array
console.log(Object.entries(student));

/*dom -document object model(treee-like)*/
console.log(document);


// elements on our page (variables )
const heading = document.querySelector('#mainHeading');
console.log(heading);

const previewImage = document.querySelector('img');
console.log(previewImage);

const aboutsection = document.querySelector('#about');
console.log(aboutsection);


//all sections 
const allsections = document.querySelectorAll('section');
console.log(allsections);
const allnavlinks = document.querySelectorAll('nav a');
console.log(allnavlinks);


//getting  an element

let aboutparagraph = document.querySelector('#about p');

//changing  its text
aboutparagraph.textContent = " this text was changed!";
aboutparagraph.style.color = "red";

//setting/ setter - updating the page from js 

// via the dom 
previewImage.setAttribute("title", " New title of image");
previewImage.setAttribute("alt", " New alternative text for the image");
console.log(previewImage.alt);
console.log(previewImage.title);

//event handling- events(user events - click , key events ,scroll


// get the element of the interset - button with an id of changeTextBtn

let changeTextBtn = document.querySelector('#changeTextBtn');
let demoText = document.querySelector('#demoText');


changeTextBtn.addEventListener("click", function (event) {
    console.log("Someone clicked me !");

    demoText.textContent = "I have been changed when you clicked";
    demoText.style.color = "orange";
    demoText.style.fontSize = "16px";
});

/// use case 2
let highlightSectionsBtn = document.querySelector('#highlightSectionsBtn');
highlightSectionsBtn.addEventListener("click", function (event) {

    document.querySelector("#about").classList.toggle("section-highlight");


    // highlight all the sections
    document.querySelectorAll("section").forEach(function (section) {
        section.classList.toggle("section-highlight");
    });
});


//get the  textbox with id nameInput
document.querySelector('#nameInput').addEventListener("input", function(event){
document.querySelector("#nameOutput").textContent=
"Hello ,  " + document.querySelector("#nameInput").value +" !";
});

// case 4 -character counter
let gtaCommentTextArea = document.querySelector("#commentInput ");
let charCountparagraph = document.querySelector("#charCount");

gtaCommentTextArea.addEventListener("input",function(e){
    // code goes here a.k.a what will be executed when the event happens
    //console.log(" typing...");

    //count the number charcters in the text area
    let numberofChars = gtaCommentTextArea.value.length;

  

    // prevent the user from typing after 60
    if(numberofChars > 60){
        // prevent the default behavior of the event 
        e.preventDefault();
        gtaCommentTextArea.readOnly = true;
    }else{
        // update the paragraph
        charCountparagraph.textContent = "characters :" + numberofChars;
    }


});

// case 5 keyboard events
let keyOutputParagraph = document.querySelector("#keyOutput");
// the event listener
// when you press a key , anywhere on the page coz 
// we've attached it to the entire page not just one element

document.addEventListener("keydown", function(event){

    // updating the paragraph
    keyOutputParagraph.textContent = "You pressed the key : " + event.key;
});


// case 6 - todo list , wish list
let wishlistInput = document.querySelector("#wishlistInput");
let wishlistButton = document.querySelector("#wishlistForm button");
// <ul></ul>
let wishlistItems= document.querySelector("#wishlistItems");

 wishlistButton.addEventListener("click", function(event){
    // prevent the form from being submitted
    event.preventDefault();

    // read whatever is in the wishlist input
    let wishlistInputValue = wishlistInput.value;
    console.log(wishlistInputValue);

    //update the list if the wishlist Input Value != null
    if(wishlistInputValue!= ""){
       // console.log(wishlistInputValue);
     let li= document.createElement("li");
     let button = document.createElement("button");
     button.textContent = "Delete";
        li.textContent = wishlistInputValue;

        
         li.appendChild(button);

        //we aprend the list to the ul 
        wishlistItems.appendChild(li);

        // finally we clear the user typed in the input field 
        wishlistInput.value = "";
    }  

});








