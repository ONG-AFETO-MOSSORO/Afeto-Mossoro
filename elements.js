const carouselImages = document.querySelectorAll('.carousel img');

function showImage(index) {
    carouselImages.forEach(image => image.classList.remove('active'));
}
