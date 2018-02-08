const configuration = require('./configuration.js');
const core = require('./core.js');
const state = require('./state.js');

/**
 * Main entry point, set up configuration and start engine.
 */
module.exports.loop = function () {
    state.memory().configuration = configuration.debug;
    core.tick(state);
};