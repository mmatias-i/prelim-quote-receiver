function bool (string, def) {
    if (!string) {
        return def;
    }
    return string.toLowerCase() === 'true';
}

module.exports = {
    bool,
};
