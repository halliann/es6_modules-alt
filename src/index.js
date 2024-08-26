console.log("Hello World");

// TODO
import { AdoptableList } from "./adoptableList.js"

// form & inputs
const form = document.getElementById('submitForm');
const nameInput = document.getElementById('name-input');
const animalTypeInput = document.getElementById('animalType-input');
const genderInput = document.getElementById('gender-input');
const breedInput = document.getElementById('breed-input');
const ageInput = document.getElementById('age-input');

// "paragraph" elements
const nameCardDisplay = document.getElementById('name-card');
const animalTypeCardDisplay = document.getElementById('animalType-card');
const genderCardDisplay = document.getElementById('gender-card');
const breedCardDisplay = document.getElementById('breed-card');
const ageCardDisplay = document.getElementById('age-card');
const adoptedBtn = document.getElementById('adoptedBtn');

// adoptable list element
const ul = document.getElementById('ul');

const adoptlist = new AdoptableList();

form.addEventListener('submit', addAnimal);
adoptedBtn.addEventListener('click', removeAnimal);

// add animal to adoptable animal list
function addAnimal(event) {
    event.preventDefault();

    let name = nameInput.value;
    let animalType = animalTypeInput.value;
    let gender = genderInput.value;
    let breed = breedInput.value;
    let age = ageInput.value;

    console.log(`Adding animal: ${name}, ${animalType}, ${gender}, ${breed}, ${age}`)

    adoptlist.add(name, animalType, gender, breed, age);

    updateDOMList();
};

// show animal details on card when clicked
function showAnimalDetails(animal) {
    nameCardDisplay.textContent = animal.name;
    animalTypeCardDisplay.textContent = animal.animalType;
    genderCardDisplay.textContent = animal.gender;
    breedCardDisplay.textContent = animal.breed;
    ageCardDisplay.textContent = animal.age;
    adoptedBtn.disabled = false;
    adoptedBtn.setAttribute('data-animalId', animal.id);
};

function updateDOMList() {
    ul.textContent = '';

    adoptlist.list.forEach((animal) => {
        let newLi = document.createElement('li');
        newLi.textContent = `${animal.id} - ${animal.name} (${animal.animalType})`;
        ul.appendChild(newLi);
        newLi.addEventListener('click', () => showAnimalDetails(animal));
    });

    clearFormInput();
};

function removeAnimal() {
    let animalId = Number(adoptedBtn.getAttribute('data-animalId'));
    adoptlist.remove(animalId);
    
    updateDOMList();

    nameCardDisplay = '';
    animalTypeCardDisplay = '';
    genderCardDisplay = '';
    breedCardDisplay = '';
    ageCardDisplay = '';
    adoptedBtn.disabled = true;
};

function clearFormInput() {
    nameInput.value = ''
    animalTypeInput.value = ''
    genderInput.value = '';
    breedInput.value = '';
    ageInput.value = '';
};