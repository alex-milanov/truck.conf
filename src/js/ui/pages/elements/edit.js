'use strict';

// dom
const {
	h1, a, div, header, p,
	section, button, span, ul, li
} = require('iblokz-snabbdom-helpers');
// components
const form = require('../../components/form');

module.exports = ({state, actions: {router}}) => form({
	sel: state.router.pageId === 'new' ? '.create' : '.edit',
	schema: state.rest.collections.elements.schema,
	doc: {},
	actions: {
		save: ({data, ev}) => {},
		cancel: ({ev}) => {}
	}
});
