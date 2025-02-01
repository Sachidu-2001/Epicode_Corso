
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

const girl1 = new Comparison('Valentina','Cornelio','15','Lacchiarella','Via Puccini 4')

console.log(girl1.girl())

