const { bool } = require('./config-utils');

module.exports = {
    log: {
        console: {
            enabled: bool(process.env.LOG_CONSOLE, false),
            level: process.env.LOG_CONSOLE_LEVEL || 'info',
        },
        loggly: {
            enabled: bool(process.env.LOG_LOGGLY, true),
            source_group_tags: ['prelim-quote-generator', 'production'],
            level: process.env.LOG_LOGGLY_LEVEL || 'info',
        },
    },
};
