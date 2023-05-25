class Person {
    constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
    apresentar() {
      console.log(
        `Olá, meu nome é ${this.name} e tenho ${this.age} anos e ${this.height} de altura.`
      );
    }
  }
  class PersonProfessional extends Person {
    constructor(name, age, height, profession) {
      super(name, age, height);
      this.profession = profession;
    }
    apresentar() {
      console.log(
        `Olá, meu nome é ${this.name} e tenho ${this
  .age} anos e ${this.height}m de altura e meu trabalho é ${this.profession}.`
      );
    }
  }
  const pessoa1= new PersonProfessional("Samara", 34, "1.70", "Progromadora");
  pessoa1.apresentar();
  /* const pessoa = new Person("Samara", 34, "1.70");
  pessoa.apresentar(); */


