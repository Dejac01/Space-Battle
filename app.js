// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again ... etc
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed

console.log("I am Loaded");

window.alert("WARNING!! Your nation is under attack! Are you ready to battle galactic Aliens to save humanity?");
window.alert("INSTRUCTIONS: You attack the first alien ship. If the ship survives, it attacks you. If you survive, you attack the ship again.If it survives, it attacks you again. If you destroy the ship, you have the option to attack the next ship or to retreat. If you retreat, the game is over.You win the game if you destroy all of the aliens. You lose the game if you are destroyed ");

//Make the GAME an OBJECT
let game = {
  round: 0,
  targetShip: 0,
  userResponse: "",
};

//Make Player 1 object with player health attribute
let humans = {
  health: "100",

};

let aliens = {
  health: "100", 
 alienDefense: randomIntFromInterval(3, 6)
};
let alienFleet = 6;

//Banner
const showBanner = (msg) => {
  let bannerDisplay = document.querySelector(".banner");
  bannerDisplay.innerHTML = msg;
};
//Show health
const showHealth = () => {
  let humanDisplay = document.querySelector(".health1");
  humanDisplay.innerHTML = humans.health;

  let alienDisplay = document.querySelector(".health2");
  alienDisplay.innerHTML = aliens.health;
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Alien Attack
function alienAttack() {
  let firePower = randomIntFromInterval(2, 4);
  let attack = Math.random();
  if (attack > alienAccuracy[0] && attack < alienAccuracy[2]) {
    if (ussAssembly.hull > 0) {
	ussAssembly.hull - firePower	
    } 
	else {ussAssembly.health-firePower}
  }

  console.log(humans.health);
  showHealth();
}

//Make ATTACK functions
function humanAttack() {
  var attack = Math.random();
  console.log(aliens.alienDefense);
  if (attack < ussAssembly.accuracy) {
	showBanner("Aliens have been hit!");
    console.log("Aliens have been hit!");
	if (aliens.alienDefense > 0) {
		aliens.alienDefense = aliens.alienDefense - ussAssembly.firePower}
    if  (aliens.alienDefense < 0  ) {
      aliens.health -= ussAssembly.firePower;
    } else {
      showBanner("Your Attack was blocked by alien defenses!");
    }
    console.log(aliens.health);
    showHealth();
  } else {
	showBanner("USS Assembly Misseses!");
    console.log("USS Assembly Misses!!!");
  }
  if (aliens.health <= 0) {
    alienFleet -= 1;
	aliens.alienDefense = randomIntFromInterval(3, 6);
    aliens.health = 100;
  }
  if (alienFleet > 0) {
    alienAttack();
  }
  if (alienFleet == 0) {
    console.log("All Aliens have been defeated!!!");
    showBanner("All Aliens have been defeated!!!");
  }
}

//SHIP OBJECT
let ussAssembly = {
  name: "USS ASSEMBLY",
  hull: 20,
  firePower: 5,
  accuracy: 0.7,
};

// Alien Ship Properties
let alienShip = [];
let alienHull = [3, 4, 5, 6];
let alienFirePower = [2, 3, 4];
let alienAccuracy = [0.6, 0.7, 0.8];

showHealth();
