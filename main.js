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
function getVillagers() {
fetch ('https://acnhapi.com/v1a/villagers')
.then(resp => resp.json())
.then((villagerData) => {  
    villagerData.forEach((villager) => {
    villagerContainer.append(renderVillagers(villager)) 
    })
})

// Append cards to DOM 

function renderVillagers(villager) {
    let card = document.createElement('li')
    card.innerHTML = `
         <img src="${villager.image_uri}">
         
     `
        card.setAttribute("data-id", villager.id)
        card.style.color = "#c48d3f"

    return card
   }

/*function render() {
    getVillagers()
}*/
    //Search through json? 

}
})
