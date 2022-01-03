import chalk from 'chalk';
import * as paths from './paths.mjs';
import fs from 'fs';
import {deleteDir} from './clean-up.mjs';
import {downloadDbIconsRelease} from './download-latest-release.mjs';
import {generateIconsMetadata} from './generate-icons-metadata.mjs';

console.log(`${chalk.inverse.white(' JS ')} generate.js started.`);
deleteDir(paths.TEMP_PATH);

downloadDbIconsRelease().then(
    (msg) => {
        console.log(msg);
        fs.rename(paths.OLD_METADATA_PATH, paths.DEST_METADATA_PATH, function (err) {
            if (err) throw err;

            generateIconsMetadata();
            deleteDir(paths.TEMP_PATH);
            console.log(`${chalk.inverse.green(' JS ')} generate.js ended successfully.`);
        });
    },
    (error) => {
        console.log(`${chalk.inverse.red(' JS ')} generate.js failed.`);
        console.group();
        console.error(error);
        console.groupEnd();
    }
);
