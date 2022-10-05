
const dateDay = document.querySelector('.date-day');
const date = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const digitalClock = document.querySelector('.digital-clock');
const arrowHours = document.querySelector('.clock-hours__arrow');
const arrowMinutes = document.querySelector('.clock-minutes__arrow');
const arrowSeconds = document.querySelector('.clock-seconds__arrow');

const namesOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];



setInterval(() => {
    const currentDate = new Date();
    const getDay = currentDate.getDay()
    const getMonth = currentDate.getMonth();

    dateDay.textContent = namesOfDay[getDay];
    date.textContent = currentDate.getDate();
    month.textContent = namesOfMonth[getMonth];
    year.textContent = currentDate.getFullYear();

    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    digitalClock.textContent = `Поточний час: ${hours} : ${minutes} : ${seconds} `;

    const forHours = currentDate.getHours() * 30 + currentDate.getMinutes() * (30 / 60);
    const forMinutes = currentDate.getMinutes() * 6;
    const forSeconds = currentDate.getSeconds() * 6;



    arrowHours.style.transform = `rotate(${forHours}deg)`
    arrowMinutes.style.transform = `rotate(${forMinutes}deg)`
    arrowSeconds.style.transform = `rotate(${forSeconds}deg)`

 }, 1000)

// const form = document.querySelector('form');
// form.addEventListener('input', onForm)
// const obj = JSON.parse(localStorage.getItem('obj')) ?? {};
// //  false
// //    undefined
// form.elements.email.value = obj.email ?? '';
// form.elements.message.value = obj.message ?? '';

// function onForm(evt) {
//     // console.log(evt.target.value);
//     // console.dir(evt.target.name);
//     obj[evt.target.name] = evt.target.value
//     localStorage.setItem('obj', JSON.stringify(obj))
//     console.log(obj);
// }


// setInterval(() => {
//     console.log(new Date())
// }, 5000)