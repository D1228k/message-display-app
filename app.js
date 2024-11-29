const messages = [
    "hello",
    "hope you doing good",
    "sorryyyyyyyyyy",
    "tattaaa"
];

let currentMessageIndex = 0;
const messageElement = document.getElementById("message");

function displayMessage() {
    messageElement.textContent = messages[currentMessageIndex];
    messageElement.style.opacity = 0; // Reset opacity before animation

    // Trigger a new animation by reapplying the class
    messageElement.offsetHeight; // Trigger reflow to restart animation
    messageElement.style.animation = "none";
    setTimeout(() => {
        messageElement.style.animation = "fadeIn 2s forwards";
    }, 20);

    currentMessageIndex++;

    if (currentMessageIndex < messages.length) {
        setTimeout(displayMessage, 3000); // Wait 3 seconds before showing the next message
    }
}

// Start displaying the first message
displayMessage();
