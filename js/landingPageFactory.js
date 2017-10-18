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
	}
};

// landingData.string
// localStorage.setItem(landingData);

// packagesString = 
localStorage.setItem("landingData", JSON.stringify(landingData));