import fs from 'fs';
import path from 'path';
import rule from '../rule';
import {Colors} from "../types/colors";

const wayLessThanTink = 2
const lessThanTink = 4
const tink = 6

// Set filtername here
const filterName = 'TemplateFilter';

const getFilter = () => `

### sockets and links

### weapon specific rules

### mapping looting rules

### other stuff (fractures)

`
// Write filter to output directory
fs.writeFileSync(path.join(__dirname, `../../output/${filterName}.filter`), getFilter());