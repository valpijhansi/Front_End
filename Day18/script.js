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