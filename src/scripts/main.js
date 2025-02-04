// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 2)
let cup = makePottery("cup", 3, 3)
let plate = makePottery("plate", 6, 1)
let bowl = makePottery("bowl", 7, 4)
let vase = makePottery("vase", 8, 10)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2200);
let firedCup = firePottery(cup, 2201);
let firedPlate = firePottery(plate, 2198);
let firedBowl = firePottery(bowl, 2210);
let firedVase = firePottery(vase, 2200);

// Determine which ones should be sold, and their price
let mugToSell = toSellOrNotToSell(firedMug);
let cupToSell = toSellOrNotToSell(firedCup);
let plateToSell = toSellOrNotToSell(firedPlate);
let bowlToSell = toSellOrNotToSell(firedBowl);
let vaseToSell = toSellOrNotToSell(firedVase);

// Return array of sellable pottery
const toSellArray = usePottery();

// Invoke the component function that renders the HTML list
const potteryListHTML = potteryList();

document.querySelector(".potteryList").innerHTML = potteryListHTML;
