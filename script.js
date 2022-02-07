// Выбор уровня сложности
const levelsGame = document.querySelectorAll('.level__item');
levelsGame.forEach((levelGame) => {
    levelGame.addEventListener('click', () => {
      levelsGame.forEach((level) => level.classList.remove('active'));
      levelGame.classList.add('active'); 
    })    
 })

