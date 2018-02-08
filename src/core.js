const logging = require('./logging.js');

module.exports.tick = function(state) {
    // TODO: Strategic decisions
    // TODO: Room level decisions
    // TODO: Resource allocation
    // TODO: Spawn things
    // TODO: Individual agents
    logging.debug(state, 'sample debug message');
    logging.debug(state, 'tick: ' + state.game().time);
    console.log('hello world');
};

