
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
class Items {
    constructor(name, ID) {
        this.name = name;
        this.ID = ID;
    }
}
class Helmet extends Items {
    constructor(name, ID, stamina) {
        super(name, ID);
        this.type = 10;
        this.stamina = stamina;
    }

}
class Chest extends Items {
    constructor(name, ID, vitality) {
        super(name, ID);
        this.type = 20;
        this.vitality = vitality;
    }
}
class Legs extends Items {
    constructor(name, ID, agility) {
        super(name, ID);
        this.type = 30;
        this.agility = agility;
    }
}
class Boots extends Items {
    constructor(name, ID, agility) {
        super(name, ID);
        this.type = 70;
        this.agility = agility;
    }
}
class Ring extends Items {
    constructor(name, ID, intellect) {
        super(name, ID);
        this.type = 40;
        this.intelllect = intellect;
    }
}
class Staff extends Items {
    constructor(name, ID, spirit) {
        super(name, ID);
        this.type = 50;
        this.spirit = spirit;
    }
}
class Sword extends Items {
    constructor(name, ID, strength) {
        super(name, ID);
        this.type = 60;
        this.strength = strength;
    }
}
class Gun extends Items {
    constructor(name, ID, strength) {
        super(name, ID, strength);
        this.type = 60;
        this.strength = strength;
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
const sfGun = new Gun("sFG 9000", 8, 1);
const bfSword = new Sword("BF Sword", 9, 45);
const equippedItems = [
    ironHelmet,
    ironChest,
    ironLegs,
    ironBoots,
    magicRing,
    ironSword,
    priestStaff,
]
const inventoryItems = [bfGun, bfSword]


const Player = {
    name: localStorage.getItem("userName"),
    stats: {
        strength: 10 + equippedItems[5].strength,
        intellect: 10 + equippedItems[4].intelllect,
        vitality: 10 + equippedItems[1].vitality,
        stamina: 10 + equippedItems[0].stamina,
        agility: 10 + equippedItems[2].agility + equippedItems[3].agility,
        spirit: 10 + equippedItems[6].spirit,
    },

    equipItem(item) {
        const inventoryItem = item;
        const equipmentItem = equippedItems.find(({ type }) => type === inventoryItem.type);
        const iIndex = inventoryItems.indexOf(inventoryItem);
        const eIndex = equippedItems.indexOf(equipmentItem);
        if (inventoryItem.type === equipmentItem.type) {
            equippedItems.splice(eIndex, 1, inventoryItem);
            inventoryItems.splice(iIndex, 1, equipmentItem);
        };
        this.updateStats();
        return Player.stats;


    },

    updateStats() {
        this.stats.strength = 10 + equippedItems[5].strength;
        this.stats.intellect = 10 + equippedItems[4].intelllect;
            this.stats.vitality = 10 + equippedItems[1].vitality;
            this.stats.stamina = 10 + equippedItems[0].stamina;
            this.stats.agility = 10 + equippedItems[2].agility + equippedItems[3].agility;
            this.stats.spirit = 10 + equippedItems[6].spirit;
    }



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
