const middleEarth = {
    "map": "img/middleEarthMap.jpg",
    "title": "MIDDLE-EARTH",
    "photo": "img/hobbiton.jpg",
    "guide": "Chase Steely",
    "highlight1": "Stay the night in a Hobbit Hole overlooking the Shire and drink a pint (or two) at the Green Dragon.",
    "highlight2": "Ride horses in Rohan located in the great vale between the Misty Mountains and the White Mountains.",
    "highlight3": "Practice archery with the Elves of Rivendell.",
    "highlight4": "Visit the Hot Springs of Mordor.",
    "duration": "14 Days - Price: $20,000"
}

const hogwarts = {
    "map": "img/hogwartsMap.jpg",
    "title": "HOGWARTS",
    "photo": "img/hogCastle.jpg",
    "guide": "Kimmy Bird",
    "highlight1": "Go on a shopping spree in Diagon Alley.",
    "highlight2": "Everflowing Butter Beer.",
    "highlight3": "Wear the enchanted sorting hat that once belonged to Godric Gryffindor to find out which house you belong to.",
    "highlight4": "Play Quidditch.",
    "duration": "4 Days - Price: $7,000"
}

const thrones = {
    "map": "img/thronesMap.jpg",
    "title": "WESTEROS",
    "photo": "img/westeros.jpg",
    "guide": "Jenna Solis",
    "highlight1": "Sit on the Iron Throne.",
    "highlight2": "Climb the Wall with the Night's Watch.",
    "highlight3": "Avoid ALL Weddings.",
    "highlight4": "Ride a dragon ... yell Dracarys if you're feeling brave.",
    "duration": "7 Days - Price: $12,000"
}

const narnia = {
    "map": "img/NarniaMap.jpg",
    "title": "NARNIA",
    "photo": "img/narnia.jpg",
    "guide": "Jason Figueroa",
    "highlight1": "All you can eat Turkish Delight.",
    "highlight2": "Take a selfie with Aslan.",
    "highlight3": "Sail the Siver Sea aboard the Dawn Treader.",
    "highlight4": "Camp in the Wood Between the Worlds.",
    "duration": "10 Days - Price: $15,000"
}

let adventures = []

adventures.push(middleEarth, hogwarts, thrones, narnia)

let AdventureData = {
    "adventures": adventures
  }

  const adventureDataString = JSON.stringify(AdventureData)
  localStorage.setItem("adventureData", adventureDataString)