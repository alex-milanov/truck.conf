'use strict';

// dom
const {
	h1, a, div, header, p, i,
	section, button, span, ul, li
} = require('iblokz-snabbdom-helpers');
// components
const grid = require('../../components/grid');

module.exports = ({state, actions: {router}}) => [
	button({on: {click: () => router.go(`elements.new`)}}, [
		i('.fa.fa-file-o'),
		'Create'
	]),
	grid({
		fields: [{name: 'id', title: '#'}, 'name', 'function', 'values', 'default'],
		list: state.elements.list,
		actions: [
			{
				sel: '.fa.fa-eye',
				cb: ({doc, ev}) => {}
			},
			{
				sel: '.fa.fa-pencil',
				cb: ({doc, ev}) => router.go(`elements.${doc.id}`)
			},
			{
				sel: '.fa.fa-trash-o',
				cb: ({doc, ev}) => {}
			}
		]
	})
];
