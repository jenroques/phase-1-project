window.addEventListener('DOMContentLoaded', (e) => {
    const villagerContainer = document.getElementById('villager-container')
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
fetch ('https://acnhapi.com/v1a/')
.then(resp => resp.json())
.then((villagers) => {
    villagers.forEach((villager))
})



function renderVillager(villager) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
     <img src="${villager.image_uri}">
     <div class="content">
        <h3>${villager.name-USen}</h3>
        <h4>${villager.personality}
        <p>${villager.saying}</p> 
    </div>`

    document.querySelector('#villager-list').append(card)
}

function render() {
    villagers.forEach(villager => renderVillager(villager))
    }
    render()
}

    //Search through json? 









































})