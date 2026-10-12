// ===============================
// Apple SKU Lookup
// ===============================

const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const modelFilter = document.getElementById("modelFilter");
const storageFilter = document.getElementById("storageFilter");
const count = document.getElementById("count");

// Populate dropdowns
function populateFilters() {

    const models = [...new Set(phones.map(p => p.model))];
    const storage = [...new Set(phones.map(p => p.storage))];

    models.sort().forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelFilter.appendChild(option);
    });

    storage.sort().forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        storageFilter.appendChild(option);
    });

}

// Build Cards
function displayProducts(list) {

    productsContainer.innerHTML = "";

    count.textContent = `${list.length} Products Found`;

    list.forEach(phone => {

        const card = document.createElement("div");

        card.className = "phone";

        card.innerHTML = `

            <h3>${phone.model}</h3>

            <p><strong>Colour:</strong> ${phone.colour}</p>

            <p><strong>Storage:</strong> ${phone.storage}</p>

            <p class="sku">${phone.sku}</p>

            <button class="copy">
                Copy SKU
            </button>

        `;

        card.querySelector(".copy").addEventListener("click", () => {

            navigator.clipboard.writeText(phone.sku);

            const button = card.querySelector(".copy");

            button.innerText = "Copied ✓";

            setTimeout(() => {

                button.innerText = "Copy SKU";

            }, 1500);

        });

        productsContainer.appendChild(card);

    });

}

// Search + Filters
function filterProducts() {

    const search = searchInput.value.toLowerCase();

    const model = modelFilter.value;

    const storage = storageFilter.value;

    const filtered = phones.filter(phone => {

        const matchesSearch =

            phone.model.toLowerCase().includes(search) ||

            phone.colour.toLowerCase().includes(search) ||

            phone.storage.toLowerCase().includes(search) ||

            phone.sku.toLowerCase().includes(search);

        const matchesModel =

            model === "" ||

            phone.model === model;

        const matchesStorage =

            storage === "" ||

            phone.storage === storage;

        return matchesSearch &&
            matchesModel &&
            matchesStorage;

    });

    displayProducts(filtered);

}

searchInput.addEventListener("input", filterProducts);

modelFilter.addEventListener("change", filterProducts);

storageFilter.addEventListener("change", filterProducts);

// Start
populateFilters();

displayProducts(phones);
