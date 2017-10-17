// Guides entry objects for database

const kimmy = {
    "name": "Kimmy Bird",
    "age": "32",
    "location": "Hogwarts",
    "content": "Lorem ipsum dolor sit amet, quis proin luctus purus, lacus conubia. Morbi ac, vestibulum dui molestie a malesuada, congue eleifend molestie vestibulum quis, a a commodo amet fringilla, dolor at. In pede mi, magna nec arcu dapibus curabitur morbi. Dis amet varius magna pellentesque, id ante viverra quam massa eget, egestas faucibus voluptatem, suscipit vitae sapiente. Per luctus pede in id, vulputate sed nec vel, sapien fermentum vitae, tincidunt est mollis, non suspendisse ac nullam quisque. Ornare vel.",
    "image": `<img src="img/guides/kimmy.jpg" alt="Guides" width="auto" height="250">`
}   

const chase = {
    "name": "Chase Steely",
    "age": "34",
    "location": "Middle-earth",
    "content": "Lorem ipsum dolor sit amet, quis proin luctus purus, lacus conubia. Morbi ac, vestibulum dui molestie a malesuada, congue eleifend molestie vestibulum quis, a a commodo amet fringilla, dolor at. In pede mi, magna nec arcu dapibus curabitur morbi. Dis amet varius magna pellentesque, id ante viverra quam massa eget, egestas faucibus voluptatem, suscipit vitae sapiente. Per luctus pede in id, vulputate sed nec vel, sapien fermentum vitae, tincidunt est mollis, non suspendisse ac nullam quisque. Ornare vel.",
    "image": `<img src="img/guides/chaseScuba.jpg" alt="Guides" width="auto" height="250">`
}

const jenna = {
    "name": "Jenna Solis",
    "age": "31",
    "location": "Westeros",
    "content": "Lorem ipsum dolor sit amet, quis proin luctus purus, lacus conubia. Morbi ac, vestibulum dui molestie a malesuada, congue eleifend molestie vestibulum quis, a a commodo amet fringilla, dolor at. In pede mi, magna nec arcu dapibus curabitur morbi. Dis amet varius magna pellentesque, id ante viverra quam massa eget, egestas faucibus voluptatem, suscipit vitae sapiente. Per luctus pede in id, vulputate sed nec vel, sapien fermentum vitae, tincidunt est mollis, non suspendisse ac nullam quisque. Ornare vel.",
    "image": `<img src="/img/guides/jenna.jpg" alt="Guides" width="auto" height="250">`
}

const jason = {
    "name": "Jason Figuroa",
    "age": "34",
    "location": "Narnia",
    "content": "Lorem ipsum dolor sit amet, quis proin luctus purus, lacus conubia. Morbi ac, vestibulum dui molestie a malesuada, congue eleifend molestie vestibulum quis, a a commodo amet fringilla, dolor at. In pede mi, magna nec arcu dapibus curabitur morbi. Dis amet varius magna pellentesque, id ante viverra quam massa eget, egestas faucibus voluptatem, suscipit vitae sapiente. Per luctus pede in id, vulputate sed nec vel, sapien fermentum vitae, tincidunt est mollis, non suspendisse ac nullam quisque.",
    "image": `<img src="img/guides/jason.jpg" alt="Guides" width="auto" height="250">`
}

// Create guides object database

const guidesData = []

// push all entries into guides database

guidesData.push(kimmy)
guidesData.push(chase)
guidesData.push(jenna)
guidesData.push(jason)

// place guidesData insto local storage

const guidesDataString = JSON.stringify(guidesData)
localStorage.setItem("guidesData", guidesDataString);

