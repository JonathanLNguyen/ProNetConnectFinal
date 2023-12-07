var currentContactId = null;
var chatSessions = JSON.parse(localStorage.getItem('chatSessions')) || {};

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var contacts = document.querySelectorAll(".contact");

contacts.forEach(contact => {
    contact.addEventListener("click", function() {
        var contactId = this.getAttribute("data-contact-id");
        switchContact(contactId);
        updateContactList();
        updateSelectedContact(contactId);
    });
});

button.addEventListener("click", sendMessage);

textbox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    if (!currentContactId || !textbox.value.trim()) return;
    var newMessage = {
        text: textbox.value.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    addMessageToSession(currentContactId, newMessage);
    displayMessages(currentContactId);
    textbox.value = "";
    saveChatSessions();
    updateContactList();
}

function switchContact(contactId) {
    currentContactId = contactId;
    displayMessages(contactId);
}

function addMessageToSession(contactId, message) {
    if (!chatSessions[contactId]) {
        chatSessions[contactId] = [];
    }
    chatSessions[contactId].push(message);
}

function displayMessages(contactId) {
    var messagesList = chatSessions[contactId] || [];
    messages.innerHTML = ""; // Clear current messages

    messagesList.forEach(({ text, timestamp }) => {
        var messageElement = document.createElement("li");
        messageElement.textContent = text;
        messageElement.className = 'chat-message';
        var timestampElement = document.createElement("div");
        timestampElement.className = 'timestamp';
        timestampElement.textContent = timestamp;
        timestampElement.style.fontSize = '0.75em';
        messageElement.appendChild(timestampElement);
        messages.appendChild(messageElement);
    });
}

function saveChatSessions() {
    localStorage.setItem('chatSessions', JSON.stringify(chatSessions));
}

function updateContactList() {
    contacts.forEach(contact => {
        var contactId = contact.getAttribute("data-contact-id");
        var lastMessage = chatSessions[contactId]?.slice(-1)[0];
        var lastMessageInfo = contact.querySelector('.last-message-info');

        if (lastMessage) {
            lastMessageInfo.textContent = lastMessage.text.substring(0, 30) + 
                (lastMessage.text.length > 30 ? '...' : '') + 
                ' - ' + lastMessage.timestamp;
        } else {
            lastMessageInfo.textContent = '';
        }
    });
}

function updateSelectedContact(contactId) {
    contacts.forEach(contact => {
        if (contact.getAttribute("data-contact-id") === contactId) {
            contact.classList.add("selected");
        } else {
            contact.classList.remove("selected");
        }
    });
    var chatHeader = document.querySelector(".chat-header");
    if (chatHeader) {
        chatHeader.textContent = "Contact " + contactId;
    }
}

updateContactList();
