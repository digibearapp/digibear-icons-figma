const constants = require('./constants');


function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
}

function toPascalCase(text) {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function toCamelCase(text) {
    return lowerFirstLetter(toPascalCase(text));
}

function lowerFirstLetter(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function prefixName(name) {
    return constants.PREFIX + capitalizeFirstLetter(name);
}

module.exports = { prefixName, toCamelCase };