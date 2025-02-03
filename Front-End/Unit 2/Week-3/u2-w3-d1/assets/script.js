
const Person = function() {
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.city = ''
    this.address = ''


    this.presentation = () => {
        return `${this.firstName} ${this.lastName} ha ${this.age} anni e vive a ${this.city} in ${this.address}`
    }
}

const person1 = new Person

person1.firstName = 'Sachidu'
person1.lastName = 'Fernando'
person1.age = '16'
person1.city = 'Cornaredo'
person1.address = 'Via Magenta 3'

console.log(person1.presentation())


const person2 = new Person

person2.firstName = 'Sion'
person2.lastName = 'Fernando'
person2.age = '17'
person2.city = 'Baggio'
person2.address = 'Via Valle Atrona 5'

console.log(person2.presentation())


const Comparison = function (_firstName, _lastName,_age,_city, _address) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.city = _city
    this.address = _address

    this.bigger = () => {
        if(person1.age >= person2.age) {
            return `${person1.firstName} ${person1.lastName} è più grande di ${person2.firstName} ${person2.lastName}`
        } else {
            return `${person2.firstName} ${person2.lastName} è più grande di ${person1.firstName} ${person1.lastName}`
        }

    }

    this.girl = ()  => {
        return `${this.firstName} ${this.lastName} ha ${this.age} anni e vive a ${this.city} in ${this.address}`
    }
}

const result = new Comparison


console.log(result.bigger()) // ricorda di richiamare una costante per ottenere il risulato//

const girl1 = new Comparison('Valentina','Cornelio','15','Lacchiarella','Via Puccini 4')

console.log(girl1.girl())


//facciamo la stessa cosa usando un costruttore //

console.log('Usando un costruttore')

class Student{
    constructor(_firstName,_lastName,_age,_city) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.city = _city
    }


    whoIsBigger() {
        if( person1.age > person2.age) {
            return `${person1.firstName} ${person1.lastName} è più grande di ${person2.firstName} ${person2.lastName}`
        } else {
            return `${person1.firstName} ${person1.lastName} è più piccolo/a di ${person2.firstName} ${person2.lastName}`
        }
    }
}

const result2 = new Student

console.log(result2.whoIsBigger())


//esercizio 2//


const petName= document.getElementById('petName')
const ownerName= document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const btnAdd = document.getElementById('add')
const list = document.getElementById('list')
const pets = [];


class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
}


btnAdd.addEventListener('click',function(e){
    e.preventDefault();
    printList()



})


function printList() {
    pets.forEach(pet => {
        let newLi = document.createElement('li')
        newLi.innerText = `PetsName : ${pets.petName}, Owner: ${pets.ownerName} Specie : ${pets.species} Breed:${pets.breed}`
        list.appendChild(newLi)
    })
}




