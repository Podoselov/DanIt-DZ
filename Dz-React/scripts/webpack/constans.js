import { resolve } from 'path';

import path from 'app-root-path';

const projectRoot = path;
const sourceDirectory = resolve(projectRoot + '/Dz-1/src/js/');
const buildDirectory = resolve(projectRoot + '/Dz-1/dist/');
const host = 'localhost';
const port = 3000;
export { projectRoot, sourceDirectory, buildDirectory, host, port };
