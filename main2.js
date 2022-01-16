// DOM Elements 
window.addEventListener('DOMContentLoaded', (e) => {

    const villagerContainer = document.getElementById('villager-list');
    const forwardButton = document.getElementById('forward');
    const backButton = document.getElementById('back');
    const addBtnName = document.getElementById('addBtn');
    const formAddName = document.getElementById('addName');
    const addNameInput = document.getElementById('nameInput');
    const nameList = document.getElementById('listNames');
    const dropdownNames = document.getElementById('movedIn');
    let currentPage = 1



const addNamesList = (inputValue) => {
    let li = document.createElement("li")
    li.innerHTML = inputValue;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.className = "delete-btn";
    li.appendChild.apply(deleteButton);
    nameList.appendChild(li);
    li.style.color = color;
    nameList.reset();
}

// Event Listeners 

document.addEventListener('submit', (e) => {
    e.preventDefault();
    let userInput = addNameInput.ariaValueMax;
    let movedIn = dropdown.
})


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

//Fetch Functions 

function getAllVillagers(page) {
    fetch(`http://localhost:3000/villagers/?_limit=3&_page=${page}`)
    .then(res => res.json())
    .then(renderAllVillagers)
}


//Initial Fetch & Render 
getAllVillagers(currentPage)

//Render Helpers

function renderAllVillagers(villagers) {
    villagerContainer.innerHTML = ""
    villagers.forEach(renderVillager)
}


function renderVillager(villager) {
    console.log(villager)
    const villagerDiv = document.createElement("div")
    villagerDiv.innerHTML = `
        <img src="${villager.image_uri}">
        <h3>${villager["name"]["name-USen"]}</h3>
        <h4>${villager.saying}</h4>
        `

  villagerContainer.append(villagerDiv)
}

});