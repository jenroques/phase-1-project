// DOM Elements 
window.addEventListener('DOMContentLoaded', (e) => {

    const villagerContainer = document.getElementById('villager-list');


// Event Listeners 


//Render Helpers
function renderVillager(villager) {
    const villagerDiv = document.createElement("div")
    villagerDiv.innerHTML = `
        <img src="${villagers.image_uri}">
        <h3>${villagers["name"]["name-USen"]}</h3>
        <h4>${villagers.saying}</h4>
        <footer>
        <ul>
          <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
        </ul>
        </footer>
        `

  villagerContainer.append(villagerDiv)
}

function renderAllVillagers(villagers) {
    villagers.forEach(renderVillager)
}



//Initial Fetch & Render 
fetch("http://localhost:3000/villagers/?_limit=5&_page=1")
    .then(res => res.json())
    .then(renderAllVillagers)


});