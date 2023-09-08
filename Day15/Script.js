const fruits =["Banana","Grapes","Mango","Orange"];
let size = fruits.length;
console.log(size);
console.log(fruits.toString());
console.log(fruits.join("-"));

const mobiles = ["Vivo","Realme","Redmi","Moto"];
mobiles.pop();//it can remove and return the value
console.log(mobiles)

fruits.push("Apple");
console.log(fruits);

mobiles.shift();//This method removes the first element of the array and shifts all other elements to a lower index.
console.log(mobiles);


const veg = ["tomato","brinjal","bottle-gaurd","Beans"];
let x = veg.shift();//it returns the value that was shifted out
console.log(x);

veg.unshift("Carrot");//this method returns the new array length
console.log(veg);

delete veg[1];
console.log(veg);

const Mix = fruits.concat(veg);
console.log(Mix);

const nums = [[1,2],[3,4],[7,6]];
const value = nums.flat();//this ethod creates a new method with sub-array elements concatenated to a specified depth.
console.log(value); 

fruits.splice(2,0,"Lemon","Kiwi");//this method can be used to add new items to an array.
console.log(fruits);
fruits.splice(2,1,"lemon","Kiwi");// here 2 defines the position where the new element should be added and '1' defines the how many elements should be removed.

console.log(fruits);

const red = veg.slice(0);//it create new array and doesn't remove any elements from the source array.
console.log(red);

const res = fruits.slice(1,4);
console.log(res);


