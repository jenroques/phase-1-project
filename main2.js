// DOM Elements 
window.addEventListener('DOMContentLoaded', (e) => {

    const villagerContainer = document.getElementById('villager-list');
    const forwardButton = document.getElementById('forward');
    const backButton = document.getElementById('back');

    let currentPage = 1

// Event Listeners 

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
    fetch(`http://localhost:3000/villagers/?_limit=5&_page=${page}`)
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