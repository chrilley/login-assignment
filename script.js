

const main = document.getElementById('main');
const login = document.getElementById('login');
const nameInput = document.getElementById('nameInput')
const passInput = document.getElementById('passInput')
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function () {

    if (nameInput.value === "test" && passInput.value === "1234") {
        localStorage.setItem('session', true)
        login.classList.add('hide')
        pageSuccess();
    } else {
        login.classList.add('hide')
        pageFail();
    }
})

function checkSession() {
    if (localStorage.getItem('session')) {
        pageSuccess()
    } else {
        login.classList.remove('hide');
    }
}

// Template page for us to mold...
const page = {
    div: document.createElement('div'),
    title: document.createElement('h3'),
    text: document.createElement('p'),
    button: document.createElement('button')
}

function pageSuccess() {
    page.div.id = "success";
    page.title.textContent = "You're in!"
    page.text.textContent = "Welcome to the the best site - Enjoy your stay."
    page.button.textContent = "Sign out"

    page.button.addEventListener('click', function () {
        main.removeChild(page.div);
        login.classList.remove('hide');
        localStorage.removeItem('session')
    })

    main.appendChild(page.div);
    page.div.appendChild(page.title);
    page.div.appendChild(page.text);
    page.div.appendChild(page.button);
}

function pageFail() {
    page.div.id = "fail";
    page.title.textContent = "Whoops!"
    page.text.textContent = "Incorrect credentials: Terminator monkeys has been deployed."
    page.button.textContent = "Try again"

    page.button.addEventListener('click', function () {
        main.removeChild(page.div);
        login.classList.remove('hide');
    })
    main.appendChild(page.div);
    page.div.appendChild(page.title);
    page.div.appendChild(page.text);
    page.div.appendChild(page.button);
}

checkSession();


/*

for (const [key, value] of Object.entries(fail)) {
        console.log(`${key}: ${value}`);
        main.appendChild(fail[key])
      }

    //appendAll(fail.array);

    */