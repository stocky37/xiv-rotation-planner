#!/usr/bin/env node

import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {
	configureJobIcons,
	directories,
	downloadAbilityIcons,
	downloadItemIcons,
	overlayIcons,
} from './lib/index.js';

// commands
const download = 'download';
const overlay = 'overlay';
const configure = 'configure';

// contexts
const abilities = 'abilities';
const items = 'items';
const jobs = 'jobs';

// action category
const category = 'category';

const categoryPositional = {
	type: 'string',
	choices: [abilities, items],
	describe: 'Type of action to use',
};

const argv = yargs(hideBin(process.argv))
	.scriptName('util.js')
	.usage('$0 <cmd> [args]')
	.command(`${download} <${category}>`, 'Download icons', (yargs) => {
		yargs.positional(category, categoryPositional);
	})
	.command(`${overlay} <${category}>`, 'Overlay action icons', (yargs) => {
		yargs.positional(category, categoryPositional);
	})
	.command(`${configure} <${category}>`, 'Configure icons', (yargs) => {
		yargs.positional(category, {
			type: 'string',
			choices: [jobs],
			describe: 'Icons to configure',
		});
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
} else if (argv._[0] === configure) {
	if (argv[category] === jobs) {
		await configureJobIcons();
	}
}
