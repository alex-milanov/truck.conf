'use strict';

// dom
const {
	h1, h2, a, div, header, p,
	section, button, span, ul, li
} = require('iblokz-snabbdom-helpers');

const truck = require('./truck');

const {obj, str} = require('iblokz-data');

const steps = [
	'Chassis',
	'Taillift',
	'Body',
	'Extras',
	'Paintjob',
	'Customization',
	'Done'
];

module.exports = ({state, actions}) => section('.configure', [].concat(
	ul('.steps', steps.map((step, index) =>
		li(a(`[href="#/configure/${index + 1}"]`, {
			class: {
				on: index < (state.router.pageId || 1)
			}
		}, `[${index + 1}] ${step}`))
	)),
	obj.switch(state.router.pageId, {
		default: () => h2(`Step ${state.router.pageId || 1}. ${steps[(state.router.pageId || 1) - 1]}`)
	})()
	// truck({state, actions})
));
