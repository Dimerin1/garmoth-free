// ===== Configuration =====
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1HJpWrM05pDmreys8pmg0VuV0e5ZDJ0ePp_mXI-hGsJc/gviz/tq?tqx=out:csv&gid=1464565304';

// ===== Manual Price Overrides (ONLY for items NOT on market) =====
const MANUAL_PRICES = {
    // Box items (not directly tradeable)
    "forgotten limbo box": { name: "Forgotten Limbo Box", price: 1330000000 },

    // Paint items (not on market)
    "darkseekers' retreat paint": { name: "Darkseekers' Retreat Paint", price: 0 },
    "ash forest paint": { name: "Ash Forest Paint", price: 0 },
    "lafi bedmountain's upgraded telescope": { name: "Lafi Bedmountain's Upgraded Telescope", price: 0 }
};

// ===== Grind Spots Database =====
const GRIND_SPOTS = {
    "darkseeker's retreat": {
        name: "Darkseeker's Retreat",
        trash: { name: "Decayed Cloth", price: 46000, rate: 35361 },
        items: [
            { name: "Essence of Devouring", rate: 1.2 },
            { name: "Sealed Black Magic Crystal", rate: 26.4 },
            { name: "Kabua's Artifact", rate: 0.019 },
            { name: "Forgotten Limbo Box", rate: 0.0613 },
            { name: "Origin of Dark Hunger", rate: 0.0451 },
            { name: "Kabua's Fragment", rate: 0.842 },
            { name: "Embers of Resonance", rate: 0.757 },
            { name: "Flame of Resonance", rate: 0.0063 },
            { name: "Ancient Spirit Dust", rate: 31.9 },
            { name: "Black Stone", rate: 57.7 },
            { name: "Trace of Nature", rate: 43 },
            { name: "Imperfect Lightstone of Fire", rate: 1.27 },
            { name: "Imperfect Lightstone of Earth", rate: 0.127 },
            { name: "Imperfect Lightstone of Wind", rate: 0.0961 },
            { name: "Darkseekers' Retreat Paint", rate: 0.0921 }
        ]
    },
    "orzekea": {
        name: "Orzekea (Elvia)",
        trash: { name: "Thorn-Entwined Weapon Fragment", price: 96000, rate: 22381 },
        items: [
            { name: "Gem of Void", rate: 5.91 },
            { name: "Deboreka Earring", rate: 0.368 },
            { name: "Deboreka Belt", rate: 0.259 },
            { name: "Sealed Black Magic Crystal", rate: 18 },
            { name: "Caphras Stone", rate: 38.6 },
            { name: "Ancient Spirit Dust", rate: 86.7 },
            { name: "Black Stone", rate: 59.6 }
        ]
    },
    "orbita castle": {
        name: "Orbita Castle",
        trash: { name: "Lightlost Core", price: 140000, rate: 21128 },
        items: [
            { name: "Distorted Fragment of Origin", rate: 1.63 },
            { name: "Deboreka Earring", rate: 0.196 },
            { name: "Crystallized Energy of Endtimes", rate: 4 },
            { name: "Deboreka Ring", rate: 0.13 },
            { name: "JIN Crystal of Ruin", rate: 5.05 },
            { name: "Deboreka Belt", rate: 0.0974 },
            { name: "Caphras Stone", rate: 23.6 },
            { name: "Deboreka Necklace", rate: 0.0935 },
            { name: "Silent Fragment of Origin", rate: 0.187 },
            { name: "JIN Crystal of Dusky Ruin", rate: 0.0256 },
            { name: "Ancient Spirit Dust", rate: 63.1 },
            { name: "Distorted Crystal of Origin", rate: 0.0021 },
            { name: "Black Stone", rate: 49 },
            { name: "Silent Crystal of Origin", rate: 0.0005 }
        ]
    },
    "nymphamare castle": {
        name: "Nymphamare Castle",
        trash: { name: "Contaminated Coral Piece", price: 116000, rate: 18639 },
        items: [
            { name: "Distorted Fragment of Origin", rate: 1.32 },
            { name: "Deboreka Earring", rate: 0.152 },
            { name: "Crystallized Energy of Endtimes", rate: 3.12 },
            { name: "Caphras Stone", rate: 22.2 },
            { name: "Deboreka Belt", rate: 0.0776 },
            { name: "BON Crystal of Ruin", rate: 4.01 },
            { name: "Deboreka Ring", rate: 0.0769 },
            { name: "Deboreka Necklace", rate: 0.0747 },
            { name: "Silent Fragment of Origin", rate: 0.143 },
            { name: "BON Crystal of Dusky Ruin", rate: 0.0192 },
            { name: "Ancient Spirit Dust", rate: 42.1 },
            { name: "Distorted Crystal of Origin", rate: 0.0022 },
            { name: "Black Stone", rate: 47.6 },
            { name: "Silent Crystal of Origin", rate: 0.0004 }
        ]
    },
    "aetherion castle": {
        name: "Aetherion Castle",
        trash: { name: "Chilled Soul Piece", price: 106000, rate: 19052 },
        items: [
            { name: "Primordial Fragment", rate: 4.81 },
            { name: "Deboreka Earring", rate: 0.218 },
            { name: "Deboreka Belt", rate: 0.111 },
            { name: "Caphras Stone", rate: 25.3 },
            { name: "Deboreka Ring", rate: 0.109 },
            { name: "Deboreka Necklace", rate: 0.105 },
            { name: "WON Crystal of Ruin", rate: 4.68 },
            { name: "Ancient Spirit Dust", rate: 44.7 },
            { name: "WON Crystal of Dusky Ruin", rate: 0.0182 },
            { name: "Black Stone", rate: 49.8 }
        ]
    },
    "dehkia 2 ash forest": {
        name: "Dehkia 2 Ash Forest",
        trash: { name: "Tainted Specter's Cloth", price: 53000, rate: 35829 },
        items: [
            { name: "Deboreka Necklace", rate: 0.688 },
            { name: "Dehkia's Fragment", rate: 2.15 },
            { name: "Caphras Stone", rate: 66.9 },
            { name: "Forgotten Limbo Box", rate: 0.049 },
            { name: "Crystal of Stalwart Fortitude", rate: 0.0579 },
            { name: "Dehkia's Artifact - All Evasion", rate: 0.0029 },
            { name: "Dehkia's Artifact - All Damage Reduction", rate: 0.0027 },
            { name: "Crystal of Precise Destruction", rate: 0.173 },
            { name: "Black Stone", rate: 65.7 },
            { name: "Crystal of Unyielding Spirit", rate: 0.055 },
            { name: "Crystal of Dogged Patience", rate: 0.0543 },
            { name: "Ash Forest Paint", rate: 0.109 }
        ]
    }
};

// ===== State =====
let marketPrices = {};
let grindItems = [];
let currentSpot = "darkseeker's retreat";

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', async () => {
    populateSpotDropdown();
    await fetchPrices();
    loadSpot(currentSpot);
    setupEventListeners();
    updateResults();
});

// ===== Populate Spot Dropdown =====
function populateSpotDropdown() {
    const select = document.getElementById('spotSelect');
    select.innerHTML = '';

    Object.entries(GRIND_SPOTS).forEach(([key, spot]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = spot.name;
        select.appendChild(option);
    });

    // Add "Custom" option
    const customOption = document.createElement('option');
    customOption.value = 'custom';
    customOption.textContent = '+ Custom Spot';
    select.appendChild(customOption);
}

// ===== Load Spot =====
function loadSpot(spotKey) {
    const spot = GRIND_SPOTS[spotKey];

    if (spot) {
        currentSpot = spotKey;
        document.getElementById('spotSelect').value = spotKey;
        document.getElementById('spotName').value = spot.name;
        document.getElementById('trashName').value = spot.trash.name;
        document.getElementById('trashPrice').value = spot.trash.price;
        document.getElementById('trashPerHour').value = spot.trash.rate;

        grindItems = spot.items.map(item => ({ ...item }));
        updateItemsTable();
        updateResults();
    }
}

// ===== On Spot Change =====
function onSpotChange() {
    const select = document.getElementById('spotSelect');
    const spotKey = select.value;

    if (spotKey === 'custom') {
        // Clear for custom input
        document.getElementById('spotName').value = '';
        document.getElementById('trashName').value = '';
        document.getElementById('trashPrice').value = '';
        document.getElementById('trashPerHour').value = '';
        grindItems = [];
        updateItemsTable();
        updateResults();
    } else {
        loadSpot(spotKey);
    }
}

// ===== Fetch Market Prices =====
async function fetchPrices() {
    const statusEl = document.getElementById('priceStatus');
    const itemCountEl = document.getElementById('itemCount');

    try {
        statusEl.textContent = 'Loading...';
        statusEl.classList.remove('error');

        const response = await fetch(SHEET_URL);
        const csvText = await response.text();

        // Parse CSV - Columns: Name(0), Index(1), Count(2), TotalTrades(3), BasePrice(4), DailyVolume(5), EnhanceLevel(6), Region(8)
        const lines = csvText.split('\n');
        const headers = parseCSVLine(lines[0]);

        // Find the correct column indices
        let nameCol = 0;
        let tradesCol = 3;  // TotalTrades column
        let priceCol = 4;   // BasePrice column

        // Try to find columns by header name
        headers.forEach((header, idx) => {
            const h = header.toLowerCase().replace(/"/g, '');
            if (h === 'name' || h === 'itemname') nameCol = idx;
            if (h === 'totaltrades') tradesCol = idx;
            if (h === 'baseprice' || h === 'price') priceCol = idx;
        });

        marketPrices = { ...MANUAL_PRICES }; // Start with manual overrides
        let count = Object.keys(MANUAL_PRICES).length;

        for (let i = 1; i < lines.length; i++) {
            const cols = parseCSVLine(lines[i]);
            if (cols.length > priceCol) {
                const name = cols[nameCol]?.replace(/"/g, '').trim();
                const price = parseInt(cols[priceCol]?.replace(/"/g, '').replace(/,/g, '')) || 0;
                const trades = parseInt(cols[tradesCol]?.replace(/"/g, '').replace(/,/g, '')) || 0;

                if (name && price > 0) {
                    const key = name.toLowerCase();
                    // Don't override manual prices
                    if (!MANUAL_PRICES[key]) {
                        // Keep entry with HIGHEST TotalTrades (most traded = most accurate price)
                        const existingTrades = marketPrices[key]?.trades || 0;
                        if (!marketPrices[key] || trades > existingTrades) {
                            if (!marketPrices[key]) count++;
                            marketPrices[key] = { name, price, trades };
                        }
                    }
                }
            }
        }

        statusEl.textContent = '✓ Connected';
        itemCountEl.textContent = count.toLocaleString();

        // Update suggestions datalist
        updateItemSuggestions();

        // Refresh existing items with new prices
        updateItemsTable();
        updateResults();

    } catch (error) {
        console.error('Failed to fetch prices:', error);
        statusEl.textContent = '✗ Error';
        statusEl.classList.add('error');

        // Still load manual prices even if API fails
        marketPrices = { ...MANUAL_PRICES };
    }
}

// ===== Parse CSV Line (handles quoted values) =====
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);

    return result;
}

// ===== Update Item Suggestions =====
function updateItemSuggestions() {
    const datalist = document.getElementById('itemSuggestions');
    datalist.innerHTML = '';

    Object.values(marketPrices).forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        datalist.appendChild(option);
    });
}

// ===== Add Item =====
function addItem() {
    const nameInput = document.getElementById('newItemName');
    const rateInput = document.getElementById('newItemRate');
    const priceInput = document.getElementById('newItemPrice');

    const name = nameInput.value.trim();
    const rate = parseFloat(rateInput.value) || 0;
    const manualPrice = priceInput ? parseInt(priceInput.value) || null : null;

    if (!name) {
        alert('Please enter an item name');
        return;
    }

    // Check if item already exists
    if (grindItems.some(item => item.name.toLowerCase() === name.toLowerCase())) {
        alert('Item already added');
        return;
    }

    const newItem = { name, rate };
    if (manualPrice !== null && manualPrice > 0) {
        newItem.manualPrice = manualPrice;
    }

    grindItems.push(newItem);

    nameInput.value = '';
    rateInput.value = '';
    if (priceInput) priceInput.value = '';

    updateItemsTable();
    updateResults();
}

// ===== Toggle Item (Soft Delete) =====
function toggleItem(index) {
    grindItems[index].disabled = !grindItems[index].disabled;
    updateItemsTable();
    updateResults();
}

// ===== Permanently Remove Item =====
function removeItem(index) {
    grindItems.splice(index, 1);
    updateItemsTable();
    updateResults();
}

// ===== Update Items Table =====
function updateItemsTable() {
    const tbody = document.getElementById('itemsBody');
    tbody.innerHTML = '';

    grindItems.forEach((item, index) => {
        const priceData = item.manualPrice
            ? { name: item.name, price: item.manualPrice }
            : getPrice(item.name);
        const silverPerHour = item.disabled ? 0 : priceData.price * item.rate;
        const isManual = item.manualPrice || MANUAL_PRICES[item.name.toLowerCase()];
        const isDisabled = item.disabled;

        const tr = document.createElement('tr');
        if (isDisabled) tr.classList.add('item-disabled');

        tr.innerHTML = `
            <td>${item.name}${isManual ? ' <span class="manual-tag">M</span>' : ''}</td>
            <td class="price-cell">${formatPrice(priceData.price)}${priceData.price === 0 ? ' <span class="no-price">⚠</span>' : ''}</td>
            <td>${item.rate}</td>
            <td class="silver-cell">${isDisabled ? '—' : formatSilver(silverPerHour)}</td>
            <td>
                <button class="${isDisabled ? 'restore-btn' : 'delete-btn'}" onclick="toggleItem(${index})" title="${isDisabled ? 'Re-enable item' : 'Disable item'}">
                    ${isDisabled ? '↩' : '✕'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ===== Get Price from Market Data =====
function getPrice(itemName) {
    const key = itemName.toLowerCase();
    return marketPrices[key] || { name: itemName, price: 0 };
}

// ===== Calculate Earnings =====
function calculateEarnings(dropRateMultiplier) {
    const trashPrice = parseInt(document.getElementById('trashPrice').value) || 0;
    const trashPerHour = parseInt(document.getElementById('trashPerHour').value) || 0;

    // Trash loot is NOT affected by drop rate
    const trashSilver = trashPrice * trashPerHour;

    // Drop items ARE affected by drop rate
    let dropSilver = 0;
    grindItems.forEach(item => {
        if (item.disabled) return; // Skip disabled items
        const priceData = item.manualPrice
            ? { price: item.manualPrice }
            : getPrice(item.name);
        dropSilver += priceData.price * item.rate * dropRateMultiplier;
    });

    return {
        trash: trashSilver,
        drops: dropSilver,
        total: trashSilver + dropSilver
    };
}

// ===== Update Results Display =====
function updateResults() {
    const earnings100 = calculateEarnings(1.0);
    const earnings320 = calculateEarnings(3.2);
    const earnings370 = calculateEarnings(3.7);

    // Update 100% card
    document.getElementById('trash100').textContent = formatSilver(earnings100.trash);
    document.getElementById('drops100').textContent = formatSilver(earnings100.drops);
    document.getElementById('total100').textContent = formatSilver(earnings100.total);

    // Update 320% card
    document.getElementById('trash320').textContent = formatSilver(earnings320.trash);
    document.getElementById('drops320').textContent = formatSilver(earnings320.drops);
    document.getElementById('total320').textContent = formatSilver(earnings320.total);

    // Update 370% card
    document.getElementById('trash370').textContent = formatSilver(earnings370.trash);
    document.getElementById('drops370').textContent = formatSilver(earnings370.drops);
    document.getElementById('total370').textContent = formatSilver(earnings370.total);

    // Update comparison bars
    const maxTotal = Math.max(earnings100.total, earnings320.total, earnings370.total);

    if (maxTotal > 0) {
        document.getElementById('bar100').style.height = `${(earnings100.total / maxTotal) * 80}%`;
        document.getElementById('bar320').style.height = `${(earnings320.total / maxTotal) * 80}%`;
        document.getElementById('bar370').style.height = `${(earnings370.total / maxTotal) * 80}%`;
    }
}

// ===== Format Helpers =====
function formatSilver(value) {
    if (value >= 1e9) {
        return (value / 1e9).toFixed(2) + 'B';
    } else if (value >= 1e6) {
        return (value / 1e6).toFixed(2) + 'M';
    } else if (value >= 1e3) {
        return (value / 1e3).toFixed(1) + 'K';
    }
    return value.toLocaleString();
}

function formatPrice(value) {
    if (value >= 1e9) {
        return (value / 1e9).toFixed(2) + 'B';
    } else if (value >= 1e6) {
        return (value / 1e6).toFixed(1) + 'M';
    } else if (value >= 1e3) {
        return (value / 1e3).toFixed(0) + 'K';
    }
    return value.toLocaleString();
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Spot selection
    document.getElementById('spotSelect').addEventListener('change', onSpotChange);

    // Update results when trash loot values change
    document.getElementById('trashPrice').addEventListener('input', updateResults);
    document.getElementById('trashPerHour').addEventListener('input', updateResults);

    // Allow Enter key to add items
    document.getElementById('newItemName').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('newItemRate').focus();
        }
    });

    document.getElementById('newItemRate').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });
}

// ===== Refresh Prices =====
async function refreshPrices() {
    await fetchPrices();
}
