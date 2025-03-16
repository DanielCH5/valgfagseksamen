
const UI = {
    nameInput: document.querySelector('.submit-name-input'),
    loginButton: document.querySelector('.login-btn'),
    usernameContainer: document.querySelector('.username'),
    inputCursor: document.querySelector('.inputCursor'),
    indtastetUsername: document.querySelectorAll('.indtastetUsername'),
    inventory: document.querySelector('.inventory'),
    skillTree: document.querySelector('.skillTree'),
    characterMenu: document.querySelector('.characterMenu'),
    playerUI: document.querySelector('.playerUI'),
    playerStrength: document.querySelector('.statNumber1'),
    playerIntellect: document.querySelector('.statNumber2'),
    playerVitality: document.querySelector('.statNumber3'),
    playerStamina: document.querySelector('.statNumber4'),
    playerAgility: document.querySelector('.statNumber5'),
    playerSpirit: document.querySelector('.statNumber6'),
};
class Items {
    constructor(name, ID) {
        this.name = name;
        this.ID = ID;
        this.stats = {
            stamina: 0,
            vitality: 0,
            strength: 0,
            agility: 0,
            spirit: 0,
            intellect: 0,
        }
    }
}
class Helmet extends Items {
    constructor(name, ID, stamina) {
        super(name, ID);
        this.type = 10;
        this.stats.stamina = this.stats.stamina + stamina;
    }

}
class Chest extends Items {
    constructor(name, ID, vitality) {
        super(name, ID);
        this.type = 20;
        this.stats.vitality = this.stats.vitality + vitality;
    }
}
class Legs extends Items {
    constructor(name, ID, agility) {
        super(name, ID);
        this.type = 30;
        this.stats.agility = this.stats.agility + agility;
    }
}
class Boots extends Items {
    constructor(name, ID, agility) {
        super(name, ID);
        this.type = 70;
        this.stats.agility = this.stats.agility + agility;
    }
}
class Ring extends Items {
    constructor(name, ID, intellect) {
        super(name, ID);
        this.type = 40;
        this.stats.intellect = this.stats.intellect + intellect;
    }
}
class Staff extends Items {
    constructor(name, ID, spirit) {
        super(name, ID);
        this.type = 50;
        this.stats.spirit = this.stats.spirit + spirit;
    }
}
class Sword extends Items {
    constructor(name, ID, strength) {
        super(name, ID);
        this.type = 60;
        this.stats.strength = strength + this.stats.strength;
    }
}
class Gun extends Items {
    constructor(name, ID, strength) {
        super(name, ID, strength);
        this.type = 60;
        this.stats.strength = strength + this.stats.strength;
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


const inventoryItems = [bfGun, bfSword, sfGun]


const Player = {
    name: localStorage.getItem("userName"),
    stats: {
        strength: 10,
        intellect: 10,
        vitality: 10,
        stamina: 10,
        agility: 10,
        spirit: 10,
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
        //Reset til basestats
        Player.stats = {
            strength: 10,
            intellect: 10,
            vitality: 10,
            stamina: 10,
            agility: 10,
            spirit: 10,
        };
        equippedItems.forEach(item => {
            // Iterate through all stats of the item and update the Player's stats
            for (const stat in item.stats) {
                if (Player.stats.hasOwnProperty(stat)) {
                    Player.stats[stat] += item.stats[stat];
                }
            }
        });
        UI.playerStrength.textContent = Player.stats.strength;
        UI.playerIntellect.textContent = Player.stats.intellect;
        UI.playerVitality.textContent = Player.stats.vitality;
        UI.playerStamina.textContent = Player.stats.stamina;
        UI.playerAgility.textContent = Player.stats.agility;
        UI.playerSpirit.textContent = Player.stats.spirit;

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
        UI.indtastetUsername.forEach((userName) => {
            userName.textContent += letters[i]
        });
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
    UI.indtastetUsername.forEach((userName) => {
        userName.textContent += Player.name
    });
    Player.updateStats(); //and stats

}

function GoBackWithRefresh(event) {
    if ('referrer' in document) {
        window.location = document.referrer;
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
        UI.skillTree.style.display = "grid";
        UI.characterMenu.style.display = "none";
    } else {
        UI.skillTree.style.display = "none";
    }
}
function openCharacter() {
    const characterVisibility = UI.characterMenu.style.display;
    if (characterVisibility === "" || characterVisibility === "none") {
        UI.characterMenu.style.display = "grid";
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
