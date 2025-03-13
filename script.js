
const UI = {
    nameInput: document.querySelector('.submit-name-input'),
    loginButton: document.querySelector('.login-btn'),
    usernameContainer: document.querySelector('.username'),
    inputCursor: document.querySelector('.inputCursor'),
    indtastetUsername: document.querySelector('.indtastetUsername'),
    inventory: document.querySelector('.inventory'),
    skillTree: document.querySelector('.skillTree'),
    characterMenu: document.querySelector('.characterMenu'),
    playerUI: document.querySelector('.playerUI'),
};


function setUsername() {
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
    window.location.href = '/?page=game';

}

function logOut() {
    localStorage.removeItem("userName");
    window.location.href = '/?page=login';
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
    } else {
        return;
    }
}

function setName() {
    if (!Player.name) {
        return;
    } else {
        UI.indtastetUsername.textContent = Player.name;

    }
}
function GoBackWithRefresh(event) {
    if ('referrer' in document) {
        window.location = document.referrer;
        /* OR */
        //location.replace(document.referrer);
    } else {
        window.history.back();
    }
}

function openBags() {
    const bagVisibility = UI.inventory.style.display;
    if (bagVisibility === "" || bagVisibility === "none") {
        UI.inventory.style.display = "grid";
    } else {
        UI.inventory.style.display = "none";
    }
}
function openTree() {
    const treeVisibility = UI.skillTree.style.display;
    if (treeVisibility === "" || treeVisibility === "none") {
        UI.skillTree.style.display = "block";
        UI.characterMenu.style.display ="none";
    } else {
        UI.skillTree.style.display = "none";
    }
}
function openCharacter() {
    const characterVisibility = UI.characterMenu.style.display;
    if (characterVisibility === "" || characterVisibility === "none") {
        UI.characterMenu.style.display = "block";
        UI.skillTree.style.display = "none";
    } else {
        UI.characterMenu.style.display = "none";
    }
}

window.addEventListener("keydown", function (event) {
    if (event.key === "b" || event.key === "B") {
        openBags();
    }
    if (event.key === "c" || event.key === "C") {
        openCharacter();
    }
    if (event.key === "t" || event.key === "T") {
        openTree();
    }
    
})
