const MessageManager = require('./MessageManager');

const manager = new MessageManager();

manager.send('Hello World'); 
manager.receive('Hello World'); 
manager.receive('How are you?');
manager.receive('Goodbye!');

manager.showReceived();
