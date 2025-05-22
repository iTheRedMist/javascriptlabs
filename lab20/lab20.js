const person = {
  name: "Ілля",
  sayHello: function() {
    console.log("this:", this);
    console.log(`Привіт, я ${this.name}`);
  }
};
person.sayHello();
