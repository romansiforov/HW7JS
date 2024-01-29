document.write(`Домашка : Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
Dog, Cat, Horse перевизначають методи makeNoise, eat.
Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини, що прийшла 
на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.`);

class Animal {

    constructor(animalName = "some name", food = "some food", location = "default location") {
        this.name = animalName;
        this.food = food;
        this.location = location
 }

    makeNoise() {
        return `The animal ${this.animalName} makes some noise`;
    };

    eat() {
        return `The animal ${this.animalName} eats ${this.food}`
    };

    sleep() {
        return `The animal ${this.animalName} sleeps at night`;
    };
}

class Dog extends Animal{
    constructor(animalName = "some name", food = "some food", location = "default location", speed = 0, hateCats = true) {
        super(animalName, food, location);
        this.speed = speed;
        this.hateCats = hateCats;
    }   
    
    makeNoise() {
        return `The animal ${this.animalName} barks`;
    }

}

class Cat extends Animal {
    constructor(animalName = "some name", food = "some food", location = "default location", rulesTheWorlds = false) {
        super(animalName, food, location);
        this.rulesTheWorlds = rulesTheWorlds;
    }

    makeNoise() {
        return `The animal ${this.animalName} meows`;
    }
}

class Horse extends Animal {
    constructor (animalName = "some name", food = "some food", location = "default location", speed = 0, height = 0) {
        super(animalName, food, location);
        this.speed = speed;
        this.height = height;
    }
} 

class Vet {
    treatAnimal(animal) {
        if(animal instanceof Animal){
            console.log(`The animal eats ${animal.food} and it's located in ${animal.location}`);
        } else {
            console.log(`This is unknown guy`);
        }
    }
}



let cat = new Cat("Cat", "mouse", "flats", true);
let dog = new Dog("Dog", "meat", "doghouse", 15, true);
let horse = new Horse("Horse", "grass" , "steppe", 60, 1.7);

let doctor = new Vet();

let animals = [cat, dog, horse];

for(let i = 0; i < animals.length; i++){
    doctor.treatAnimal(animals[i]);
}


