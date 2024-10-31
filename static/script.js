// Function to check if a number is even
function isEven(num) {
    return Math.floor(num) % 2 === 0; // Convert to integer before checking
}

// Function to fetch foreign currency data from the API
async function fetchCurrencyData() {
    const response = await fetch('/api/currency'); // Fetch from your Flask API
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
}

// Function to adjust currency rates
function adjustRates(rates) {
    return Object.fromEntries(
        Object.entries(rates).map(([currency, rate]) => [currency, rate + 10.0002])
    );
}

// Function to render the table body
function renderTable(originalRates, adjustedRates) {
    const tbody = document.querySelector('#currency-table tbody');
    tbody.innerHTML = ''; // Clear previous content

    for (const currency in originalRates) {
        const row = document.createElement('tr');

        const currencyCell = document.createElement('td');
        currencyCell.textContent = currency;
        row.appendChild(currencyCell);

        const originalRateCell = document.createElement('td');
        originalRateCell.textContent = originalRates[currency].toFixed(4);
        row.appendChild(originalRateCell);

        const adjustedRateCell = document.createElement('td');
        adjustedRateCell.textContent = adjustedRates[currency].toFixed(4);
        row.appendChild(adjustedRateCell);

        tbody.appendChild(row);
    }
}

// Function to apply red borders to specific rows based on a condition
function applyRedBorders(rows) {
    rows.forEach(row => {
        const cells = row.children;
        const originalRate = parseFloat(cells[1].textContent);
        const adjustedRate = parseFloat(cells[2].textContent);
        const currency = cells[0].textContent;

        // Apply red border if the integer value of rates is even or currency is HKD
        if (isEven(originalRate) || isEven(adjustedRate) || currency === 'HKD') {
            row.classList.add('red-border');
        }
    });
}

// Main function to orchestrate fetching and rendering
async function main() {
    const originalRates = await fetchCurrencyData();
    const adjustedRates = adjustRates(originalRates);
    renderTable(originalRates, adjustedRates);

    const tableRows = document.querySelectorAll('#currency-table tbody tr');
    applyRedBorders(Array.from(tableRows)); // Convert NodeList to Array
}

// Execute the main function
main();
