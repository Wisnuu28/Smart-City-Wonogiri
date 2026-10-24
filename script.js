document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const table = document.querySelector('.data-table');
    const rows = table.querySelectorAll('tbody tr');

    searchInput.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        
        rows.forEach(row => {
            const kecamatanCell = row.querySelector('td:first-child');
            if (kecamatanCell) {
                const text = kecamatanCell.textContent.toLowerCase();
                if (text.includes(term)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        });
    });

    // Formatting numbers to have thousand separators
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        for (let i = 1; i < cells.length; i++) {
            let val = parseFloat(cells[i].textContent);
            if (!isNaN(val)) {
                // cells[i].textContent = val.toLocaleString('id-ID'); // Optional format
            }
        }
    });
});
