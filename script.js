document.getElementById('storeButton').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    
    if (selectedOption) {
        const value = selectedOption.value;
        const tableBody = document.getElementById('resultTable').querySelector('tbody');
        const newRow = document.createElement('tr');
        const indexCell = document.createElement('td');
        const valueCell = document.createElement('td');

        indexCell.textContent = tableBody.children.length + 1;
        valueCell.textContent = value;

        newRow.appendChild(indexCell);
        newRow.appendChild(valueCell);
        tableBody.appendChild(newRow);
    } else {
        alert('Please select an option!');
    }
});
