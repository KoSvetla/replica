function showGallery(country) {
    // Скрываем все галереи
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.classList.remove('active');
    });

    // Показываем только выбранную галерею
    const selectedGallery = document.getElementById(country);
    if (selectedGallery) {
        selectedGallery.classList.add('active');
    }
}

function toggleButton(activeButton) {
    // Получаем все кнопки
    const buttons = document.querySelectorAll('.reproduction-btn');

    // Убираем активный стиль у всех кнопок
    buttons.forEach(button => {
        button.classList.remove('activebtn');
    });

    // Применяем активный стиль к нажатой кнопке
    activeButton.classList.add('activebtn');
}

