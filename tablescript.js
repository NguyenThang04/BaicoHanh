function calculateTotals() {
    const rows = document.querySelectorAll('#itemTable tbody tr');
    let grandTotal = 0;
    rows.forEach(row => {
        const quantity = parseInt(row.querySelector('.quantity').value);
        const price = parseInt(row.querySelector('.price').value);
        const total = quantity * price || 0;
        row.querySelector('.total').textContent = total;
        grandTotal += total;
    });
    document.getElementById('grandTotal').textContent = grandTotal;
}

document.querySelectorAll('.quantity, .price').forEach(input => {
    input.addEventListener('input', calculateTotals);
});

calculateTotals();