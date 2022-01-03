import * as constants from './constants.mjs';

export function clearAndUpper(text) {
    return text.replace(/-/, '').toUpperCase();
}

export function toPascalCase(text) {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

export function toCamelCase(text) {
    return lowerFirstLetter(toPascalCase(text));
}

export function lowerFirstLetter(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
}

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function prefixName(name) {
    return constants.PREFIX + capitalizeFirstLetter(name);
}
