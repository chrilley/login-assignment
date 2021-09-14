// Declare some important elements
const main = document.getElementById('main');
const login = document.getElementById('login');
const nameInput = document.getElementById('nameInput');
const passInput = document.getElementById('passInput');
const loginButton = document.getElementById('loginButton');

// Constructor for our website panels.
function Panel(div, title, text, button) {
 /*   this.div = div;
    this.title = title;
    this.text = text;
    this.button = button;*/
    this.create = function () {
        const newDiv = document.createElement('div');
        newDiv.id = div;
        document.getElementById(main.id).appendChild(newDiv);

        const newTitle = document.createElement('h3');
        newTitle.textContent = title;
        document.getElementById(newDiv.id).appendChild(newTitle);

        const newText = document.createElement('p');
        newText.textContent = text;
        document.getElementById(newDiv.id).appendChild(newText);

        const newButton = document.createElement('button');
        newButton.textContent = button;
        document.getElementById(newDiv.id).appendChild(newButton);

        newButton.addEventListener('click', this.action);
    };

    this.action = function () {

        login.classList.remove('hide');
        document.getElementById('success').classList.add('hide');
        document.getElementById('fail').classList.add('hide');

        if (this.button = 'Sign Out') {
            login.classList.remove('hide');
            localStorage.removeItem('session');
        }
    }
}

// Create the required panels using our constructor
const successPanel = new Panel('success', 'You\'re in!', 'Welcome to the best site - Enjoy your stay!', 'Sign Out');
const failPanel = new Panel('fail', 'Whoops!', 'Wrong credentials: Terminator monkeys has been deployed.', 'Try Again');

failPanel.create();
successPanel.create();

function checkSession() {
    if (localStorage.getItem('session')) {
        login.classList.add('hide');
        document.getElementById('success').classList.remove('hide')
        document.getElementById('fail').classList.add('hide');
    } else {
        login.classList.remove('hide');
        document.getElementById('success').classList.add('hide');
        document.getElementById('fail').classList.add('hide');
    }
}

// Look for user on page-load
checkSession();

//Login Button
loginButton.addEventListener('click', function () {

    if (nameInput.value === "test" && passInput.value === "1234") {
        localStorage.setItem('session', true)
        login.classList.add('hide')
        document.getElementById('success').classList.remove('hide');
    } else {
        login.classList.add('hide');
        document.getElementById('fail').classList.remove('hide');
    }
});