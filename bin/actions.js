#!/usr/bin/env node

import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {directories, downloadAbilityIcons, downloadItemIcons, overlayIcons} from './lib/index.js';

const download = 'download';

const overlay = 'overlay';
const abilities = 'abilities';
const items = 'items';
const category = 'category';

const categoryPositional = {
	type: 'string',
	choices: [abilities, items],
	describe: 'Type of action to use',
};

const argv = yargs(hideBin(process.argv))
	.scriptName('actions.js')
	.usage('$0 <cmd> [args]')
	.command(`${download} <${category}>`, 'Download action icons', (yargs) => {
		yargs.positional(category, categoryPositional);
	})
	.command(`${overlay} <${category}>`, 'Overlay action icons', (yargs) => {
		yargs.positional(category, categoryPositional);
	})
	.demandCommand(1)
	.strict().argv;

if (argv._[0] === download) {
	if (argv[category] === abilities) {
		await downloadAbilityIcons(directories.abilities.tmp);
	} else if (argv[category] === items) {
		await downloadItemIcons(directories.items.tmp);
	}
} else if (argv._[0] === overlay) {
	if (argv[category] === abilities) {
		await overlayIcons(directories.abilities.tmp, directories.abilities.public);
	} else if (argv[category] === items) {
		await overlayIcons(directories.items.tmp, directories.items.public);
	}
}
