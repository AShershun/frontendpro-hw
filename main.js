class Person {
    constructor(name, gender) {
        this.name = name;
        if (gender === 'male' || gender === 'female') {
            this.gender = gender;
        } else {
            throw new Error('Gender must be either "male" or "female"');
        }
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }

    //Для себя
    getPersonOfApartment() {
        if (this.residents.length === 0) {
           return 'No residents';
        } else if (this.residents.length === 1) {
            return `${this.residents[0].name} lives in this apartment`;
        } else {
            return `${this.residents.map(person => person.name).join(", ")} live in this apartment`;
        }
    }

}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log('This building already has the maximum number of apartments');
        }
    }

    //Для себя
    getNumOfApartments() {
        return `This house has ${this.apartments.length} apartments`;
    }
}

const ivan = new Person('Ivan', 'male');
const zhanna = new Person('Zhanna', 'female');
const bob = new Person('Bob', 'male');
const nastya = new Person('Nastya', 'female');


const apart1 = new Apartment();
const apart2 = new Apartment();
const apart3 = new Apartment();

const house = new House(2);

apart1.addResident(ivan);
apart1.addResident(zhanna);
apart2.addResident(nastya);
apart3.addResident(bob);

house.addApartment(apart1);
console.log('\n' + house.getNumOfApartments());
house.addApartment(apart2);
house.addApartment(apart3);

console.log('\n' + apart1.getPersonOfApartment());
console.log(apart3.getPersonOfApartment());

console.log('\n', house);
console.log('\n', apart1);



