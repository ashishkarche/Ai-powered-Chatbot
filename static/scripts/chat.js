// Set up speech recognition
let recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = "en-US";

// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    } else {
        ampm = "AM"
    }

    let time = hours + ":" + minutes + " " + ampm;
    return time;
}
// Gets the first message
function firstBotMessage() {
    let firstMessage = "welcome! How can I assist you today?"
    document.getElementById("botStarterMessage").innerHTML = `
    <div class="message-container">
    <img src="static/images/bot_avatar.png" class="avatar">
    <div class="message">
        <p class="botText"><span>${firstMessage}</span></p>
    </div>
</div>`;

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = `
    <div class="message-container">
        <img src="static/images/bot_avatar.png" class="avatar">
        <div class="message">
            <p class="botText"><span>${botResponse}</span></p>
        </div>
    </div>`;
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Hello";
    }

    let userHtml = `
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
    }, 1000)
}

// Handle speech recognition result
recognition.onresult = function (event) {
    let text = event.results[0][0].transcript;
    $("#textInput").val(text);
    getResponse();
};

// Handle microphone button click
$("#mic-icon").click(function () {
    recognition.start();
});



// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);
}

// Handles sending text via microphone
function micSendText() {
    recognition.start();
    $("#mic-icon").addClass("clicked"); // Add "clicked" class to mic-icon
    setTimeout(() => {
        $("#mic-icon").removeClass("clicked"); // Remove "clicked" class after 1 second
    }, 1000);
}

function sendButton() {
    getResponse();
}


// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
