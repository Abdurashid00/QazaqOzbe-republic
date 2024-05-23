window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 20) {
        header.classList.add('black-bg');
    } else {
        header.classList.remove('black-bg');
    }
});
//when user scroll header, the function works and bg-color will change


const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.product-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const itemWidth = items[0].clientWidth + 20; // ширина карточки + отступ
const itemCount = items.length;
const maxScrollIndex = itemCount - 5; // Учитывая, что мы останавливаемся на карточке с индексом 14

let currentIndex = 0;

// Начальная установка на первый реальный элемент
scrollToIndex(currentIndex);

// Обновление состояния кнопок
updateButtonsState();

// Функция для перемещения к определенному индексу
function scrollToIndex(index) {
    if (index < 0) {
        index = 0;
    } else if (index > maxScrollIndex) {
        index = maxScrollIndex;
    }
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${itemWidth * index}px)`;
    currentIndex = index;
}

// Функция для обновления состояния кнопок
function updateButtonsState() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxScrollIndex;
}

// Обработчики событий для кнопок "вперед" и "назад"
nextBtn.addEventListener('click', () => {
    if (currentIndex < maxScrollIndex) {
        scrollToIndex(currentIndex + 1);
        updateButtonsState();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        scrollToIndex(currentIndex - 1);
        updateButtonsState();
    }
});
