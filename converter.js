const syncInput = require('sync-input');

const rates = {
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  USD: 1,
  GBP: 0.75
};

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log(`1 USD equals ${rates.JPY} JPY`);
console.log(`1 USD equals ${rates.EUR} EUR`);
console.log(`1 USD equals ${rates.RUB} RUB`);
console.log(`1 USD equals ${rates.GBP} GBP`);

while (true) {
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");

  const choice = syncInput("> ");

  if (choice === "1") {
    console.log("What do you want to convert?");
    let fromCurrency = syncInput("From: ").toUpperCase();

    if (!rates[fromCurrency]) {
      console.log("Unknown currency:", fromCurrency);
      continue;
    }

    let toCurrency = syncInput("To: ").toUpperCase();

    if (!rates[toCurrency]) {
      console.log("Unknown currency:", toCurrency);
      continue;
    }

    let amount = parseFloat(syncInput("Amount: "));

    if (isNaN(amount)) {
      console.log("The amount has to be a number");
      continue;
    }

    if (amount < 1) {
      console.log("The amount cannot be less than 1");
      continue;
    }

    const result = (amount * rates[toCurrency] / rates[fromCurrency]).toFixed(4);

    console.log(`Result: ${amount} ${fromCurrency} equals ${result} ${toCurrency}`);
  } else if (choice === "2") {
    console.log("Have a nice day!");
    break;
  } else {
    console.log("Unknown input");
  }
}
