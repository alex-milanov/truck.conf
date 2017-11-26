'use strict';

// dom
const {
	h1, a, div, header,
	section, button, span,
	ul, li,
	table, thead, tbody, tr, th, td
} = require('iblokz-snabbdom-helpers');

module.exports = ({fields = [], list = [], actions = []}) => table('.grid', [
	thead(
		tr([].concat(
			fields.map(field => th(field.title || field)),
			th('actions')
		)
	)),
	tbody(list.map(doc =>
		tr([].concat(
			fields.map(field => td(doc[field.name || field] || '')),
			td(actions.map(a =>
				a.href
					? a(`${a.href}${a.sel || ''}`, {
						style: {
							width: (100 / actions.length).toFixed(2) + '%'
						}
					}, a.title || '')
					: button(`${a.sel || ''}`, {
						style: {
							width: (100 / actions.length).toFixed(2) + '%'
						},
						on: {
							click: ev => a.cb({ev, doc})
						}
					}, a.title || '')
			))
		))
	))
]);
