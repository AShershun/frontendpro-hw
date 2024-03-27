'use strict'

class Person {
    constructor(name, age) {
        this.name = name;
        if (typeof age !== 'number') {
            throw new Error('Please enter the number!')
        } else {
        this.age = age;
        }
    }

    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, plateNumber) {
        this.brand = brand;
        this.model = model;
        if (typeof year !== 'number') {
            throw new Error('Please enter the number!')
        } else {
            this.year = year;
        }
        this.plateNumber = plateNumber;
        this.owner = null;
    }

    setOwner(person) {
        if (person instanceof Person) {
            if (person.age >= 18) {
                this.owner = person;
            } else {
                console.log('Owner must be 18 years or older');
            }
        } else {
            console.log('Invalid owner. Please add an existing person');
        }
    }

    getInfo() {
        console.log(`\nCar: ${this.brand} ${this.model}, Year: ${this.year}, Plate Number: ${this.plateNumber}`);
        if (this.owner instanceof Person) {
            console.log("Owner Information:");
            this.owner.getInfo();
        } else {
            console.log("No owner assigned.");
        }
    }
}

const ivan = new Person("Ivan", 25);
const nastya = new Person("Nastya", 16);
const alex = new Person("Alex", 30);

const car1 = new Car("Pagani", "Huayra", 2018, "BH01017AC");
car1.setOwner(alex);

const car2 = new Car("Porsche", "Macan", 2020, "CA2346GD");
car2.setOwner(nastya)

const car3 = new Car("Honda", "Accord", 2007, "AA9876FS");
car3.setOwner(ivan)

car1.getInfo();
car2.getInfo();
car3.getInfo();