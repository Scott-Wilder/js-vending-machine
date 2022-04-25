const btns = document.getElementsByClassName("btn");
const selection = document.getElementById("selection");
const selectionImg = document.getElementById("selectionImg");
const buyButton = document.getElementById("buyButton");
const buyName = document.getElementById("buyName");
const balanceNumber = document.getElementById("balanceNumber");
const upVote = document.getElementsByClassName("up-arrow");
const downVote = document.getElementsByClassName("down-arrow");
const coinsandBillDisplay = document.getElementById("coinandBillDisplay");
// loop to create event listeners on green up arrows that will call function addBalance.
for (var i = 0; i < upVote.length; i++) {
  upVote[i].addEventListener("click", addBalance, false);
}
// loop to create event listeners on red down arrows that will call function minusBalance.
for (var i = 0; i < upVote.length; i++) {
  downVote[i].addEventListener("click", minusBalance, false);
}
// Start balanace of $0.
var balance = 0;
// create coin and bill object.
const coinsAndBills = {
  Pennies: 0,
  Nickels: 0,
  Dimes: 0,
  Quarters: 0,
  Ones: 0,
  Fives: 0,
  Tens: 0,
  Twenties: 0,
  Hundreds: 0,

  updateWallet() {
    coinsandBillDisplay.innerHTML =
      "Pennies: " +
      coinsAndBills.Pennies +
      ", Nickels: " +
      coinsAndBills.Nickels +
      ", Dimes: " +
      coinsAndBills.Dimes +
      ", Quarters: " +
      coinsAndBills.Quarters +
      "</br> Ones: " +
      coinsAndBills.Ones +
      ", Fives: " +
      coinsAndBills.Fives +
      ", Tens: " +
      coinsAndBills.Tens +
      ", Twenties: " +
      coinsAndBills.Twenties +
      ", Hundreds: " +
      coinsAndBills.Hundreds;
  },
};
// Handles green up arrow logic to increase balance and update coin and bill count.
function addBalance(e) {
  if (e.target.id == "pennyUpArrow") {
    balance += 0.01;
    coinsAndBills.Pennies++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "nickelUpArrow") {
    balance += 0.05;
    coinsAndBills.Nickels++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "dimeUpArrow") {
    balance += 0.1;
    coinsAndBills.Dimes++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "quarterUpArrow") {
    balance += 0.25;
    coinsAndBills.Quarters++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "oneDollarUpArrow") {
    balance += 1.0;
    coinsAndBills.Ones++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "fiveDollarUpArrow") {
    balance += 5.0;
    coinsAndBills.Fives++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "tenDollarUpArrow") {
    balance += 10.0;
    coinsAndBills.Tens++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "twentyDollarUpArrow") {
    balance += 20.0;
    coinsAndBills.Twenties++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "hundredDollarUpArrow") {
    balance += 100.0;
    coinsAndBills.Hundreds++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
}
// Handles red down arrow logic to decrease balance and update coin and bill count.
// Alerts when subtracting less than $0 balance and subracting from 0 count of coin or bill.
function minusBalance(e) {
  if (e.target.id == "pennyDownArrow") {
    if (balance - 0.01 >= 0 && coinsAndBills.Pennies >= 1) {
      balance -= 0.01;
      coinsAndBills.Pennies--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert("Cannot have balance less than $0 or have less than 0 Pennies");
    }
  }
  if (e.target.id == "nickelDownArrow") {
    if (balance - 0.05 >= 0 && coinsAndBills.Nickels >= 1) {
      balance -= 0.05;
      coinsAndBills.Nickels--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert("Cannot have balance less than $0 or have less than 0 Nickels");
    }
  }
  if (e.target.id == "dimeDownArrow") {
    if (balance - 0.1 >= 0 && coinsAndBills.Dimes >= 1) {
      balance -= 0.1;
      coinsAndBills.Dimes--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert("Cannot have balance less than $0 or have less than 0 Dimes");
    }
  }
  if (e.target.id == "quarterDownArrow") {
    if (balance - 0.25 >= 0 && coinsAndBills.Quarters >= 1) {
      balance -= 0.25;
      coinsAndBills.Quarters--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert("Cannot have balance less than $0 or have less than 0 Quarters");
    }
  }
  if (e.target.id == "oneDollarDownArrow") {
    if (balance - 1.0 >= 0 && coinsAndBills.Ones >= 1) {
      balance -= 1.0;
      coinsAndBills.Ones--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert(
        "Cannot have balance less than $0 or have less than 0 one dollar bills"
      );
    }
  }
  if (e.target.id == "fiveDollarDownArrow") {
    if (balance - 5.0 >= 0 && coinsAndBills.Fives >= 1) {
      balance -= 5.0;
      coinsAndBills.Fives--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert(
        "Cannot have balance less than $0 or have less than 0 five dollar bills"
      );
    }
  }
  if (e.target.id == "tenDollarDownArrow") {
    if (balance - 10.0 >= 0 && coinsAndBills.Tens >= 1) {
      balance -= 10.0;
      coinsAndBills.Tens--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert(
        "Cannot have balance less than $0 or have less than 0 ten dollar bills"
      );
    }
  }
  if (e.target.id == "twentyDollarDownArrow") {
    if (balance - 20.0 >= 0 && coinsAndBills.Twenties >= 1) {
      balance -= 20.0;
      coinsAndBills.Twenties--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert(
        "Cannot have balance less than $0 or have less than 0 twenty dollar bills"
      );
    }
  }
  if (e.target.id == "hundredDollarDownArrow") {
    if (balance - 100.0 >= 0 && coinsAndBills.Hundreds >= 1) {
      balance -= 100.0;
      coinsAndBills.Hundreds--;
      balanceNumber.innerHTML = updateBalance(balance);
      coinsAndBills.updateWallet();
    } else {
      alert(
        "Cannot have balance less than $0 or have less than 0 hundred dollar bills"
      );
    }
  }
}
// Handles Balance display to round to nearst 2nd decimal place.
function updateBalance(value) {
  balance + Math.round((value + Number.EPSILON) * 100) / 100;
  return balance.toFixed(2);
}
// Hide buy button until selection has been made.
buyButton.style.display = "none";
// loop to create event listeners on drink selection buttons that will call select function.
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", select, false);
}
// event listener on buy button that will call buy function.
buyButton.addEventListener("click", buy);
class Drink {
  constructor(_name, _price, _calorie, _image) {
    this.name = _name;
    this.price = _price;
    this.calorie = _calorie;
    this.image = _image;
  }
  printDescription() {
    var text =
      "Name: " +
      this.name +
      "</br>Price: $" +
      this.price +
      "</br>Calorie: " +
      this.calorie;
    return text;
  }
}
// Create drink objects name, price, calorie, image src.
var coke = new Drink("Coke", 2.5, 250, "images/coke.png");
var pepsi = new Drink("Pepsi", 2.5, 275, "images/pepsi.png");
var water = new Drink("Water", 2, 0, "images/water.png");
var nuka = new Drink("Nuka-Cola", 4.75, 500, "images/nuka.png");
var kombucha = new Drink("Kombucha", 3.5, 420, "images/kombucha.png");
var tab = new Drink("Tab", 1, 380, "images/tab.png");
// Determines which button was pressed and displays corresponding drink object with buy button.
function select(e) {
  if (e.target.textContent == "Coke") {
    selection.innerHTML = coke.printDescription();
    selectionImg.src = coke.image;
    buyButton.style.display = "block";
    buyName.innerHTML = coke.name;
  }
  if (e.target.textContent == "Pepsi") {
    selection.innerHTML = pepsi.printDescription();
    selectionImg.src = pepsi.image;
    buyButton.style.display = "block";
    buyName.innerHTML = pepsi.name;
  }
  if (e.target.textContent == "Water") {
    selection.innerHTML = water.printDescription();
    selectionImg.src = water.image;
    buyButton.style.display = "block";
    buyName.innerHTML = water.name;
  }
  if (e.target.textContent == "Nuka-Cola") {
    selection.innerHTML = nuka.printDescription();
    selectionImg.src = nuka.image;
    buyButton.style.display = "block";
    buyName.innerHTML = nuka.name;
  }
  if (e.target.textContent == "Kombucha") {
    selection.innerHTML = kombucha.printDescription();
    selectionImg.src = kombucha.image;
    buyButton.style.display = "block";
    buyName.innerHTML = kombucha.name;
  }
  if (e.target.textContent == "Tab") {
    selection.innerHTML = tab.printDescription();
    selectionImg.src = tab.image;
    buyButton.style.display = "block";
    buyName.innerHTML = tab.name;
  }
}
// Determines which buy button you pressed and subtracts appropiate price from balance.
function buy(e) {
  if (e.target.textContent == "Buy Coke" || e.target.textContent == "Coke") {
    if (balance - coke.price >= 0) {
      balance = balance - coke.price;
      balanceNumber.innerHTML = updateBalance(balance);
    } else {
      alert("Insufficient funds");
    }
  }
  if (e.target.textContent == "Buy Pepsi" || e.target.textContent == "Pepsi") {
    if (balance - pepsi.price >= 0) {
      balance = balance - pepsi.price;
      balanceNumber.innerHTML = balance;
    } else {
      alert("Insufficient funds");
    }
  }
  if (e.target.textContent == "Buy Water" || e.target.textContent == "Water") {
    if (balance - water.price >= 0) {
      balance = balance - water.price;
      balanceNumber.innerHTML = updateBalance(balance);
    } else {
      alert("Insufficient funds");
    }
  }
  if (
    e.target.textContent == "Buy Nuka-Cola" ||
    e.target.textContent == "Nuka-Cola"
  ) {
    if (balance - nuka.price >= 0) {
      balance = balance - nuka.price;
      balanceNumber.innerHTML = updateBalance(balance);
    } else {
      alert("Insufficient funds");
    }
  }
  if (
    e.target.textContent == "Buy Kombucha" ||
    e.target.textContent == "Kombucha"
  ) {
    if (balance - kombucha.price >= 0) {
      balance = balance - kombucha.price;
      balanceNumber.innerHTML = updateBalance(balance);
    } else {
      alert("Insufficient funds");
    }
  }
  if (e.target.textContent == "Buy Tab" || e.target.textContent == "Tab") {
    if (balance - tab.price >= 0) {
      balance = balance - tab.price;
      balanceNumber.innerHTML = updateBalance(balance);
    } else {
      alert("Insufficient funds");
    }
  }
}
