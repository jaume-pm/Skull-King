// Read the numPlayers variable from local storage
const numPlayers = localStorage.numPlayers;

// Create an empty array to store player names
const playerNames = [];

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    for(let i = 0; i < numPlayers; i++) {
        const input = document.getElementById(`nameInput${i}`);
        playerNames.push(input.value);
    }

    // Store playerNames in local storage
    localStorage.setItem('playerNames', JSON.stringify(playerNames));

    // Redirect to calculator.html
    window.location.href = './calculator.html';
}

// Create the form element
const form = document.createElement('form');

// Create the input element
for(let i = 0; i < numPlayers; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `nameInput${i}`;
    input.placeholder = `Enter player ${i + 1} name`;
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