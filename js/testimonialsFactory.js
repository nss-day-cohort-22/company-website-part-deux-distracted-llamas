// data
const middleearthFact1 = {
    "name": "John, Jack, James, and Jeff",
    "from": "Austin, Texas",
    "package": "Middle-Earth",
    "testimonial": "We had a blast visiting Hobbiton. We ate first and second lunch in a Hobbit's home! Chase was awesome and he knew all sorts of secret tidbits about the sites we visited.",
    "image": "../img/testimonials/middleearth1.jpg",
    "button": "View Packages"
}

const middleearthFact2 = {
    "name": "Sarah and Frank",
    "from": "New York City",
    "package": "Middle-Earth",
    "testimonial": "It was Frank's dream to visit the sites of Middle-Earth so he was so happy that I surprised him with this trip as a birthday present! He was in heaven retracing Frodo's steps.",
    "image": "../img/testimonials/middleearth2.jpg",
    "button": "View Packages"
}

const narniaFact1 = {
    "name": "Annie, Jane, and Michelle",
    "from": "San Diego, California",
    "package": "Narnia",
    "testimonial": "We are all English majors and C.S. Lewis is one of our favorite authors. We knew that for spring break we wanted to visit some of the sites from the movie, but we didn't know where to begin! Thank you to Jason for guiding us through this incredible tour!",
    "image": "../img/testimonials/narnia1.jpg",
    "button": "View Packages"
}

const narniaFact2 = {
    "name": "LouEllen",
    "from": "London, UK",
    "package": "Narnia",
    "testimonial": "I never thought that I'd have the chance to do a solo tour of the Narnia locations but after a lot of saving, I was able to come from the UK and make it happen! FairyBnB was affordable, easy to register, and they were great at communicating throughout the whole process.",
    "image": "../img/testimonials/narnia2.jpg",
    "button": "View Packages"
}

const hogwartsFact1 = {
    "name": "The Stevens Family",
    "from": "Brighton, UK",
    "package": "Hogwarts",
    "testimonial": "We are the biggest Harry Potter fans out there (and Quidditch fans!) so we've made visiting Hogwarts our annual family holiday trip. Each year, we make sure to book with Kimmy because she is so patient with our hyper kids.",
    "image": "../img/testimonials/hogwarts1.jpg",
    "button": "View Packages"
}

const hogwartsFact2 = {
    "name": "The Petersen Family",
    "from": "Sydney, Australia",
    "package": "Hogwarts",
    "testimonial": "James and I have read every Harry Potter book (and the fan fiction, of course!) and we had a blast drinking Butterbeer and visiting the shops of Hogsmeade. FairyBnB made it that much easier for us to make the most out of our trip.",
    "image": "../img/testimonials/hogwarts2.jpg",
    "button": "View Packages"
}

const westerosFact1 = {
    "name": "Miriam",
    "from": "Denmark",
    "package": "Westeros",
    "testimonial": "Jenna was key in helping me visit the real King's Landing; I am still in disbelief that I was so lucky to go! While walking through the city, I could see where some of the most famous scenes from Game of Thrones happened. I could practically hear King Joffrey and Sansa arguing in the background.",
    "image": "../img/testimonials/westeros1.jpg",
    "button": "View Packages"
}

const westerosFact2 = {
    "name": "Shelly",
    "from": "Seattle, Washington",
    "package": "Westeros",
    "testimonial": "Daenerys Targaryen is by far my favorite character on Game of Thrones. Jenna made this visit to Essos incredible - she had all sorts of background knowledge on the area and what it was like to film. Can't wait to visit King's Landing next year!",
    "image": "../img/testimonials/westeros2.jpg",
    "button": "View Packages"
}

const westerosFact3 = {
    "name": "Landon",
    "from": "Miami, Florida",
    "package": "Westeros",
    "testimonial": "I've read all the Game of Thrones books, so it was crazy to visit Meereen in real life! I spent hours wandering through the maze of a city and my family is super jealous that I visited. We're ready to book our next trip with FairyBnB!",
    "image": "../img/testimonials/westeros3.jpg",
    "button": "View Packages"
}

// array
let package = []

// pushing to array
package.push(middleearthFact2)
package.push(middleearthFact1)
package.push(narniaFact1)
package.push(narniaFact2)
package.push(hogwartsFact1)
package.push(hogwartsFact2)
package.push(westerosFact1)
package.push(westerosFact2)
// package.push(westerosFact3)

// saving array
let packagesDatabase = {
    "packageArray": package
}

// JSON stringify
const packagesString = JSON.stringify(packagesDatabase)
localStorage.setItem("packagesDatabase", packagesString)

