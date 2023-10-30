export function getCarParts({page}) {
    const api = `https://myfakeapi.com/api/cars/${(page == undefined) ? '' : `&page=${page}`}`

    return fetch(api)
    .then(response => response.json())
    .then(data => data.cars)
    
}

export function generateCarParts(carParts, limit){
    console.log(carParts)
    let html = '';
    for (let carPart of carParts){
        html +=`
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${cars.car}</h5>
            <p class="card-text">${cars.car_model, cars.car_model_year}</p>
            <a href="car-parts.html?id=${cars.id}" class="btn btn-primary">Details</a>
            </div>
        </div>
        `
    }
    return html;
}