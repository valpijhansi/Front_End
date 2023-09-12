function fun() {
    let input = document.getElementsByTagName("input")[0];
    console.log(input.value);
}

function fun1(){
    let heading  = document.createElement("h1");
    heading.innerText = "Bulb On";
    heading.style.color = "red";
    document.body.appendChild(heading);


    let image = document.createElement("img");
    image.src = "light.gif";
    document.body.appendChild(image);

}
let image=document.getElementsByTagName('img')[0];
let btn =document.getElementsByTagName('button');
let i=0;

function bulb() {
    if(i%2==0) {
        image.setAttribute('src',"bulbon.gif");
        
    }

    i++;

}

function bulb1() {

    if(i%2!=0) {

        image.setAttribute('src',"bulbOff.png");
    
    }
    i++;
}