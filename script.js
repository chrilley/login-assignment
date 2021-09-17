// Hooking up to the main and login div elements for future reference
const main = document.getElementById('main');
const login = document.getElementById('login');

//Login Button is hard-coded to username "test" and password "1234"
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput');
    const passInput = document.getElementById('passInput');

    if (nameInput.value === 'test' && passInput.value === '1234') {
        localStorage.setItem('session', true)
        login.classList.add('hide')                                     // Using handy CSS classes to hide & show panels
        document.getElementById('success').classList.remove('hide');
    } else {
        login.classList.add('hide');
        document.getElementById('fail').classList.remove('hide');
    }
});

// Constructor for our website panels 
function Panel(div, title, text, button) {
    // Draw the elements with text-content based on parameter input
    this.create = function () {
        const newDiv = document.createElement('div');                   // This is the parent div of the panel
        newDiv.id = div;
        document.getElementById(main.id).appendChild(newDiv);

        const newTitle = document.createElement('h3');                  // The panel's title text
        newTitle.textContent = title;
        document.getElementById(newDiv.id).appendChild(newTitle);

        const newText = document.createElement('p');                    // The panel's message content
        newText.textContent = text;
        document.getElementById(newDiv.id).appendChild(newText);

        const newButton = document.createElement('button');             // Finally each panel has a button that we can assign an action to
        newButton.textContent = button;
        document.getElementById(newDiv.id).appendChild(newButton);

        newButton.addEventListener('click', this.action);
    };

    this.action = function () {
        // The panel button should be able to do two different things; Sign out and Try login again
        login.classList.remove('hide');
        document.getElementById('success').classList.add('hide');
        document.getElementById('fail').classList.add('hide');

        if (this.button = 'Sign Out') {             // In this case our buttons only have two options so if you're not signing out you are by default trying to login again.
            login.classList.remove('hide');
            localStorage.removeItem('session');
        }
    };
}

// Create and append the required panels using our constructor
const successPanel = new Panel('success', 'You\'re in!', 'Welcome to the best site - Enjoy your stay!', 'Sign Out');
const failPanel = new Panel('fail', 'Whoops!', 'Incorrect credentials: Terminator monkeys have been deployed.', 'Try Again');   // This is an empty threat, I have misplaced my terminator monkeys...

failPanel.create();
successPanel.create();

// Check storage for logged in user upon page load
if (localStorage.getItem('session')) {
    login.classList.add('hide');
    document.getElementById('success').classList.remove('hide');
    document.getElementById('fail').classList.add('hide');
} else {
    login.classList.remove('hide');
    document.getElementById('success').classList.add('hide');
    document.getElementById('fail').classList.add('hide');
}