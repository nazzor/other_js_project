const slides = [
    {
        id: 1,
        image: './assets/img/slide1.webp',
        link: 'https://caautoparts.com/pages/avery-auto-mats'
    },
    {
        id: 2,
        image: './assets/img/slide2.webp',
        link: 'https://caautoparts.com/collections/trailer-tires'
    },
    {
        id: 3,
        image: './assets/img/slide3.webp',
        link: 'https://caautoparts.com/collections/qaa'
    },
]

function generateSlide(slide){
    return `
        <a href="${slide.link}" target="_blank">
            <div class="carousel-item ${(slide.id == 1) ? 'active' : ''}">
                <img src="${slide.image}" class="d-block w-100" alt="Slide ${slide.id}">
            </div>
        </a>
    `
}

function generateSlides(slides){
    let html = '';
    for(let slide of slides){
        html += generateSlide(slide);
    }
    return html;
}

export function initSlider(div){
    div.innerHTML = `
        <div id="carouselExampleAutoplaying" class="carousel slide pt-5">
        <div class="carousel-inner">
            ${generateSlides(slides)}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    `
}