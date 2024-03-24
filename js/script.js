// Обрабатываем нажатие на пункт, меняем то, какой пункт активный
const activeHandler = (selector) => {
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
};

// Показываем значение слайдера над ним
activeHandler('.header-navigation-list__item');
activeHandler('.system-select__item');

const slider = document.querySelector('.order-form-slider');
const output = document.querySelector('.order-form-slider-counter');
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
};

// Скролл к форме по нажатию на якоря, не оставляет мусора в url
document.querySelectorAll("[scroll='goScrollToForm']").forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('goToForm').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
