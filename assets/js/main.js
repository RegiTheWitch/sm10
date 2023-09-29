let inputName = document.querySelector('.inputName')
let inputDate = document.querySelector('.inputDate')
let inputSubmit = document.querySelector('.inputSubmit')
let error1 = document.querySelector('.error1')
let error2 = document.querySelector('.error2')
let link = document.querySelector('.link')

let isErrorName = true;
let isErrorDate = true;

function validateInputName() {
    let isError = false;
    if (inputName.value == ''){
        inputName.style.border = '2px solid red'
        error1.innerHTML = 'Введите имя, пожалуйста<br><br>'
        isError = true;
    } else if (inputName.value.length < 3) {
            inputName.style.border = '2px solid red'
            error1.innerHTML = 'Имя должно содержать не менее 2 символов<br><br>'
            isError = true;
    }else {
        inputName.style.border = '2px solid green'
        error1.innerHTML = ''
    
    }
    return isError;
}

function validateInputDate() {
    let isError = false;
    if (inputDate.value == ''){
        inputDate.style.border = '2px solid red'
        error2.innerHTML = 'Введите год рождения, пожалуйста<br><br>'
        isError = true;
    }else if (!+inputDate.value) {
        inputDate.style.border = '2px solid red'
        error2.innerHTML = 'ВВедите число<br><br>'
        isError = true;
    }else if(inputDate.value.length != 4) {
        inputDate.style.border = '2px solid red'
        error2.innerHTML = 'Необходимо ввести 4 символа<br><br>'
        isError = true;
    } else if ((new Date().getFullYear() - +inputDate.value) < 18) {
        inputDate.style.border = '2px solid red'
        error2.innerHTML = 'Вам нет 18! Покиньте сайт, пожалуйста<br>'
        isError = true;
    } else {
        inputDate.style.border = '2px solid green'
        error2.innerHTML = ''
    }

    return isError;
}

const form = document.querySelector('.form');

form.addEventListener('input', (e) => {
    if (e.target.name == 'inputName') {
        isErrorName = validateInputName();
    } else {
        isErrorDate = validateInputDate();
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isErrorName === false && isErrorDate === false) {
        form.reset();
        isErrorName = true;
        isErrorDate = true;
        link.innerHTML = '<br>https://club.z-go.ru/'
    }
})