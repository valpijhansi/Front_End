document.getElementById("myBtn").addEventListener("click",displayDate);
var x = document.getElementById("myBtn");
x.addEventListener("mouseover",displayDate);
var y = document.getElementById("Click");
y.addEventListener("click",fun);
y.addEventListener("mouseout",fun1);

function displayDate(){
    document.getElementById("myBtn").innerHTML = Date();
}
function fun(){
    document.getElementById("Click").innerHTML += "Moused over! <br>";
}
function fun1(){
    document.getElementById("Click").innerHTML.innerHTML += "Clicked! <br>";

}
function hello() {

    console.log("hello");
};

//function expression

const hi=function(){ 

    console.log(9+6);

};

//arrow function
const sum = (a,b) => a + b; 

const sum1= () => console.log("hi...");

const val = a => console.log(a+10); 

const del= (b) => {
    console.log("hey...");
    console.log("hi everyone....!");
};