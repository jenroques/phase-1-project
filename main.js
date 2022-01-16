
//DO NOT USE - BROKEN CODE - FOR REFERENCE ONLY




/*window.addEventListener('DOMContentLoaded', (e) => {
    const villagerContainer = document.getElementById('villager-list');
    const neighborForm = document.getElementById('neighbor-form');
    const backButton = document.getElementById('back');
    const forwardButton = document.getElementById('forward');
    let currentPage = 1
    const disabled = '♡'
    const favorite = '♥'

// Declare variables 


// Add Event Listeners 
    forwardButton.addEventListener("click", () => {
        console.log("click")
    })


     neighborForm.addEventListener("submit", event => {
      e.preventDefault()
      console.log("Submitted")
    })

    // Add Notes ????

    // Favorite Button 




// Standalone Functions

    function getMoreVillagers(page) {
        fetch(`http://localhost:3000/villagers/?_limit=5&_page=${page}`)
            .then(resp => resp.json())
            .then(renderVillagers)
    }


   // Rendering to DOM Fetch : 
    function getAllVillagers(currentPage)
    fetch (`http://localhost:3000/villagers/?_limit=5&_page=$`)
        .then(resp => resp.json())
        .then((villagerData) => {  
   
        villagerData.forEach((villagers) => {
        villagerContainer.append(renderVillagers(villagers), document.createElement ("hr"))
     });
    });

// Build Villager Information to Append via DOM Fetch: 

    function renderVillagers(villagers) {
        const villagerDiv = document.createElement("div")
        villagerDiv.innerHTML = `
       <!-- <img src="${villagers.image_uri}">
        <h3>${villagers["name"]["name-USen"]}</h3>
        <h4>${villagers.saying}</h4>
        <footer>
        <ul>
          <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
        </ul>
        </footer>
        
    `
     villagerDiv.setAttribute("data-id", villagers.id)
     return villagerDiv
    };




}) 
*/