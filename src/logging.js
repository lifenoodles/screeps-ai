function isDebugLogging(state) {
    return state.memory().configuration.logLevel === 'debug';
}

module.exports.debug = function(state, string) {
    if (isDebugLogging(state)) {
        console.log(string);
    }
};