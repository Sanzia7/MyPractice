//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные в массив, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода почты. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.
const formElem = document.querySelector(".workers_form");
let workesrArr = [];

const cardsRender = () => {
  
  const cardsContainer = document.querySelector('.cards_container');
  cardsContainer.innerText = "";
  workesrArr.forEach(({firstname, lastname, age}) => {
    const container = document.createElement('div');
    const firstnameElem = document.createElement("p");
    const lastnameElem = document.createElement("p");
    const ageElem = document.createElement("p");

    firstnameElem.innerText = `First name: ${firstname}`;
    lastnameElem.innerText = `Last name: ${lastname}`;
    ageElem.innerText = `Age: ${age}`;

    container.append(firstnameElem, lastnameElem, ageElem);
    cardsContainer.append(container);
  })
}

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  const { firstname, lastname, age } = event.target; //вместо this (потому что в стрелочной функции this не используют и также ее  стрелочную ф-ю не вызывают вне  самой стрелочной функции!)
  workesrArr.push({
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value,
  });
  firstname.value = "";
  lastname.value = "";
  age.value = "";

  console.log(workesrArr);
  cardsRender();
});




