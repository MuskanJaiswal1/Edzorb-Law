// home static-caraousel
function openModal(imageNumber) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');

    modalImage.src = 'images/card' + imageNumber + '.jpeg';

    // Display the modal
    modal.style.width = '100%';
    modal.style.height = 'auto';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    // modal.style.alignItems = 'center';
}
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});


// -------caraousels------------
var currentSlide = 0;
    var totalSlides = document.querySelectorAll('.carousel img').length;
    var indicatorsContainer = document.querySelector('.indicators');

    // Create indicators
    for (var i = 0; i < totalSlides; i++) {
        var indicator = document.createElement('li');
        indicator.className = 'indicator';
        indicator.setAttribute('data-slide', i);
        indicator.addEventListener('click', function () {
            currentSlide = parseInt(this.getAttribute('data-slide'));
            updateCarouselPosition();
            updateIndicators();
        });
        indicatorsContainer.appendChild(indicator);
    }

    function updateCarouselPosition() {
        var carousel = document.querySelector('.carousel');
        var slideWidth = document.querySelector('.carousel-container').offsetWidth;

        carousel.style.transform = 'translateX(' + (-currentSlide * slideWidth) + 'px)';
    }

    function updateIndicators() {
        var indicators = document.querySelectorAll('.indicator');
        indicators.forEach(function (indicator, index) {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    // -----------download-pdf----------
    function toggleContent1() {
        var content = document.getElementById('download-pdf1');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
    function toggleContent2() {
        var content = document.getElementById('download-pdf2');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
