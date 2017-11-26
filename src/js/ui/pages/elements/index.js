'use strict';

// dom
const {
	h1, a, div, header, p,
	section, button, span, ul, li
} = require('iblokz-snabbdom-helpers');

// crud
const list = require('./list');
const edit = require('./edit');

module.exports = ({state, actions}) => section('.elements', [].concat(
	!state.router.pageId
		? list({state, actions})
		: edit({state, actions})
));
