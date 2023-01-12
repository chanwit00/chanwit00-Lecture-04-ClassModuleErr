class dog {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("This is " + this.name + " !");
    }

    // A static method 
    static bark() {
        console.log("Wake up!!");
    }
}


const myDog = new dog(" Thanchira Sawasdee ");
myDog.introduce();
dog.bark();

// const my2Dog = new dog("Pluto");
// my2Dog.introduce();

// //Calling the static method;
// dog.bark();
// //Dog.introduce*();