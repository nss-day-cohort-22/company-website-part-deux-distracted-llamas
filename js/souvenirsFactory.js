// harry potter factory

const wand = {
    "name": "Wand",
    "price": "$50",
    "description": "'Accio!' 'Periculum!' Practice your wizzarding spells with your own wand!",
    "image": "../img/products/wand.png"
}

const butterbeer = {
    "name": "Butterbeer",
    "price": "$25",
    "description": "The must-have beverage for all your Harry Potter viewing parties.",
    "image": "../img/products/butterbeer.jpg"
}

const quidditch = {
    "name": "Quidditch Pack",
    "price": "$350",
    "description": "Comes with everything you need to get started with your own backyard Quidditch game!",
    "image": "../img/products/quidditch.jpg"
}

const sortingHat = {
    "name": "Sorting Hat",
    "price": "$75",
    "description": "Are you in Hufflepuff, Gryffindor, Ravenclaw, or Slytherin? Find out with your own sorting hat!",
    "image": "../img/products/hat.jpg"
}

const invisibilityCloak = {
    "name": "Invisibility Cloak",
    "price": "$700",
    "description": "This really works. Buyer beware.",
    "image": "../img/products/cloak.jpg"
}

// narnia factory

const lion = {
    "name": "Stuffed Animal Aslan",
    "price": "$25",
    "description": "Aslan would be too big to fit in your home – here’s a smaller version.",
    "image": "../img/products/lion.jpg"
}

const shield = {
    "name": "Shield",
    "price": "$600",
    "description": "Practice your shield skills!",
    "image": "../img/products/shield.jpg"
}

const wardrobe = {
    "name": "Wardrobe",
    "price": "$3000",
    "description": "Keep your kids’ imagination alive with this functional piece.",
    "image": "../img/products/wardrobe.jpg"
}

const tote = {
    "name": "Totebag",
    "price": "$25",
    "description": "Carry your favorite C.S. Lewis books in this bag.",
    "image": "../img/products/tote.jpg"
}

const print = {
    "name": "Print",
    "price": "$15",
    "description": "Display this watercolor of Narnia in a child’s nursery.",
    "image": "../img/products/print.png"
}

// westeros factory

const eggs = {
    "name": "Viserion and Rhaegal dragon eggs",
    "price": "$75",
    "description": "Don't worry, you don't need to get covered in soot to get these eggs.",
    "image": "../img/products/eggs.png"
}

const cubs = {
    "name": "Direcub Bundle",
    "price": "$30",
    "description": "Keep safe with these cubs by your side.",
    "image": "../img/products/direcub1.jpg"
}

const mug = {
    "name": "Westeros map beer mug",
    "price": "$25",
    "description": "Have this handy when you watch GOT so you can refer to where each scene happens!",
    "image": "../img/products/gotmug.jpg"
}

const sword = {
    "name": "Jon Snow's Longclaw sword",
    "price": "$195",
    "description": "Perfect for your Jon Snow Halloween costume",
    "image": "../img/products/jonsnow.jpg"
}

const shirt = {
    "name": "Jon Snow T-Shirts",
    "price": "$20",
    "description": "Want to always have GOT on your mind? Here's a little T-shirt.",
    "image": "../img/products/gotshirt.jpg"
}

// array
let souvenirs = []

// pushing to array
souvenirs.push(wand)
souvenirs.push(butterbeer)
souvenirs.push(quidditch)
souvenirs.push(sortingHat)
souvenirs.push(invisibilityCloak)
souvenirs.push(lion)
souvenirs.push(shield)
souvenirs.push(wardrobe)
souvenirs.push(tote)
souvenirs.push(print)
souvenirs.push(eggs)
souvenirs.push(cubs)
souvenirs.push(mug)
souvenirs.push(sword)
souvenirs.push(shirt)

// saving array
let souvenirsDatabase = {
    "souvenirsArray": souvenirs
}

// JSON stringify
const souvenirsString = JSON.stringify(souvenirsDatabase)
localStorage.setItem("souvenirsDatabase", souvenirsString)