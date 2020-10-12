let inventory = {
    gold: 1,
    ruby: 0,
    diamond: 0
}

let upgrades = {
    tools: {
        pickaxe: {
            generation: 5,
            amount: 0,
            cost: 50
        },
        drill: {
            generation: 25,
            amount: 0,
            cost: 300
        },
        laserDrill: {
            generation: 50,
            amount: 0,
            cost: 1000
        },
    },
    hires: {
        orcPeon: {
            generation: 2,
            amount: 0,
            cost: 100
        },
        necrolyte: {
            generation: 5,
            amount: 0,
            cost: 500
        },
        wisp: {
            generation: 10,
            amount: 0,
            cost: 5000
        },
    }
}

setInterval(passiveGold, 1000)
// setInterval(displayInventory, 1000)


function passiveGold() {
    for (let key in upgrades.hires) {
        inventory.gold += upgrades.hires[key].generation * upgrades.hires[key].amount

    }
    displayInventory()
}
function toolIncrease() {
    for (let key in upgrades.tools) {
        inventory.gold += upgrades.tools[key].generation * upgrades.tools[key].amount


    }
    displayInventory()
}
function passiveActivate(x) {
    if (x == 0 && inventory.gold >= upgrades.hires.orcPeon.cost) {
        upgrades.hires.orcPeon.amount++
        inventory.gold -= upgrades.hires.orcPeon.cost
    } debugger
    if (x == 1 && inventory.gold >= upgrades.hires.necrolyte.cost) {
        upgrades.hires.necrolyte.amount++
        inventory.gold -= upgrades.hires.necrolyte.cost
    }
    if (x == 2 && inventory.gold >= upgrades.hires.wisp.cost) {
        upgrades.hires.wisp.amount++
        inventory.gold -= upgrades.hires.wisp.cost
    }
    displayBought()
}
function toolActivate(x) {
    if (x == 0 && inventory.gold >= upgrades.tools.pickaxe.cost) {
        upgrades.tools.pickaxe.amount++
        inventory.gold -= upgrades.tools.pickaxe.cost
    }
    if (x == 1 && inventory.gold >= upgrades.tools.drill.cost) {
        upgrades.tools.drill.amount++
        inventory.gold -= upgrades.tools.drill.cost
    }
    if (x == 2 && inventory.gold >= upgrades.tools.laserDrill.cost) {
        upgrades.tools.laserDrill.amount++
        inventory.gold -= upgrades.tools.laserDrill.cost
    }
    displayBought()
}



function mine() {
    toolIncrease()
    inventory.gold++
    displayInventory()
}

function displayInventory() {
    let displayGold = document.getElementById('displayGold')
    displayGold.innerText = `${inventory.gold} Gold`
    // let displayRuby = document.getElementById('displayRuby')
    // displayRuby.innerText = `${inventory.ruby} 'Rubies`
    // let displayDiamond = document.getElementById('displayDiamond')
    // displayDiamond.innerText = `${inventory.diamond} 'Diamonds`

}

function displayBought() {
    let displayPick = document.getElementById('displayPick')
    displayPick.innerText = `${upgrades.tools.pickaxe.amount} Picks`
    let displayDrill = document.getElementById('displayDrill')
    displayDrill.innerText = `${upgrades.tools.drill.amount} Drills`
    let displayLaserDrill = document.getElementById('displayLaserDrill')
    displayLaserDrill.innerText = `${upgrades.tools.laserDrill.amount} LaserDrills`
    let displayPeons = document.getElementById('displayPeon')
    displayPeons.innerText = `${upgrades.hires.orcPeon.amount} OrcPeons`
    let displayNecrolytes = document.getElementById('displayNecrolyte')
    displayNecrolytes.innerText = `${upgrades.hires.necrolyte.amount} Necrolytes`
    let displayWisps = document.getElementById('displayWisp')
    displayWisps.innerText = `${upgrades.hires.wisp.amount} Wisps`
}













displayBought()
displayInventory()