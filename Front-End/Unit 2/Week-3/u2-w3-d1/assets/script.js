
const Person = function() {
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.city = ''


    this.presentation = () => {
        return `${this.firstName} ${this.lastName} ha ${this.age} anni e vive a ${this.city}`
    }
}

const person1 = new Person

person1.firstName = 'Sachidu'
person1.lastName = 'Fernando'
person1.age = '23'
person1.city = 'Milano'

console.log(person1.presentation())


const person2 = new Person

person2.firstName = 'Dustin'
person2.lastName = 'Farinaro'
person2.age = '25'
person2.city = 'San Zenone'

console.log(person2.presentation())


const Comparison = function (_firstName, _lastName,_age,_city) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.city = _city

    this.bigger = () => {
        if(person1.age >= person2.age) {
            return `${person1.firstName}${person1.lastName} è più grande di ${person2.firstName} ${person2._lastName}`
        } else {
            return `${person2.firstName}${person2.lastName} è più grande di ${person1.firstName} ${person1._lastName}`
        }

    }
}

const person1Comparison = new Comparison
const person2Comparison = new Comparison


console.log(person1Comparison,person2Comparison)