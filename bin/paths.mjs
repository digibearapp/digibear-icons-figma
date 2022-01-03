import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const ICONS_METADATA_JSON_PATH = path.join(__dirname, './digibear-icons-metadata.json');
export const ICONS_METADATA_OUTPUT_PATH = path.join(__dirname, '../src/app/icon-metadata/digibear-icons-metadata.ts');
export const TEMP_PATH = path.join(__dirname, '../temp');
export const OLD_METADATA_PATH = path.join(__dirname, '../temp/digibear-icons/digibear-icons-metadata.json');
export const DEST_METADATA_PATH = path.join(__dirname, './digibear-icons-metadata.json');
