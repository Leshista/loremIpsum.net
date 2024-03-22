// Обрабатываем нажатие на пункт в навигации, меняем то, какой пункт активный
document.querySelectorAll('.header-navigation-list__item').forEach((e) => {
    e.addEventListener('click', () => {
        document
            .querySelectorAll('.header-navigation-list__item')
            .forEach((item) => {
                item.classList.contains('active')
                    ? item.classList.remove('active')
                    : null;
            });
        e.classList.toggle('active');
    });
});

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
