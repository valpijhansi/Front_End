let text = `Hello Raj...!`;

console.log(text);

let str = `I am so lucky ra "Jhancy"`;
console.log(str);

let Text = `Honesty is 
            the best
            thing in
            this world`;
console.log(Text)

const details = {
    firstName: "Valpi",
    lastName: "Jhansi",
    age: 98,

}

let str1 = `Welcome ${details.firstName}, ${details.lastName} !`;
console.log(str1);


let price = 10;
let vat = 0.25;
let total = `Total: ${(price * (1+vat)).toFixed(2)}`;
console.log(total);
