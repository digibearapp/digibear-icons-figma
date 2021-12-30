const path = require('path');

module.exports = Object.freeze({
    ICONS_METADATA_JSON_PATH: path.join(__dirname, './digibear-icons-metadata.json'),
    ICONS_METADATA_OUTPUT_PATH: path.join(__dirname, '../src/app/icon-metadata/digibear-icons-metadata.ts'),
});
