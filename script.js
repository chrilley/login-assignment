const main = document.getElementById('main');
const login = document.getElementById('login');
const nameInput = document.getElementById('nameInput');
const passInput = document.getElementById('passInput');

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function () {
    if (nameInput === "test" && passInput ==="1234") {
        login.classList.add('hide')
        pageSuccess();
    } else {
        login.classList.add('hide')
        pageFail();
    }
})

if (localStorage.getItem('session')) {
    pageSuccess()
    console.log("success!");
} else {
    login.classList.remove('hide');
    console.log("go to login");
}

function pageSuccess() {
    const success = document.createElement('success');
    success.classList.add('container');
    document.getElementById('main.id').appendChild('success')
}

function pageFail() {
    const fail = document.createElement('fail');
    fail.classList.add('container');
    document.getElementById('main.id').appendChild('fail')
}