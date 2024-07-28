// Read the numPlayers variable from local storage
const numPlayers = localStorage.numPlayers;

const playerNames = JSON.parse(localStorage.playerNames);

const pointsMatrix = JSON.parse(localStorage.pointsMatrix);

var round = 0;

//Create an array to store player's scores and initialize it to 0
const playerScores = [];
for(let i = 0; i < numPlayers; i++) {
    playerScores.push(0);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    for(let i = 0; i < numPlayers; i++) {
        const input = document.getElementById(`playerInput${i}`);
        pointsMatrix[round][i] = input.value;
    }
    calculateScores();
    printMatrix(pointsMatrix);

    round++;

}

//Function to calculate scores using skull king game rules and update playerScores array
function calculateScores() {
    for(let i = 0; i < numPlayers; i++) {
        let score = 0;
        for(let j = 0; j < pointsMatrix.length; j += 2) {
            const bet = parseInt(pointsMatrix[j][i], 10); // Player's bet for the round
            const wins = parseInt(pointsMatrix[j + 1][i], 10); // Player's actual wins for the round
            if (bet === wins) {
                // Score 20 points for matching bet, plus 10 points for each trick won
                score += 20 + (wins * 10);
            } else {
                // Lose 10 points for each trick difference
                score -= Math.abs(bet - wins) * 10;
            }
        }
        playerScores[i] = score;
    }
    showScores();
}


//Function to print matrix in html
function printMatrix(matrix) {
    const table = document.getElementById('roundScores');
    table.innerHTML = ''; // Clear the existing content of the table

    // Create the header row with player names and round number
    const headerRow = document.createElement('tr');
    const roundHeaderCell = document.createElement('th');
    roundHeaderCell.textContent = 'Round';
    headerRow.appendChild(roundHeaderCell);
    for (let i = 0; i < numPlayers; i++) {
        const headerCell = document.createElement('th');
        headerCell.textContent = playerNames[i];
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    // Create the rows for bets and games won
    for (let i = 0; i < matrix.length; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        if (i % 2 === 0) {
            cell.textContent = 'Bet';
        } else {
            cell.textContent = 'Games Won';
        }
        row.appendChild(cell);
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = matrix[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

//Function to show scores in a table in calculator.html that has id scores
function showScores() {
    const table = document.getElementById('scores');
    table.innerHTML = ''; // Clear the existing content of the table
    for (let i = 0; i < numPlayers; i++) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = playerNames[i];
        row.appendChild(nameCell);
        const scoreCell = document.createElement('td');
        scoreCell.textContent = playerScores[i];
        row.appendChild(scoreCell);
        table.appendChild(row);
    }
}

// Create the form element
const form = document.createElement('form');

// Create the input element
for(let i = 0; i < numPlayers; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `playerInput${i}`;
    input.placeholder = `${playerNames[i]}'s ${round % 2 === 0 ? 'bets' : 'games won'}`;
    form.appendChild(input);
}


// Create the submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';

// Add event listener to the form
form.addEventListener('submit', handleSubmit);

// Append the input and submit button to the form
form.appendChild(submitButton);

// Append the form to the body of the webpage
document.body.appendChild(form);

showScores();