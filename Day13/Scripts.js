const Students = {
name: "Jhansi",
age: 23,
location: "Kadiri",
hobbies: ["playing","reading","coding"],

sayHi: function(a){
    console.log("Hello "+a);
},
marks: {
    Java: 90,
    English:80,
    DSA: 70,
    printMarks: function(){
        console.log(Students.name);
        console.log(Students.marks.Java)
        console.log(this.DSA);
    },
    distances: {
        Kadiri: 100,
        Hyderabad: 300,
        Bangalore: 400,
        printDistances: function(){
            console.log(this.Bangalore);
            console.log(this.Hyderabad);
            console.log(this.Kadiri);
        }

    },
},
};

let res = Students.marks.distances.Bangalore;
console.log(res);

 Students.marks.distances.printDistances();
