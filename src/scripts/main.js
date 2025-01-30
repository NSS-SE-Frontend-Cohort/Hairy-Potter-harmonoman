// Imports go first
const { makePottery } = require("./PotteryWheel.js");
const { firePottery } = require("./Kiln.js");
const { toSellOrNotToSell, usePottery } = require("./PotteryCatalog.js");


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 2)
console.log(mug)
let cup = makePottery("cup", 3, 3)
console.log(cup)
let plate = makePottery("plate", 6, 1)
console.log(plate)
let bowl = makePottery("bowl", 7, 4)
console.log(bowl)
let vase = makePottery("vase", 8, 10)
console.log(vase)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2200);
console.log(firedMug)
let firedCup = firePottery(cup, 2201);
console.log(firedCup)
let firedPlate = firePottery(plate, 2198);
console.log(firedPlate)
let firedBowl = firePottery(bowl, 2210);
console.log(firedBowl)
let firedVase = firePottery(vase, 2200);
console.log(firedVase)

// Determine which ones should be sold, and their price
let mugToSell = toSellOrNotToSell(firedMug);
console.log(mugToSell);
let cupToSell = toSellOrNotToSell(firedCup);
console.log(cupToSell);
let plateToSell = toSellOrNotToSell(firedPlate);
console.log(plateToSell);
let bowlToSell = toSellOrNotToSell(firedBowl);
console.log(bowlToSell);
let vaseToSell = toSellOrNotToSell(firedVase);
console.log(vaseToSell);

// Return array of sellable pottery
const toSellArray = usePottery();
console.log(toSellArray);

// Invoke the component function that renders the HTML list

