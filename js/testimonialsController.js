const packagesParse = JSON.parse(localStorage.getItem("packagesDatabase"))
const packagesEl = document.getElementsByClassName("testimonials")[0]

for (var i = 0; i < packagesParse.packageArray.length; i++) {
        var item = packagesParse.packageArray[i];  
        
        packagesEl.innerHTML += `
        <section class="card">
        <img class="image" src=${item.image} width="500px">
        <h3>Name: ${item.name}</h3>
        <h3>From: ${item.from}</h3>
        <section class="bottom-right"><h3>${item.package} Package</h3></section>
        <section class="testimonialText"><h3><em>"${item.testimonial}"</em></h3></section>
        <button class="button"><span>${item.button}</span></button>
        </section>
        `
    }
