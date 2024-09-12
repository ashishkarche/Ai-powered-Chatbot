let responses = {};

// Function to load responses from JSON file
async function loadResponses() {
    try {
        const response = await fetch('json/response.json');
        responses = await response.json();
    } catch (error) {
        console.error('Error loading responses:', error);
    }
}

// Call loadResponses once when the script loads
loadResponses();

// Get a random response for the input
function getBotResponse(input) {
    if (!responses.greetingResponse) {
        return 'Responses are not loaded yet. Please try again later.';
    }

    const lowercasedInput = input.toLowerCase().trim();

    // Check for Hello or Goodbye input
    if (['hello', 'hi', 'hey'].includes(lowercasedInput)) {
        return getRandomResponse(responses.greetingResponse);
    }
    if (['goodbye', 'bye'].includes(lowercasedInput)) {
        return getRandomResponse(responses.goodbyeResponse);
    }

    // Check if the input ends with a question mark
    if (!lowercasedInput.endsWith('?')) {
        input += '?';
    }

    // Check if the input matches a pre-defined response
    if (responses[lowercasedInput]) {
        return getRandomResponse(responses[lowercasedInput]);
    }

    // Check if the input starts with "calculate "
    if (lowercasedInput.startsWith('calculate ')) {
        const mathInput = lowercasedInput.slice(10);
        return mathOperation(mathInput);
    }

    // Default response
    return getRandomResponse(responses.defaultResponse);
}

// Function to get a random response
function getRandomResponse(responseArray) {
    return responseArray[Math.floor(Math.random() * responseArray.length)];
}

function mathOperation(input) {
    let result;
    if (input.startsWith('sin ')) {
        const num = parseFloat(input.slice(4));
        result = Math.sin(num);
    } else if (input.startsWith('cos ')) {
        const num = parseFloat(input.slice(4));
        result = Math.cos(num);
    } else if (input.startsWith('tan ')) {
        const num = parseFloat(input.slice(4));
        result = Math.tan(num);
    } else if (input.startsWith('factorial ')) {
        const num = parseFloat(input.slice(10));
        result = factorial(num);
    } else {
        const [num1, operator, num2] = input.split(' ').map(item => item.trim());
        const num1Value = parseFloat(num1);
        const num2Value = parseFloat(num2);

        // Validate input
        if (isNaN(num1Value) || isNaN(num2Value)) {
            return 'Invalid numbers provided for the calculation.';
        }

        switch (operator) {
            case '+':
                result = num1Value + num2Value;
                break;
            case '-':
                result = num1Value - num2Value;
                break;
            case '*':
                result = num1Value * num2Value;
                break;
            case '/':
                result = num2Value !== 0 ? num1Value / num2Value : 'Division by zero is not allowed.';
                break;
            case '%':
                result = num1Value % num2Value;
                break;
            case '^':
                result = Math.pow(num1Value, num2Value);
                break;
            default:
                result = 'Invalid operation';
                break;
        }
    }
    return result.toString();
}

function factorial(num) {
    if (num < 0) {
        return 'Factorial is not defined for negative numbers.';
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
