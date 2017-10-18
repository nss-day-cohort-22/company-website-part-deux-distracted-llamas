let landingData = {
	"testimonials": {
		"name": "John, Jack, James, and Jeff",
		"from": "Austin, Texas",
		"package": "Middle-Earth",
		"testimonial": "We had a blast visiting Hobbiton. We ate first and second lunch in a Hobbit's home! Chase was awesome and he knew all sorts of secret tidbits about the sites we visited.",
		"image": "img/testimonials/middleearth1.jpg",
		"button": "View Packages"
	},
	"guides": {
		"name": "Chase Steely",
		"age": "34",
		"location": "Middle-earth",
		"content": "Lorem ipsum dolor sit amet, quis proin luctus purus, lacus conubia. Morbi ac, vestibulum dui molestie a malesuada, congue eleifend molestie vestibulum quis, a a commodo amet fringilla, dolor at. In pede mi, magna nec arcu dapibus curabitur morbi. Dis amet varius magna pellentesque, id ante viverra quam massa eget, egestas faucibus voluptatem, suscipit vitae sapiente. Per luctus pede in id, vulputate sed nec vel, sapien fermentum vitae, tincidunt est mollis, non suspendisse ac nullam quisque. Ornare vel.",
		"image": "img/guides/chaseScuba.jpg"
	},
	"packages": {
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
};

// landingData.string
// localStorage.setItem(landingData);

// packagesString = 
localStorage.setItem("landingData", JSON.stringify(landingData));