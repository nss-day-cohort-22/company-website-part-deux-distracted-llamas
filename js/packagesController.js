const AdventureDatabase = JSON.parse(localStorage.getItem("adventureData"))
const advElement = document.getElementsByClassName("adventure")[0]
const mapElement = document.getElementsByClassName("maps")[0]

// Loop over keys in the database
for (let key in AdventureDatabase) {
    // Get a reference to the array of objects
    const currentAdventure = AdventureDatabase[key]

    // Loop over the array of objects
    for (let i = 0; i < currentAdventure.length; i++) {
        // Current item in the array
        let item = currentAdventure[i]

        mapElement.innerHTML += `
        <div class="chooseMap">
        <a href="#${item.title}"
        <picture class="map">
            <img src="${item.map}">
        </picture>
            <section class="title">
                <span class="titleBlock">${item.title}</span>
             </section>
        </a>
        </div>

        `
    }

    for (let i = 0; i < currentAdventure.length; i++) {
        // Current item in the array
        let item = currentAdventure[i]

        // Build a string to insert into the DOM
        advElement.innerHTML += `
        <article class="${key}">
        
        <div class="wrapper">
             <section class="package" id="${item.title}">
                <picture>
                    <img src="${item.photo}">
                </picture>
                <section class="packageInfo">
                <h1 class="advTitle">${item.title}</h1>
                <h4>Guide: ${item.guide}</h4>
                <h4>Trip Length: ${item.duration}</h4>
                <ul class="highlights">
                    <li>${item.highlight1}</li>
                    <li>${item.highlight2}</li>
                    <li>${item.highlight3}</li>
                    <li>${item.highlight4}</li>
                </ul>
                </section>
            </section>
        </div>    
        </article>
        `
    }
}