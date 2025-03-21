
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
    popUp: document.querySelector('.popupWindow'),
    popUpCount: 5,

    clearPopup() {
        this.popUpCount = 0;
        this.popUp.innerHTML = "";
    }
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
const bfSword = new Sword("BF Sword", 9, 45);
const sfGun = new Gun("sFG 9000", 10, 1);
const leatherBoots = new Boots("Leather Boots", 11, 5);
const shadowRing = new Ring("Ring Of Shadows", 12, 50);
const dragonArmor = new Chest("Dragon Armor", 13, 100);
const demonStaff = new Staff("Demon Staff", 14, 45);
const conquerorHelmet = new Helmet("Conqueror Helmet", 15, 50);
const leatherKilt = new Legs("Leather Kilt", 16, 15);
let equippedItems = [
    ironHelmet,
    ironChest,
    ironLegs,
    ironBoots,
    magicRing,
    ironSword,
    priestStaff,
]
let inventoryItems = [bfSword, sfGun, bfGun, leatherBoots, shadowRing, dragonArmor, demonStaff, conquerorHelmet, leatherKilt]

document.querySelectorAll(".inventorySlots div").forEach((slot, index) => {
    slot.addEventListener("click", () => {
        if (inventoryItems[index]) {
            Player.equipItem(inventoryItems[index]);
        }
    });
});

function saveEquippedItems() {
    localStorage.setItem("equippedItems", JSON.stringify(equippedItems));
    localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
}
function loadEquippedItems() {
    const savedItems = localStorage.getItem("equippedItems");
    const savedInventory = localStorage.getItem("inventoryItems");
    if (savedItems) {
        equippedItems = JSON.parse(savedItems);
        Player.updateUI();
        Player.updateStats();
    }
    if (savedInventory) {
        inventoryItems = JSON.parse(savedInventory);
        Player.updateUI();
        Player.updateStats();
    }
}
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

    equipItem(id) {
        const inventoryItem = id;
        const equipmentItem = equippedItems.find(({ type }) => type === inventoryItem.type);
        const iIndex = inventoryItems.indexOf(inventoryItem);
        const eIndex = equippedItems.indexOf(equipmentItem);
        if (inventoryItem.type === equipmentItem.type) {
            equippedItems.splice(eIndex, 1, inventoryItem);
            inventoryItems.splice(iIndex, 1, equipmentItem);
        };
        UI.popUpCount++;
        if (UI.popUpCount >= 6) {
            UI.clearPopup();
        }
        UI.popUp.innerHTML += `${id.name} has been equipped <br>`;
        this.updateStats();
        this.updateUI();
        saveEquippedItems();




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

    },

    updateUI() {
        // Update equipped items
        const slots = {
            10: "playerHead",
            20: "playerChest",
            30: "playerLegs",
            70: "playerBoots",
            40: "playerRing",
            50: "playerSecondary",
            60: "playerPrimary",
        };

        equippedItems.forEach(item => {
            const slotId = slots[item.type];
            if (slotId) {
                document.querySelector(`#${slotId} img`).src = `${item.name.toLowerCase().replace(/\s/g, '')}.png`;
            }
        });

        // Update inventory items
        document.querySelectorAll(".inventorySlots div").forEach((slot, index) => {
            const item = inventoryItems[index];
            const img = slot.querySelector("img");
            if (item) {
                if (!img) {
                    const newImg = document.createElement("img");
                    newImg.src = `${item.name.toLowerCase().replace(/\s/g, '')}.png`;
                    newImg.width = 30;
                    newImg.alt = "";
                    slot.appendChild(newImg);
                } else {
                    img.src = `${item.name.toLowerCase().replace(/\s/g, '')}.png`;
                }
            } else {
                if (img) slot.removeChild(img);
            }
        });
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
    localStorage.removeItem("equippedItems");
    localStorage.removeItem("inventoryItems");
    window.location.href = '/?page=login';
}

function changeName() {

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
    }
    UI.indtastetUsername.forEach((userName) => {
        userName.textContent = Player.name
    });
    loadEquippedItems();
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

window.addEventListener("keydown", function (event){
    
    if (event.key === "q" || event.key === "Q"){
        UI.popUpCount++
        if (UI.popUpCount >= 6) {
            UI.clearPopup();
        }
        UI.popUp.innerHTML += "Firebolt has been cast <br>"
    }
    if (event.key === "w" || event.key === "W"){
        UI.popUpCount++
        if (UI.popUpCount >= 6) {
            UI.clearPopup();
        }
        UI.popUp.innerHTML += "Runic Slash has been cast <br>"
    }
    if (event.key === "e" || event.key === "E"){
        UI.popUpCount++
        if (UI.popUpCount >= 6) {
            UI.clearPopup();
        }
        UI.popUp.innerHTML += "Whirlwind has been cast <br>"
    }
    if (event.key === "r" || event.key === "R"){
        UI.popUpCount++
        if (UI.popUpCount >= 6) {
            UI.clearPopup();
        }
        UI.popUp.innerHTML += "Nature's Grasp has been cast <br>"
    }
    
})


