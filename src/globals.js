/**
 * This module provides a proxy for the various global objects,
 * if they're not defined (in tests e.g.) we get an empty object
 */

try {
    module.exports.Game = Game;
    module.exports.Memory = Memory;
} catch (error) {
    module.exports.Game = {};
    module.exports.Memory = {};
}


