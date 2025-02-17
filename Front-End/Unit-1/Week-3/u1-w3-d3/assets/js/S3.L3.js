const myform = document.getElementById('myForm');
const insertItem = document.getElementById('insertItem');
const btnCreate = document.getElementById('create');
const list = document.getElementById('list');
const listItem = [];


btnCreate.addEventListener('click', function(e) {
        e.preventDefault();
        popolateArray();
        printList();

})

function popolateArray() {
        listItem.push(insertItem.value);
}

function printList() {
    list.innerHTML = '';
    for(let i = 0; i < listItem.length;i++) {
        let newLi = document.createElement('li');
        newLi.innerText = listItem[i];
        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type','button');
        btnDelete.setAttribute('onclick',`deleteElement(${i})`)
        btnCreate.innertext = '❌';
        newLi.appendChild(btnDelete);
        list.appendChild(newLi);
        
    }

}

function deleteElement(index) {
    listItem.splice(index,1);
    printList();
}