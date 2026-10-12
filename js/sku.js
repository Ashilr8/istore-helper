const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const rows = document.querySelectorAll("#skuTable tbody tr");

    rows.forEach(row => {

        row.style.display =
            row.innerText.toLowerCase().includes(value)
                ? ""
                : "none";

    });

});

// Click to copy SKU

document.querySelectorAll("#skuTable tbody tr").forEach(row => {

    row.addEventListener("click", () => {

        const sku = row.cells[3].innerText;

        navigator.clipboard.writeText(sku);

        alert("Copied: " + sku);

    });

});
