'use strict';

// dom
const {
	h1, h2, a, div, header, p, br,
	section, button, span, ul, li,
	img, label, input, form, select, option
} = require('iblokz-snabbdom-helpers');

const listSelect = require('../../../components/list-select');
const truck = require('./truck');

const {obj, str} = require('iblokz-data');

module.exports = ({state, actions}) => section([].concat(
	truck({state, actions}),
	listSelect({
		title: 'Choose Wheelbase',
		list: [2600, 3600, 3900, 4800],
		select: ({item}) => actions.set(['configure', 'configuration', 'wheelbase'], {
			length: item
		}),
		selected: ({item}) => state.configure.configuration.wheelbase.length === item,
		withImage: false
	})
));
