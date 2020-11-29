const { bool } = require('./config-utils');

module.exports = {
    log: {
        namespace: process.env.NAMESPACE || 'staging',
        console: {
            enabled: bool(process.env.LOG_CONSOLE, false),
            level: process.env.LOG_CONSOLE_LEVEL || 'info',
        },
        loggly: {
            enabled: bool(process.env.LOG_LOGGLY, true),
            source_group_tags: ['prelim-quote-generator', 'staging'],
            level: process.env.LOG_LOGGLY_LEVEL || 'info',
        },
    },
};
