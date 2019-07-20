"use strict"
import {person} from './person';
import prs from './person';

import {clean, baseData} from './utility';
//or import {clean as cl} from './utility';
//or import {baseData as bd} from './utility';
//or import * as utility from './utility'; // and use it as utility.clean
console.log(person);
console.log(prs.name);

console.log(clean);
console.log(baseData);
clean(); 