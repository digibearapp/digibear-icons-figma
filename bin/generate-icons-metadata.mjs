import fs from 'fs';
import chalk from 'chalk';
import * as paths from './paths.mjs';
import * as constants from './constants.mjs';
import {prefixName, toCamelCase} from './utils.mjs';

export function generateIconsMetadata() {
    let rawIconsMetadata = JSON.parse(fs.readFileSync(paths.ICONS_METADATA_JSON_PATH));
    const iconsMetadata = Object.keys(rawIconsMetadata)
        .sort()
        .reduce((obj, key) => {
            obj[key] = rawIconsMetadata[key];
            return obj;
        }, {});
    let importStatements = [];
    let iconEntries = [];
    let categories = new Set([]);
    Object.keys(iconsMetadata).forEach((iconMetadataKey) => {
        const camelizedIconName = toCamelCase(iconMetadataKey);
        const prefixedIconName = prefixName(camelizedIconName);
        const iconMetadata = iconsMetadata[iconMetadataKey];
        const importStatement = generateImportStatement(prefixedIconName);
        const iconEntry = generateIconEntry(camelizedIconName, prefixedIconName, iconMetadata);
        iconMetadata.categories.forEach((category) => {
            categories.add(category);
        });
        importStatements.push(importStatement);
        iconEntries.push(iconEntry);
    });
    const sortedCategories = Array.from(categories).sort();
    let fileLines = generateFileLines(importStatements, iconEntries, sortedCategories);
    createMetadataFile(fileLines);
}

function generateImportStatement(prefixedIconName) {
    return `import { ${prefixedIconName} } from "@digibearapp/digibear-svg-icons"`;
}

function generateIconEntry(camelizedIconName, prefixedIconName, iconMetadata) {
    return `\
  ${camelizedIconName}: {
    data: ${prefixedIconName},
    tags: [
      ${iconMetadata.tags.map((tag) => '"' + tag + '"').join(',\n\t\t\t')}
    ],
    categories: [
      ${iconMetadata.categories.map((category) => '"' + category + '"').join(',\n\t\t\t')}
    ]
  }`;
}

function generateFileLines(importStatements, iconEntries, categories) {
    return `\
${constants.HEADER}
${importStatements.join('\n')}
import { IconMetadataCollection } from "./icon-metadata";

export const iconMetadataCollection: IconMetadataCollection = {
${iconEntries.join(',\n')}
};

export const IconCategoryKeys = [
  "All",
  ${categories.map((category) => '"' + category + '"').join(',\n\t')}
] as const;
export type IconCategory = typeof IconCategoryKeys[number];
export function isIconCategory(value: string): value is IconCategory {
    return IconCategoryKeys.indexOf(value as any) !== -1;
}
`;
}

function createMetadataFile(fileLines) {
    try {
        fs.writeFileSync(paths.ICONS_METADATA_OUTPUT_PATH, fileLines);
        console.log(`${chalk.inverse.green(' DONE ')} digibear-icons-metadata.ts created.`);
    } catch (err) {
        console.error(`${chalk.inverse.red(' FAIL ')} Failed to created digibear-icons-metadata.ts.`);
        console.group();
        console.error(err);
        console.groupEnd();
        return;
    }
}
