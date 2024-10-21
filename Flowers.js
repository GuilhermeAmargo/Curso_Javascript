// Prices

const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

// Number

let rosesNumber = 70;
let lilliesNumber = 50;
let tulipsNumber = 120; 

// Total Price per Flower

let totalPriceRoses = rosePrice * rosesNumber;
let totalPriceLillies = lilyPrice * lilliesNumber;
let totalPriceTulips = tulipPrice * tulipsNumber;

// Total Price

let totalPrice = totalPriceLillies + totalPriceRoses + totalPriceTulips;

// Console

console.log("Rose - unit price: "+rosePrice+" , quantity: "+rosesNumber+" , value: "+totalPriceRoses);
console.log("Lily - unit price: "+lilyPrice+" , quantity: "+lilliesNumber+" , value: "+totalPriceLillies);
console.log("Tulip - unit price: "+tulipPrice+" , quantity: "+tulipsNumber+" , value: "+totalPriceTulips);
console.log("Total: "+totalPrice);

// Decrease

rosesNumber = rosesNumber - 20;
lilliesNumber = lilliesNumber - 30;

totalPriceRoses = rosePrice * rosesNumber;
totalPriceLillies = lilyPrice * lilliesNumber;
totalPriceTulips = tulipPrice * tulipsNumber;

totalPrice = totalPriceLillies + totalPriceRoses + totalPriceTulips;

console.log("Rose - unit price: "+rosePrice+" , quantity: "+rosesNumber+" , value: "+totalPriceRoses);
console.log("Lily - unit price: "+lilyPrice+" , quantity: "+lilliesNumber+" , value: "+totalPriceLillies);
console.log("Tulip - unit price: "+tulipPrice+" , quantity: "+tulipsNumber+" , value: "+totalPriceTulips);
console.log("Total: "+totalPrice);