'use strict';

// dom
const {
	h1, a, div,
	section, button, span
} = require('iblokz-snabbdom-helpers');

// util
const {obj} = require('iblokz-data');

// components
const header = require('./header');
const breadcrumb = require('./breadcrumb');
const pages = {
	default: require('./pages/home'),
	elements: require('./pages/elements'),
	configure: require('./pages/configure')
};

module.exports = ({state, actions}) => section('#ui', [
	header({state, actions}),
	breadcrumb({state, actions}),
	section('.content', [
		obj.switch(state.router.path, pages)({state, actions})
	])
	// counter({state, actions})
]);
