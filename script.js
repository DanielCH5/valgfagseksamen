
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

// const Items = [
//     {
//         name: "Iron Helmet",
//         ID: 1,
//         type: 1,
//         vitality: 1,
//         stamina: 1,
//     },
//     {
//         name: "Iron Chest",
//         ID: 2,
//         type: 2,
//         vitality: 2,
//         strength: 2,
//         stamina: 2,
//     },
//     {
//         name: "Iron Leggings",
//         ID: 3,
//         type: 3,
//         vitality: 2,
//         strength: 1,
//         stamina: 3,
//         spirit: 2,
//     },
//     {
//         name: "Iron Boots",
//         ID: 4,
//         type: 4,
//         vitality: 2,
//         stamina: 2,

//     }
// ]
class Items {
    constructor(name, ID){
        this.name = name;
        this.ID = ID;
    }
}
class Helmet extends Items{ 
    constructor(name, ID, stamina){
        super(name, ID);
        this.type = 1;
        this.stamina = stamina;
    }

}
class Chest extends Items{ 
    constructor(name, ID, vitality){
        super(name, ID);
        this.type = 2;
        this.vitality = vitality;
    }
}
class Legs extends Items{ 
    constructor(name, ID, agility){
        super(name, ID);
        this.type = 3;
        this.agility = agility;
    }
}
class Boots extends Items{ 
    constructor(name, ID, agility){
        super(name, ID);
        this.type = 7;
        this.agility = agility;
    }
}
class Ring extends Items{ 
    constructor(name, ID, intellect){
        super(name, ID);
        this.type = 4;
        this.intelllect = intellect;
    }
}
class Staff extends Items{ 
    constructor(name, ID, spirit){
        super(name, ID);
        this.type = 5;
        this.spirit = spirit;
    }
}
class Sword extends Items{ 
    constructor(name, ID, strength){
        super(name, ID);
        this.type = 6;
        this.strength = strength;
    }
}
class Gun extends Sword{
    constructor(name, ID, strength){
        super(name, ID, strength);
        this.type = 6;
    }
}

const ironHelmet = new Helmet("Iron Helmet", 1, 1);
const ironChest = new Chest("Iron Chest", 2, 1);
const ironLegs = new Legs("Iron Legs", 3, 1);
const ironBoots = new Boots("Iron Boots", 4, 2);
const magicRing = new Ring("Ring of Magic", 5, 2);
const priestStaff = new Staff("Holy Staff", 6, 3);
const ironSword = new Sword("Iron Sword", 7, 4);
const bfGun = new Gun("BFG 9000", 8, 9000);

const Player = {
    name: localStorage.getItem("userName"),
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
        UI.characterMenu.style.display = "none";
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
