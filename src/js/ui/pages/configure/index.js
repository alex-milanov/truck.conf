'use strict';

// dom
const {
	h1, h2, a, div, header, p, br,
	section, button, span, ul, li,
	img, label, input, form, select, option
} = require('iblokz-snabbdom-helpers');

const {obj, str} = require('iblokz-data');

const steps = [
	'Chassis',
	'Wheelbase',
	'Body',
	'Extras',
	'Paintjob',
	'Customization',
	'Done'
];

const chassis = require('./chassis');
const wheelbase = require('./wheelbase');
const paintjob = require('./paintjob');

module.exports = ({state, actions}) => section('.configure', [].concat(
	ul('.steps', steps.map((step, index) =>
		li(a(`[href="#/configure/${index + 1}"]`, {
			class: {
				on: index < (state.router.pageId || 1)
			}
		}, `[${index + 1}] ${step}`))
	)),
	obj.switch(state.router.pageId || 1, {
		default: () => h2(`Step ${state.router.pageId || 1}. ${steps[(state.router.pageId || 1) - 1]}`),
		1: () => chassis({state, actions}),
		2: () => wheelbase({state, actions}),
		5: () => paintjob({state, actions})
	})()
	// truck({state, actions})
));
