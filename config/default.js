const os = require('os');
const { bool } = require('./config-utils');

module.exports = {
    log: {
        namespace: process.env.NAMESPACE || 'local',
        hostname: process.env.HOSTNAME || os.hostname(),
        exitOnError: true,
        handleException: true,
        instance_name: process.env.INSTANCE_NAME || process.env.NODE_ENV + '_instance',
        enable_context_id: false,
        location_level: process.env.LOG_LOCATION_LEVEL || 'info',
        filter_static_content: process.env.FILTER_STATIC_CONTENT || true,
        omit_request_patterns: process.env.OMIT_REQUEST_PATTERNS || ['.png', '.jpg', '.jpeg', '.bmp', '.tif', '.tiff', '.css', '.pdf', '.htm', '.html'],
        timestamp: bool(process.env.LOG_TIMESTAMP, true),
        database: false,
        print_error_on_logger_misuse: bool(process.env.PRINT_ERROR_ON_LOGGER_MISUSE, true),
        console: {
            enabled: bool(process.env.LOG_CONSOLE, true),
            level: process.env.LOG_CONSOLE_LEVEL || 'info',
        },
        loggly: {
            enabled: bool(process.env.LOG_LOGGLY, false),
            token: process.env.LOG_LOGGLY_TOKEN,
            subdomain: 'hippo.loggly.com',
            source_group_tags: ['prelim-quote-generator', 'develop'],
            level: process.env.LOG_LOGGLY_LEVEL || 'info',
        },
    },
    httpPort: Number(process.env.PORT || 4338),
};
