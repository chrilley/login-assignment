// Declare some important elements
const main = document.getElementById('main');
const login = document.getElementById('login');
const nameInput = document.getElementById('nameInput')
const passInput = document.getElementById('passInput')
const loginButton = document.getElementById('loginButton');

// And a template to create pages from
const page = {
    div: document.createElement('div'),
    title: document.createElement('h3'),
    text: document.createElement('p'),
    button: document.createElement('button')
}

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

// If anyone is logged in, go to "success" page else show login form
function checkSession() {
    if (localStorage.getItem('session')) {
        pageSuccess()
    } else {
        login.classList.remove('hide');
    }
}

// Creates the success page
function pageSuccess() {
    page.div.id = "success";
    page.title.textContent = "You're in!"
    page.text.textContent = "Welcome to the the best site - Enjoy your stay."
    page.button.textContent = "Sign out"

    main.appendChild(page.div);
    page.div.appendChild(page.title);
    page.div.appendChild(page.text);
    page.div.appendChild(page.button);

    page.button.addEventListener('click', function () {
        main.removeChild(page.div);
        login.classList.remove('hide');
        localStorage.removeItem('session')
    })
}

// Creates the fail page
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

// Look for user on page-load
checkSession();