'use strict';

// dom
const {
	h1, h2, a, div, header, p, br,
	section, button, span, ul, li,
	img, label, input, form, select, option
} = require('iblokz-snabbdom-helpers');

module.exports = ({
	title = '',
	list = [],
	height = 128,
	selected = ({item}) => false,
	select = ({ev, item}) => {},
	ns = '',
	withImage = false
}) => section([
	label(title),
	ul('.list-select', list.map(item =>
		li({
			on: {
				click: ev => select({ev, item})
			},
			class: {
				selected: selected({item})
			},
			style: {
				height: height + 'px',
				lineHeight: height + 'px',
				width: (100 / list.length).toFixed(2) + '%'
			}
		},
			withImage
				? img(`[src="assets/img/${ns}/${item.toLowerCase()}.png"]`)
				: span(item)
			)
	))
]);
