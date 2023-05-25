const carouselImages = document.querySelectorAll('.carousel img');

function showImage(index) {
    carouselImages.forEach(image => image.classList.remove('active'));
}

const doar = document.getElementById('doar')

function showText() {
    doar.removeAttribute('class', 'txt-btnDoacoes')
    doar.setAttribute('class', 'txt-btnDoacoes1')
}

function hideText() {
    doar.removeAttribute('class', 'txt-btnDoacoes1')
    doar.setAttribute('class', 'txt-btnDoacoes')
}