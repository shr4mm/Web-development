const EventEmitter = require('events');
const MessageStorage = require('./MessageStorage');

class MessageManager extends EventEmitter {
    constructor() {
        super();
        this.messageStorage = new MessageStorage();

        this.on('receive', (message) => {
            this.messageStorage.addMessage(message);
            console.log(`Message received: ${message}`);
        });
    }

    send(message) {
        console.log(`Sending message: ${message}`);
        this.emit('send', message);
    }

    receive(message) {
        this.emit('receive', message);
    }

    showReceived() {
        const messages = this.messageStorage.getMessages();
        console.log('Received messages:', messages);
    }
}

module.exports = MessageManager;
