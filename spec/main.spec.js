const main = require('../src/main.js');
const core = require('../src/core.js');
const globals = require('../src/state.js');
const setup = require('./setup.js');

describe('behaviour of the main loop', function() {
    setup.testInit();
    it('assigns a configuration value to memory', function() {
        spyOn(core, 'tick');
        main.loop();
        expect(globals.memory().configuration).toBeDefined();
    });
    it('ticks the core', function() {
        spyOn(core, 'tick');
        main.loop();
        expect(core.tick).toHaveBeenCalled();
    });
});
