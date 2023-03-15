"use strict";

const chat = {
    author: "Pedro",
    init() {
        this.fetchMessages();

    },
    sendMessage() {
        fetch('https://dev2chat.onrender.com/message',
        {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)

        })
        document.querySelector('#chatForm').addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('berichtje');
        })
        this.fetchMessages
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
        .then(incommingMessage => incommingMessage.json())
        .then(function (data) {
            console.log(data);
           
            data.sort(function(a, b){
                if (a.id < b.id){
                    return -1
                } else {
                    return 1
                }
            })
           data.forEach(function(data) {
            const htmlMessage = `
            <div class="messageItem">
                <div class="header">
                    <span class="author">${data.author}</span>
                    <span class="time">${data.created_at}</span>
                </div>
                <p class="messageLine">
                 ${data.message}
                </p>
            </div>
      `

          document.querySelector('#messageContainer').insertAdjacentHTML('beforeend', htmlMessage)
            
           });
            
            
        });
        
        
    },
    renderMessage(message) {
    }

}

function karsten() {
    const lover = "dreamPartner";
}

chat.init();