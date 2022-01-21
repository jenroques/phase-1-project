window.addEventListener('DOMContentLoaded', (e) => {

const villagerContainer = document.getElementById('villager-list');
const forwardButton = document.getElementById('forward');
const backButton = document.getElementById('back');
    
let currentPage = 1


const nameInput = document.querySelector('.name_input');
const nameButton = document.querySelector('.name_button');
const nameList = document.querySelector('.name_list');


nameButton.addEventListener("click", addName)
nameList.addEventListener("click", deleteName)


function addName(event) {
    event.preventDefault();
    
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
   
    const newName = document.createElement('li');
    newName.innerText = nameInput.value;
    newName.classList.add('name_item');
    nameDiv.appendChild(newName);
    if(nameInput.value === ""){
        alert("Please enter a Name");
        return null
    }
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete_btn')
    nameDiv.appendChild(deleteButton);
    nameList.appendChild(nameDiv);
    nameInput.value = ""
}

function deleteName(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        const nameDel = item.parentElement;
        nameDel.addEventListener("click", function () {
            nameDel.remove()
        })
    }
}

const noteInput = document.querySelector('.note_input');
const noteButton = document.querySelector('.note_button');
const noteList = document.querySelector('.note_list');

//Event listeners
noteButton.addEventListener("click", addNote)
noteList.addEventListener("click", deleteNote)


function addNote(event) {
    event.preventDefault();
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('name');
    const newNote = document.createElement('li');
    newNote.innerText = noteInput.value;
    newNote.classList.add('name_item');
    noteDiv.appendChild(newNote);
    if(noteInput.value === ""){
        alert("Please enter some notes!");
        return null
    }
    const deleteNoteButton = document.createElement('button');
    deleteNoteButton.innerHTML = 'Delete';
    deleteNoteButton.classList.add('delete_note_btn')
    noteDiv.appendChild(deleteNoteButton);
    noteList.appendChild(noteDiv);
    noteInput.value = ""
}

function deleteNote(e) {
    const item = e.target;
   
    if (item.classList[0] === "delete_note_btn") {
        const noteDel= item.parentElement;
        noteDel.addEventListener("click", function () {
            noteDel.remove()
        })
    }
}


forwardButton.addEventListener("click", () => {
    currentPage++
    getAllVillagers(currentPage)
})


backButton.addEventListener("click", () => {
    if (currentPage > 1) {
    currentPage--
    getAllVillagers(currentPage)
    }
})



function getAllVillagers(page) {
    fetch(`http://localhost:3000/villagers/?_limit=1&_page=${page}`)
    .then(res => res.json())
    .then(renderAllVillagers)
}



getAllVillagers(currentPage)



function renderAllVillagers(villagers) {
    villagerContainer.innerHTML = ""
    villagers.forEach(renderVillager)
}


function renderVillager(villager) {
    
    const villagerDiv = document.createElement("div")
    villagerDiv.innerHTML = `
        <img src="${villager.image_uri}">
        <h3>Name: ${villager["name"]["name-USen"]}</h3>
        <h4>Catch-Phrase:   ${villager["catch-phrase"]}</h4>
        <p>Personality:   ${villager["personality"]}</p>
        <p>${villager.saying}</p>
        `

  villagerContainer.append(villagerDiv)
}
})
