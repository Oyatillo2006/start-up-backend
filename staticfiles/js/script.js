const bars = document.getElementById('bars');
const times = document.getElementById('times');
const barsNav = document.getElementById('bars-nav');

bars.onclick = () => {
    barsNav.style.display = 'flex';
};

times.onclick = () => {
    barsNav.style.display = 'none';
};

let links1 = document.getElementById('links1');
let links2 = document.getElementById('links2');
let links3 = document.getElementById('links3');
let links4 = document.getElementById('links4');
let links5 = document.getElementById('links5');
let links6 = document.getElementById('links6');
let links7 = document.getElementById('links7');

links1.onclick = () => {
    barsNav.style.display = 'none';
};

links2.onclick = () => {
    barsNav.style.display = 'none';
};

links3.onclick = () => {
    barsNav.style.display = 'none';
};

links4.onclick = () => {
    barsNav.style.display = 'none';
};

links5.onclick = () => {
    barsNav.style.display = 'none';
};

links6.onclick = () => {
    barsNav.style.display = 'none';
};

links7.onclick = () => {
    barsNav.style.display = 'none';
};

const all = document.getElementById('all');
const branding = document.getElementById('branding');
const design = document.getElementById('design');
const developmen = document.getElementById('developmen');
const strategy = document.getElementById('strategy');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
all.onclick = () => {
    image1.style.display = 'block';
    image2.style.display = 'block';
    image3.style.display = 'block';
    image4.style.display = 'block';
    image5.style.display = 'block';
    image6.style.display = 'block';
    image7.style.display = 'block';
    image8.style.display = 'block';
    image9.style.display = 'block';
}
branding.onclick = () => {
    image1.style.display = 'none';
    image2.style.display = 'block';
    image3.style.display = 'none';
    image4.style.display = 'none';
    image5.style.display = 'block';
    image6.style.display = 'none';
    image7.style.display = 'none';
    image8.style.display = 'none';
    image9.style.display = 'none';
}

design.onclick = () => {
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'block';
    image4.style.display = 'block';
    image5.style.display = 'none';
    image6.style.display = 'block';
    image7.style.display = 'none';
    image8.style.display = 'none';
    image9.style.display = 'none';
}

developmen.onclick = () => {
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'none';
    image4.style.display = 'none';
    image5.style.display = 'none';
    image6.style.display = 'none';
    image7.style.display = 'block';
    image8.style.display = 'none';
    image9.style.display = 'block';
}

strategy.onclick = () => {
    image1.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
    image4.style.display = 'none';
    image5.style.display = 'none';
    image6.style.display = 'none';
    image7.style.display = 'none';
    image8.style.display = 'block';
    image9.style.display = 'none';
}

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            960: {
                items: 4
            },
            1200: {
                items: 5
            }
        },
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
})