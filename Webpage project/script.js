// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Check if the input values match the pre-set username and password
  if (username === 'username' && password === 'password') {
    // Redirect to the dashboard page or show a success message
    window.location.href = 'loading.html';
  } else {
    // Show an error message
    alert('Invalid username or password');
  }
});
