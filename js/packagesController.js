const AdventureDatabase = JSON.parse(localStorage.getItem("adventureData"));
const advElement = document.getElementsByClassName("adventure")[0];
const mapElement = document.getElementsByClassName("maps")[0];

// Loop over keys in the database
for (let key in AdventureDatabase) {
    // Get a reference to the array of objects
    const currentAdventure = AdventureDatabase[key]

    // Loop over the array of objects
    for (let i = 0; i < currentAdventure.length; i++) {
        // Current item in the array
        let item = currentAdventure[i]

        mapElement.innerHTML += `
        <div class="chooseMap" id="top">
        <a href="#${item.title}">
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
        <article class="${key}" id="${item.title}">
        <div>
            <br>
            <br>
            <br>
            <br>
            <br>
                    
          
        </div
        <div class="wrapper">
             <section class="package">
             </div>
                <picture>
                    <img src="${item.photo}" class="packagePhoto">
                </picture>
                <div class="overlay">
                <section class="packageInfo">
                <h1 class="advTitle ${item.title}">${item.title}</h1>
                <h6>Guide: ${item.guide}</h6>
                <h6>Trip Length: ${item.duration}</h6>
                <ul class="highlights">
                    <li>${item.highlight1}</li>
                    <li>${item.highlight2}</li>
                    <li>${item.highlight3}</li>
                    <li>${item.highlight4}</li>
                </ul>
                <div class="btn">
               <a href="/form.html" target="_blank"><button class="button"><span>REGISTER</span></button></a>
                <a href="#top" ><button class="button"><span>BACK TO TOP</span></button></a>
                </div>
                </section>
                </div>
            </section>
        </div>    
        </article>
        <hr>
        `
    }
}



