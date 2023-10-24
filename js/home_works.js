// HW 2
// Получаем родительский элемент и малый блок


const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

// // Получаем стартовую позицию малого блока
// let position = 0;
//
// // Функция для движения малого блока вправо
// function moveRight() {
//   // Увеличиваем позицию малого блока на 1 пиксель
//   position += 1;
//
//   // Изменяем позицию малого блока
//   childBlock.style.left = position + 'px';
//
//   // Проверяем, достиг ли малый блок правого края родительского блока
//   if (position < parentBlock.offsetWidth - childBlock.offsetWidth) {
//     // Если нет, вызываем функцию moveRight() через 10 миллисекунд
//     setTimeout(moveRight, 10);
//   }
// }
// function moveTop() {
//   // Увеличиваем позицию малого блока на 1 пиксель
//   position += 1;
//
//   // Изменяем позицию малого блока
//   childBlock.style.top = position + 'px';
//
//   // Проверяем, достиг ли малый блок правого края родительского блока
//   if (position < parentBlock.offsetHeight - childBlock.offsetHeight) {
//     // Если нет, вызываем функцию moveRight() через 10 миллисекунд
//     setTimeout(moveTop, 10);
//   }
// }
//
// // Вызываем функцию moveRight() для начала движения
// moveTop()
// if (position < parentBlock.offsetHeight - childBlock.offsetHeight)

let positionX = 0
let positionY = 0

const moveChild = () => {
      if (positionX <= 449 && positionY === 0) {
            positionX++
            childBlock.style.left = positionX + 'px';
            setTimeout(moveChild, 1)
      } else if (positionX === 450 && positionY <= 449) {
            positionY++
            childBlock.style.top = positionY + 'px';
            setTimeout(moveChild, 1)
      } else if (positionX <= 449 && positionY === 450) {
            positionX--;
            childBlock.style.left = positionX + 'px';
            setTimeout(moveChild, 1);
      } else if (positionX === 0 && positionY <= 449) {
            positionY--;
            childBlock.style.top = positionY + 'px';
            setTimeout(moveChild, 1);
      }
}
moveChild()

let startTime;
let elapsedTime = 0;
let timer;
let stopwatch = document.getElementById("stopwatch");
let hoursDisplay = document.getElementById("hours");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;

        let hours = Math.floor(elapsedTime / (60 * 60 * 1000));
        let minutes = Math.floor((elapsedTime / (60 * 1000)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);

        hoursDisplay.innerHTML = pad(hours);
        minutesDisplay.innerHTML = pad(minutes);
        secondsDisplay.innerHTML = pad(seconds);
        }, 10);
}
 function stopTimer() {
    clearInterval(timer);
}
 function resetTimer() {
    clearInterval(timer);
    hoursDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    secondsDisplay.innerHTML = "00";
    elapsedTime = 0;
}
 function pad(value) {
    return value < 10 ? "0" + value : value;
}
let startButton = document.getElementById("start");
startButton.addEventListener("click", startTimer);

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopTimer);

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetTimer);








// Получаем все слайды и кнопки переключения
let slides = document.querySelectorAll('.slide');
let buttons = document.querySelectorAll('.button');

// Устанавливаем индекс текущего слайда
let currentSlide = 0;

// Функция для переключения на следующий слайд
function nextSlide() {
  // Удаляем класс active у текущего слайда и кнопки
  slides[currentSlide].classList.remove('active');
  buttons[currentSlide].classList.remove('active');

  // Увеличиваем индекс текущего слайда
  currentSlide++;

  // Если индекс становится больше количества слайдов, переходим на первый слайд
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Добавляем класс active к текущему слайду и кнопке
  slides[currentSlide].classList.add('active');
  buttons[currentSlide].classList.add('active');
}

// Вызываем функцию nextSlide каждые 3 секунды
setInterval(nextSlide, 3000);



