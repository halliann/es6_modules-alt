import { Animal } from './animal.js'

export class AdoptableList {
    constructor() {
        this.list = [];
        this.nextId = 0;
    };

    add(name, animalType, gender, breed, age) {
        const newAnimal = new Animal(++this.nextId, name, animalType, gender, breed, age);

        this.list.push(newAnimal);
    };

    remove(animalId) {
        let index = this.list.findIndex(animal => animal.id === animalId);

        if (index !== -1) {
            this.list.splice(index, 1);
        }
    };
};