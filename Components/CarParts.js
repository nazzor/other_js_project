export function getCarParts(page) {
    const api = `https://myfakeapi.com/api/cars/${(page == undefined) ? '' : `${page}`}`

    return fetch(api)
    .then(response => response.json())
    .then(data => data)
    
}

export function generateCarParts(carParts, limit){
    let cars = (limit == undefined) ? carParts : carParts.slice('0', `${limit}`)
    
    let html = '<div class="row">';

    for (let carPart of cars){
        html +=`
        <div class="col-3">
            <div class="card ml-5 mb-5 mt-5" style="width: 18rem;">
                <img src="./assets/img/car_tyres.webp" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${carPart.car}</h5>
                <p class="card-text">${carPart.car_model, carPart.car_model_year}</p>
                <a href="car-parts.html?id=${carPart.id}" class="btn btn-primary">${carPart.price}</a>
                </div>
            </div>
        </div>
        `
    }
    html += `
    
    </div>`
    return html;
}