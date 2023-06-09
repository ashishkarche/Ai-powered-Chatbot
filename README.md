# about response.js :
>This code defines an object called `**responses**`, which contains three properties: greetingResponse, goodbyeResponse, and defaultResponse. Each property is an array of strings, containing different possible responses that a bot can give based on user input.

>The `**getBotResponse(input)**` function takes a user input as an argument and returns a response from the responses object based on the input. It first checks if the input contains any greeting words (hello, hi, hey) or goodbye words (goodbye, bye), and if it does, it returns a random response from the corresponding array in the responses object. If the input does not end with a question mark, it adds one.
>If the input matches one of the properties in the responses object, it returns a random response from that property's array. If the input starts with "calculate ", it calls the mathOperation function with the rest of the input (without the "calculate" part) as an argument. If the input does not match any of the above conditions, it returns a random response from the defaultResponse array.

>The `**mathOperation**` function takes a string as an argument and performs a mathematical operation based on the input. It first checks if the input starts with "sin", "cos", "tan", or "factorial", and performs the corresponding operation with the rest of the input as an argument. If the input does not start with any of these, it splits the input into two numbers and an operator, performs the corresponding operation, and returns the result as a string.

>The `**factorial**` function takes a number as an argument and recursively calculates the factorial of that number. If the number is 0, it returns 1. If the number is greater than 0, it multiplies the number by the factorial of the number minus 1, and returns the result.

# about chat.js :
>The **getTime()** function returns the current time in 12-hour format with AM/PM. It creates a new Date() object to get the current time and extracts the hours and minutes using the getHours() and getMinutes() methods. It then checks if the hours and minutes are less than 10 and adds a leading 0 if true. It then checks if the hours are greater than 12, and if so, subtracts 12 and sets the ampm variable to "PM", otherwise it sets ampm to "AM". Finally, it concatenates the hours, minutes, and am/pm values into a string and returns it.

>The **firstBotMessage()** function sets the initial message displayed by the chatbot. It sets the firstMessage variable to "Hello and welcome! How can I assist you today?" and then uses the getElementById() method to set the innerHTML of the botStarterMessage element to a formatted HTML string containing the firstMessage. It also calls the getTime() function to get the current time and appends it to the chatbox.

>The **getHardResponse(userText)** function gets the response from the chatbot and appends it to the chatbox. It calls the getBotResponse(userText) function, which returns a response based on the user input. It then uses the response to create an HTML string and appends it to the chatbox. Finally, it uses the scrollIntoView() method to scroll the chatbox to the bottom.

>The **getResponse()** function handles user input. It gets the text from the #textInput element, and if it's empty, it sets it to "Hello". It then creates an HTML string with the user input and appends it to the chatbox. It clears the #textInput element and scrolls the chatbox to the bottom. It then calls the getHardResponse(userText) function with a 1 second delay using setTimeout().

>The **buttonSendText(sampleText)** function handles sending text via button clicks. It creates an HTML string with the sample text and appends it to the chatbox. It clears the #textInput element and scrolls the chatbox to the bottom.

>The **sendButton()** function is called when the send button is clicked. It simply calls the getResponse() function.

>The **$("#textInput").keypress()** function is a jQuery event listener that listens for the Enter key to be pressed. If the Enter key is pressed, it calls the getResponse() function.

>The `microphone` functionality in the code uses the Web Speech API's `webkitSpeechRecognition` interface to allow users to input text into the chatbot using voice recognition. 

>When the user clicks on the microphone icon, the `mic-icon` click event handler function `micSendText` is triggered. This function starts the speech recognition process by calling the `start()` method on the `recognition` object. 

>The `recognition` object has several properties that are set up before the speech recognition process begins. `continuous` is set to false, which means that speech recognition will stop after the user has finished speaking. `interimResults` is also set to false, which means that speech recognition will only return a final result rather than updating the text output as the user speaks. The `lang` property specifies the language that the speech recognition should be performed in.

>Once the user has finished speaking, the `onresult` event handler function is triggered. This function extracts the user's speech from the `event` object and passes it to the `getResponse` function to generate a response. 

>The microphone functionality also includes a `buttonSendText` function which is called when the user clicks the send button or presses enter. This function takes the user's text input and creates a new HTML element with a class of `userText` to display the user's message in the chat window.#� 
