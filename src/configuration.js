const base = {
    'logLevel': 'info',
    'isDebug': false
};

const debug = Object.assign(base, {
    'logLevel': 'debug',
    'isDebug': true
});

module.exports.base = base;
module.exports.debug = debug;

