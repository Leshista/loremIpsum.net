// Обрабатываем нажатие на пункт, меняем то, какой пункт активный
function activeHandler(selector) {
    document.querySelectorAll(selector).forEach((e) => {
        e.addEventListener('click', () => {
            document.querySelectorAll(selector).forEach((item) => {
                item.classList.contains('active')
                    ? item.classList.remove('active')
                    : null;
            });
            e.classList.toggle('active');
        });
    });
}
activeHandler('.header-navigation-list__item');
activeHandler('.system-select__item');

var slider = document.querySelector('.order-form-slider');
var output = document.querySelector('.order-form-slider-counter');
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
};

// Скролл к форме по нажатию на якоря, не оставляет мусора в url
document.querySelectorAll("[scroll='goScrollToForm']").forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('goToForm').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
