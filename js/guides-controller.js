// Grab history database from local stoage and place into object called guidesEntries
const guidesEntries = JSON.parse(localStorage.getItem("guidesData"))

// create placeholder for selected dom element
const guidesElement = document.getElementsByClassName("gInfo")[0]

//iterate over every key in the guides database and push into the DOM
for (let i = 0; i < guidesEntries.length; i++) {
    var element = guidesEntries[i];
    
    guidesElement.innerHTML += `
    <article class="guides-entry">
    <section class="content" id="${element.location}">
    <p>${element.image}<p>
    <div class="text">
    <h2 class="name">${element.name}</h2>
    <p class="age">Age: ${element.age}</p>
    <p class="location">Location: ${element.location}</p>
    <p class="content">${element.content}</p>
    </div>
    </section>
    </article>`
}
