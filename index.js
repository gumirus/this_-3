const footballer = {
  fullName: "Cristiano Ronaldo",
  attack() {// ошибка №1 исправлена: Функция attack() стрелочных функций (нет своего this).
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal(sound) {
    console.log(`${this.fullName} забил гол! Вот это да!`);
    this.celebrate(sound);
  },
  celebrate(sound) {
    console.log(sound);
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
    );
  }
};
const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack.bind(footballer)();//ошибка №2 исправлена: Функция attack() необходимо исправить при помощи bind()
score.call(footballer,"Сиииии");//ошибка №3 исправлена: Функция score() - при помощи call()
substitute.apply(footballer,["Paulo Dibala"]);// ошибка №4 исправлена: Функция substitute() - при помощи apply().