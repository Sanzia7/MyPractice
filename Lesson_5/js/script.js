//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные в массив, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода почты. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.

const formElem = document.querySelector(".workers_form");
let workersArr = [];

const cardsRender = () => {
  const cardsContainer = document.querySelector(".cards_container");
  cardsContainer.innerText = "";

  workersArr.forEach(
    ({
      firstname,
      lastname,
      age,
      email,
      avatar,
      rate,
      days,
      // salary,
      progress,
    }) => {
      const container = document.createElement("div");
      const firstnameElem = document.createElement("p");
      const lastnameElem = document.createElement("p");
      const ageElem = document.createElement("p");
      const emailElem = document.createElement("a");
      const rateElem = document.createElement("p");
      const daysElem = document.createElement("p");
      const salaryElem = document.createElement("p");
      const avatarElem = document.createElement("img");
      const progressContainer = document.createElement("div");
      const progressLine = document.createElement("div");
      const progressValue = document.createElement("p");

      firstnameElem.innerText = `First name: ${firstname}`;
      lastnameElem.innerText = `Last name: ${lastname}`;
      ageElem.innerText = `Age: ${age}`;
      emailElem.innerText = `E-mail: ${email}`;
      emailElem.setAttribute("href", `mailto:${email}`);
      avatarElem.setAttribute("src", avatar);
      rateElem.innerText = `Rate: ${rate}`;
      daysElem.innerText = `Days: ${days}`;
      salaryElem.innerText = `Salary: ${rate * days}`;

      progressValue.innerText = progress + "%";

      container.classList.add("container");
      salaryElem.classList.add("Euro");
      progressContainer.classList.add("progress-container");
      progressLine.classList.add("progress-line");
      progressLine.style.width = progress + "%";
      progressValue.classList.add("progress-value");

      progressContainer.append(progressLine, progressValue);

      container.append(
        firstnameElem,
        lastnameElem,
        ageElem,
        avatarElem,
				emailElem,
				rateElem,
				daysElem,
        salaryElem,
        progressContainer
      );
      cardsContainer.append(container);
    }
  );
};

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    firstname,
    lastname,
    age,
    email,
    avatar,
    rate,
    days,
    salary,
    progress,
  } = event.target;
  workersArr.push({
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value,
    avatar: avatar.value,
    email: email.value,
    rate: rate.value,
    days: days.value,
    salary: salary.value,
    progress: progress.value,
  });
  firstname.value = "";
  lastname.value = "";
  age.value = "";
  avatar.value = "";
  rate.value = "";
  days.value = "";
  salary.value = "";
  progress.value = "";

  cardsRender();
});

//Вот два принципиальных отличия стрелочной функции от обычной функции:1)никогда не используют this; 2) нельзя вызывать до её объявления (только после).
