/**
 * This module provides a proxy for the various global objects,
 * if they're not defined (in tests e.g.) we get an empty object
 */

module.exports.game = function() {
    return Game;
};

module.exports.memory = function() {
    return Memory;
};


