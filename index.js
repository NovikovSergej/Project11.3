/*
    ДЗ 11.3. Отримання випадкового зображення

    Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
    Вивести зображення, отримане випадковим чином (Math.random)
*/

function getRandomImagePath() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    return `images/${randomNumber}.jpg`;
}

const bodyEl = document.querySelector("body");

const imageEl = document.createElement('img');
imageEl.alt = 'Випадкове зображення';
imageEl.width = 300;
imageEl.src = getRandomImagePath();
bodyEl.appendChild(imageEl);

const buttonEl = document.createElement('button');
buttonEl.textContent = 'Натисни кнопку';
bodyEl.appendChild(buttonEl);

buttonEl.addEventListener('click', () => {
    imageEl.src = getRandomImagePath();
});