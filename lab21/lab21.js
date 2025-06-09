
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.showInfo = function() {
  console.log(`Ім'я: ${this.name}, Оцінка: ${this.grade}`);
};

const student1 = new Student("Олег", 90);

student1.showInfo();  