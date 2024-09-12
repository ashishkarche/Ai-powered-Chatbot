// Set up speech recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = "en-US";

// Collapsible functionality
const coll = document.getElementsByClassName("collapsible");
Array.from(coll).forEach(element => {
    element.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
    });
});

// Get current time
function getTime() {
    const today = new Date();
    let hours = today.getHours();
    const minutes = today.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    return time;
}

// Initial bot message
function firstBotMessage() {
    const firstMessage = "Welcome! How can I assist you today?";
    document.getElementById("botStarterMessage").innerHTML = `
    <div class="message-container">
        <img src="static/images/bot_avatar.png" class="avatar">
        <div class="message">
            <p class="botText"><span>${firstMessage}</span></p>
        </div>
    </div>`;
    document.getElementById("chat-timestamp").textContent = getTime();
    document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();

// Get bot response
function getHardResponse(userText) {
    const botResponse = getBotResponse(userText); // Ensure getBotResponse is defined in responses.js
    const botHtml = `
    <div class="message-container">
        <img src="static/images/bot_avatar.png" class="avatar">
        <div class="message">
            <p class="botText"><span>${botResponse}</span></p>
        </div>
    </div>`;
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Process user input
function getResponse() {
    let userText = $("#textInput").val().trim() || "Hello";
    const userHtml = `
    <div class="message-container user-message">
        <img src="static/images/user_avatar.png" class="avatar">
        <div class="message">
            <p class="userText"><span>${userText}</span></p>
        </div>
    </div>`;
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000);
}

// Handle speech recognition result
recognition.onresult = function (event) {
    const text = event.results[0][0].transcript;
    $("#textInput").val(text);
    getResponse();
};

// Handle microphone button click
$("#mic-icon").click(function () {
    recognition.start();
    $(this).addClass("clicked");
    setTimeout(() => $(this).removeClass("clicked"), 1000);
});

// Handle sending text via button clicks
function sendButton() {
    getResponse();
}

// Press Enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which === 13) {
        getResponse();
    }
});
