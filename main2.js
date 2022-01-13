// DOM Elements 
window.addEventListener('DOMContentLoaded', (e) => {

    const villagerContainer = document.getElementById('villager-list');


// Event Listeners 









//Initial Fetch & Render 
fetch("http://localhost:3000/villagers/?_limit=5&_page=1")
    .then(res => res.json())
    .then(renderAllVillagers)

//Render Helpers

function renderAllVillagers(villagers) {
    villagers.forEach(renderVillager)
}


function renderVillager(villager) {
    console.log(villager)
    const villagerDiv = document.createElement("div")
    villagerDiv.innerHTML = `
        <img src="${villager.image_uri}">
        <h3>${villager["name"]["name-USen"]}</h3>
        <h4>${villager.saying}</h4>
        <footer>
        <ul>
          <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
        </ul>
        </footer>
        `

  villagerContainer.append(villagerDiv)
}

});