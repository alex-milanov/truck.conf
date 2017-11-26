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
	doc: state.router.pageId === 'new'
		? {} : state.elements.list.find(({id}) => id === parseInt(state.router.pageId, 10)),
	actions: {
		save: ({data, ev}) => {},
		cancel: ({ev}) => {}
	}
});
