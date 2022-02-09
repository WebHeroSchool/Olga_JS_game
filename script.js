const wrapperGame = document.querySelector(".wrapper-game");
// Выбор уровня сложности
const levelsGame = document.querySelectorAll('.level__item');
levelsGame.forEach((levelGame) => {
   levelGame.addEventListener('click', () => {
      levelsGame.forEach((level) => level.classList.remove('active'));
      levelGame.classList.add('active'); 
      // console.log(levelGame.textContent);
      // console.log(document.querySelector('.active').innerHTML);
   })    
})
// Возврат на окно-меню
function deleteCards() {
   document.querySelector('.wrapper').style.display = 'block';
   wrapperGame.style.display = 'none';
   wrapperGame.innerHTML = '';
   wrapperGame.className = 'wrapper-game';
}
// Создание карты
function createCard(number) {
   for(let i=0; i<number; i++) {
      const card = document.createElement ('div');
      wrapperGame.appendChild(card);
      card.className = 'flip-card';
      const cardInner = document.createElement ('div');
      card.appendChild(cardInner);
      cardInner.className = 'flip-card__inner';
      const cardFront = document.createElement ('div');
      cardInner.appendChild(cardFront);
      cardFront.className = 'flip-card__front';
      const cardBack = document.createElement ('div');
      cardInner.appendChild(cardBack);
      cardBack.className = 'flip-card__back';
 // Вскрытие карты
      card.addEventListener('click', () => {
         let number = Math.round(Math.random());
         cardInner.classList.toggle('rotate');
         if (number === 1) cardBack.classList.add('flip-card__back-bug');
         let cards = document.querySelectorAll('.flip-card');
         cards.forEach(card => card.addEventListener('click', deleteCards));
      });
   }
}
// У словия вывода игрового поля
function chooseLevel(level) {
   switch(level) {
   case 'Простой':
   createCard(3);
   break;
   case 'Средний':
   createCard(6);
   wrapperGame.classList.add('sex');
   break;
   case 'Сложный':
   createCard(10);
   wrapperGame.classList.add('ten');
   break;
   }
}
// Замена окна-меню на игровое поле при нажатии кнопки "начала игры"
const buttonPlay = document.getElementById('button');
buttonPlay.addEventListener("click", () => {
   document.querySelector('.wrapper').style.display = 'none';
   document.querySelector('.wrapper-game').style.display = 'flex';
   let level = document.querySelector('.active').innerText;
   chooseLevel(level);
});
