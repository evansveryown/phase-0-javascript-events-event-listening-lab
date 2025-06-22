// Event Listener Lab - JavaScript Code

function addingEventListener() {
  // Get the input element with id 'button'
  const input = document.getElementById('button');
  
  // Add event listener for 'click' event
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

// Alternative approach using a named function:
function addingEventListenerWithNamedFunction() {
  // Get the input element with id 'button'
  const input = document.getElementById('button');
  
  // Define a named callback function
  function clickAlert() {
    alert('I was clicked!');
  }
  
  // Add event listener using the named function
  // Note: we pass clickAlert (not clickAlert()) as the callback
  input.addEventListener('click', clickAlert);
}

// Call the function to activate the event listener
// (Choose one of the approaches above)
addingEventListener();

// If you want to test the named function approach instead, uncomment the line below:
// addingEventListenerWithNamedFunction();