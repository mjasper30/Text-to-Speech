// Initialize the speech synthesis API
const synth = window.speechSynthesis;

// Get required elements
const textInput = document.getElementById('text-input');
const speakButton = document.getElementById('speak-button');

// Function to speak the text
function speakText() {
    // Create a new SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance(textInput.value);

    // Speak the text
    synth.speak(utterance);
}

// Add click event listener to the speak button
speakButton.addEventListener('click', speakText);
