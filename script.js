
const UI = {
    nameInput: document.querySelector('.submit-name-input'),
    loginButton: document.querySelector('.login-btn'),
    usernameContainer: document.querySelector('.username'),
    inputCursor: document.querySelector('.inputCursor'),
    indtastetUsername: document.querySelector('.indtastetUsername'),
};


function setUsername(){
    localStorage.setItem("userName", UI.nameInput.value);
    greetUser();
}

async function typeSentence(sentence) {
    const letters = sentence.split("");
    UI.inputCursor.style.display = "inline-block";
    for (let i = 0; i < letters.length; i++) {
        await waitFor(100);
        UI.indtastetUsername.textContent += letters[i];
    }
    UI.inputCursor.style.display = "none";
    await waitFor(1000);
    window.location.href = '/?page=settings';

}

function clearUsername() {
    localStorage.removeItem("userName");
}

function waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const Player = {
    name: localStorage.getItem("userName"),
};
function greetUser() {
    if (localStorage.getItem("userName")) {
        const userName = localStorage.getItem("userName");
        UI.usernameContainer.remove();
        UI.loginButton.innerHTML = "Logging in...";
        UI.loginButton.disabled = true;
        typeSentence(userName);
    }else {
        return;
    }
}

function setName(){
    UI.indtastetUsername.textContent = Player.name
}
