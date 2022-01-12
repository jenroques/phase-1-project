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
fetch (`http://localhost:3000/villagers/?_limit=30&_=${pageNum}`)
.then(resp => resp.json())
.then((villagerData) => {  
 
    villagerData.forEach((villagerData) => {
    villagerContainer.append(renderVillagers(villagerData), document.createElement ("br"))
     })
    })
    


backButton.addEventListener("click", () => {
    if(pageNum === 1){
        window.alert("At End of List")
    } else {
    pageNum -= 1
    fetch (`http://localhost:3000/villagers/?_limit=30&_=${pageNum}`)
    .then(resp => resp.json())
    .then((villagerData) => {
    villagerData.forEach((villagers) => {
        villagerContainer.append(renderVillagers(villagers), document.createElement("hr"))
     })  
   })
  }
})


forwardButton.addEventListener("click", () => {
    if(pageNum === 20){
        window.alert("At End of List")
    } else {
    pageNum += 1
    fetch (`http://localhost:3000/villagers/?_limit=30&_=${pageNum}`)
    .then(resp => resp.json())
    .then((villagerData) => {
    villagerData.forEach((villagers) => {
        villagerContainer.append(renderVillagers(villagers), document.createElement("hr"))
     })  
   })
  }
})


function renderVillagers(villagers) {
    const villagerSpan = document.createElement("span")
    villagerSpan.innerHTML = `
        <img src="${villagers.image_uri}" alt=${villagers.name} class="center">
        <h3>${villagers.name}</h3>
        <h4>${villagers.saying}</h4>
    `
    villagerSpan.setAttribute("data-id", villagers.id)
    return villagerSpan
 }
})
