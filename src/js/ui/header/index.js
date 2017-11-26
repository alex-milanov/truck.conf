'use strict';

// dom
const {
	h1, a, div, header,
	section, button, span,
	ul, li, img
} = require('iblokz-snabbdom-helpers');

const menuItems = [
	{page: 'home', href: '#/', title: 'Home'},
	{page: 'elements', href: '#/elements', title: 'Elements'},
	{page: 'configure', href: '#/configure', title: 'Configure'}
];

module.exports = ({state, actions}) => header([
	h1([
		'{',
		img(`[src="assets/truck-front.svg"]`),
		'} truck.conf'
	]),
	ul('.menu', menuItems.map(item =>
		li([a(
			`[href="${item.href}"]`,
			{class: {active: item.page === state.router.page}},
			item.title
		)])
	))
]);
