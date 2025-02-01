
const petName= document.getElementById('petName')
const ownerName= document.getElementById('ownerName')
const species = document.getElementById('species')
const breed = document.getElementById('breed')

const btnAdd = document.getElementById('add')


class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
}

