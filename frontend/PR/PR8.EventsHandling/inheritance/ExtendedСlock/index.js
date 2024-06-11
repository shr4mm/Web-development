const ExtendedClock = require('./extended-clock');

let clock = new ExtendedClock({ template: 'h:m:s', precision: 2000 });
clock.start();
