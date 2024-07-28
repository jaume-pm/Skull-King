// Set the ID for the count field in home.html
const countField = document.getElementById('numPlayers');
function createMatrix(event) {

    event.preventDefault();

    // Get the number of players from the input field
    const numberOfPlayers = parseInt(countField.value);

    // Create the pointsMatrix
    const rows = 10*2;
    const columns = numberOfPlayers;
    const pointsMatrix = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(undefined); // Initialize each cell with 0
        }
        pointsMatrix.push(row);
    }

    // Store numPlayers in local storage
    localStorage.setItem('numPlayers', numberOfPlayers);

    // Store pointsMatrix in local storage
    localStorage.setItem('pointsMatrix', JSON.stringify(pointsMatrix));

    window.location.href = './names.html';
}

// Add event listener to the button
const button = document.getElementById('startGame');
button.addEventListener('click', createMatrix);