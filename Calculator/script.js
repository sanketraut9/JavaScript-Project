// Function to calculate the factorial of a number
    function calculateFactorial() {
      var numberInput = document.getElementById('numberInput');
      var resultElement = document.getElementById('result');
      
      // Get the input value
      var number = parseInt(numberInput.value);
      
      // Perform input validation
      if (isNaN(number) || number < 0) {
        resultElement.textContent = 'Invalid input. Please enter a non-negative number.';
        return;
      }
      
      // Calculate the factorial
      var factorial = 1;
      for (var i = 1; i <= number; i++) {
        factorial *= i;
      }
      
      // Display the result
      resultElement.textContent = 'The factorial of ' + number + ' is: ' + factorial;
    }