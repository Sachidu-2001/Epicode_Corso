const words = document.getElementById('paragraph')
const btnSave = document.getElementById('save')
const btnRemove = document.getElementById('remove')
const input = document.getElementById('input')


btnSave.addEventListener('click', function(e) {
    e.preventDefault()
    saveText()

})

function saveText() {
    let inputName = localStorage.setItem('name', `${input.value}`)
}

function printText() {
    
}