document.addEventListener('DOMContentLoaded', async function() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    try {
        const apiKey = '215d34cef366f49d5001ae75';
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            const currencies = data.supported_codes; 
            currencies.forEach(([code, name]) => {
                const option1 = document.createElement('option');
                option1.value = code;
                option1.textContent = `${code} - ${name}`;
                fromCurrencySelect.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = code;
                option2.textContent = `${code} - ${name}`;
                toCurrencySelect.appendChild(option2);
            });
        } else {
            console.error('Failed to fetch currency codes');
        }
    } catch (error) {
        console.error('Error fetching currency codes:', error);
    }
});

document.getElementById('convertButton').addEventListener('click', async function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }

    try {
        const apiKey = '215d34cef366f49d5001ae75';
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = amount * rate;
            document.getElementById('result').textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
            document.getElementById('result').textContent = 'Error fetching exchange rates. Please try again later.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred. Please try again later.';
    }
});
