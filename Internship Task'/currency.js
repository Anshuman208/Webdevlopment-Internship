const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Sample currency conversion rates (1 unit of each currency in USD)
const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.33,
    INR: 73.52
};

convertBtn.addEventListener("click", function() {
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;
    const amountValue = parseFloat(amount.value);

    if (isNaN(amountValue)) {
        result.textContent = "Please enter a valid amount.";
    } else {
        const convertedAmount = (amountValue * exchangeRates[toCurrencyValue]) / exchangeRates[fromCurrencyValue];
        result.textContent = `${amountValue} ${fromCurrencyValue} is equal to ${convertedAmount.toFixed(2)} ${toCurrencyValue}`;
    }
});
