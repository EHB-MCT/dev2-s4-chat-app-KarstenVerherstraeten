"use strict";

const chat = {
    author: "Pedro",
    init() {
        this.fetchMessages();
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
        .then(incommingMessage => incommingMessage.json())
        .then(data => console.log(data))
        
        // document.querySelector('.author').innerHTML(.author)
    },
    renderMessage(message) {
    }

}

chat.init();