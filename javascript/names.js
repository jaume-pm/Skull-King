// Read the numPlayers variable from local db
const numPlayers = localdb.numPlayers;

// Create an empty array to store player names
const playerNames = [];

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the input value from the form
    const nameInput = document.getElementById('nameInput');
    const playerName = nameInput.value;

    // Add the player name to the array
    playerNames.push(playerName);

    // Clear the input field
    nameInput.value = '';

    // Redirect to calculator.html
    window.location.href = './calculator.html';
}

// Create the form element
const form = document.createElement('form');

// Create the input element
const input = document.createElement('input');
input.type = 'text';
input.id = 'nameInput';
input.placeholder = 'Enter player name';

// Create the submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';

// Add event listener to the form
form.addEventListener('submit', handleSubmit);

// Append the input and submit button to the form
form.appendChild(input);
form.appendChild(submitButton);

// Append the form to the body of the webpage
document.body.appendChild(form);