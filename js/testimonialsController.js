const packagesParse = JSON.parse(localStorage.getItem("packagesDatabase"))
const packagesEl = document.getElementsByClassName("testimonials")[0]

for (var i = 0; i < packagesParse.packageArray.length; i++) {
        var item = packagesParse.packageArray[i];  
        
        packagesEl.innerHTML += `
        <div class="card">   
            <img class="image" src=${item.image} width="500px">
            <div class="bottom-right">   
                <h2>${item.package} Package</h2>
            </div>
            <div class="textMain">
                <h3>${item.name}</h3>
                <section>
                    <h5>${item.from}</h5>
                </section>
                <section class="testimonialText">
                    <h3><em>"${item.testimonial}"</em></h3>
                </section>
                <button class="button"><span>${item.button}</span></button>
            </div>
        </div>
        `
    }
