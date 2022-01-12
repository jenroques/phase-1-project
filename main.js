window.addEventListener('DOMContentLoaded', (e) => {
    const villagerContainer = document.getElementById('villager-list')
    const fullHeart = '♥'
    const emptyHeart = '♡'
    const backButton = document.getElementById('back')
    const forwardButton = document.getElementById('forward')
    let pageNum = 1
    

// Declare variables 


// Add Event Listeners 

    // Likes 

    // Add Notes ????

    // Favorite Button 




// Standalone Functions

    //Fetch 
fetch (`http://localhost:3000/villagers`)
.then(resp => resp.json())
.then((villagerData) => {  
   
    villagerData.forEach((villagers) => {
    villagerContainer.append(renderVillagers(villagers), document.createElement ("hr"))
     })
    })





function renderVillagers(villagers) {
    const villagerDiv = document.createElement("div")
    villagerDiv.innerHTML = `
        <img src="${villagers.image_uri}">
        <h3>${villagers["name"]["name-USen"]}</h3>
        <h4>${villagers.saying}</h4>
        <li class="like">Neighbor!<span class="like-glyph">&#x2661;</span></li>
    `
    villagerDiv.setAttribute("data-id", villagers.id)
    return villagerDiv
 }
})
