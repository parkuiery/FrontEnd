document.querySelector('#assignSeats').addEventListener('click', function() {
    const table = document.querySelector('table');
    const cells = table.getElementsByTagName('td');
    const numPeople = parseInt(document.querySelector('#numPeople').value);
    
    const fixedNumbers = [];
    for (let cell of cells) {
        if (cell.classList.contains('fixed')) {
            fixedNumbers.push(parseInt(cell.textContent));
        }
    }

    const availableNumbers = Array.from({ length: 16 }, (_, i) => i + 1)
                                  .filter(num => !fixedNumbers.includes(num));

    for (let i = availableNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableNumbers[i], availableNumbers[j]] = [availableNumbers[j], availableNumbers[i]];
    }

    let index = 0;
    for (let cell of cells) {
        if (!cell.classList.contains('fixed')) {
            if (index < numPeople) {
                cell.textContent = availableNumbers[index++];
            } else {
                cell.textContent = '';
            }
        }
    }
});

const table = document.querySelector('table');
const cells = table.getElementsByTagName('td');

for (let cell of cells) {
    cell.addEventListener('click', function() {
        if (cell.classList.contains('fixed')) {
            cell.classList.remove('fixed');
        } else {
            cell.classList.add('fixed');
        }
    });
}
