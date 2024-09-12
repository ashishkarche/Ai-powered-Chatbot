# Chatbot with Dynamic Responses and Mathematical Operations

This is a chatbot project built with JavaScript that dynamically responds to user input. The chatbot fetches responses from a JSON file and can handle basic greetings, mathematical operations (such as addition, subtraction, trigonometric functions, and factorials), and default responses for unrecognized inputs.

## Features

- **Dynamic Responses:** Loads responses from a `response.json` file, allowing easy updates to chatbot replies.
- **Mathematical Calculations:** Supports operations like addition, subtraction, multiplication, division, trigonometric functions (`sin`, `cos`, `tan`), exponentiation, and factorials.
- **Custom Responses:** Predefined responses for greetings (e.g., "hello", "hi") and farewells (e.g., "goodbye", "bye").
- **Error Handling:** Deals with invalid inputs, division by zero, and other mathematical errors gracefully.

## Project Structure

```
/project
  /script
    - responses.js   # Main JavaScript file for chatbot logic
  /json
    - response.json  # Contains predefined responses for the chatbot
  index.html         # Chatbot interface
  README.md          # Project documentation
```

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-chatbot-project.git
   cd your-chatbot-project
   ```

2. **Run the project:**

   - Open `index.html` in a browser to interact with the chatbot.

3. **Edit Responses:**

   - Modify the `response.json` file inside the `/json` directory to customize chatbot responses.
   - The JSON file contains sections like `greetingResponse`, `goodbyeResponse`, and `defaultResponse` for easy configuration.

## Usage

1. **Greeting and Farewell Responses:**
   - The chatbot responds to greetings such as `hello`, `hi`, and farewells like `goodbye` with random replies from the corresponding JSON data.
   
2. **Mathematical Operations:**
   - To perform calculations, input commands like:
     - `calculate 3 + 2`
     - `calculate sin 45`
     - `calculate factorial 5`
   
   - Supported operations include:
     - Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`)
     - Modulus (`%`), Exponentiation (`^`)
     - Trigonometric functions (`sin`, `cos`, `tan`)
     - Factorials (`factorial`)

3. **Fallback for Unrecognized Input:**
   - The chatbot provides a default response for unrecognized inputs from the `defaultResponse` section in the `response.json` file.

## Customization

You can customize the chatbot by modifying:

1. **Responses:**
   - Update the `response.json` file to change or add predefined responses.
   
2. **Math Operations:**
   - Expand the mathematical functionality by editing the `mathOperation()` function in `responses.js`.

3. **UI:**
   - Adjust the chatbot’s appearance by modifying `index.html` and its associated styles.

## Example JSON (`response.json`)

```json
{
  "greetingResponse": [
    "Hello! How can I assist you today?",
    "Hi there! What can I do for you?",
    "Hey! Need help with something?"
  ],
  "goodbyeResponse": [
    "Goodbye! Have a great day!",
    "Bye! See you soon!",
    "Take care! Come back anytime!"
  ],
  "defaultResponse": [
    "I'm not sure how to respond to that.",
    "Could you please rephrase your question?",
    "I don't understand that, can you ask differently?"
  ]
}
```

## Technologies Used

- **JavaScript:** Core logic for chatbot interaction and mathematical operations.
- **JSON:** Used to manage chatbot responses.
- **HTML/CSS:** For creating and styling the chatbot's user interface.

## Future Enhancements

- **Speech Recognition:** Integrate voice input and output for more interactive communication.
- **AI Integration:** Use machine learning for more dynamic, context-aware responses.
- **Database Support:** Store user interactions and responses for future improvements and learning.

## Contributing

Feel free to fork this repository, submit pull requests, or suggest features via issues. Contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Author

- **Your Name**
- GitHub: [Ashish Karche](https://github.com/ashishkarche)
- LinkedIn: [Ashish Karche ](https://www.linkedin.com/in/ashish-karche-1a422b317/)

