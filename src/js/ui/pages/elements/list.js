'use strict';

// dom
const {
	h1, a, div, header, p, i,
	section, button, span, ul, li
} = require('iblokz-snabbdom-helpers');
// components
const grid = require('../../components/grid');

const {obj} = require('iblokz-data');

const orderWeight = [
	'_id', 'name', 'title',
	'function', 'type',
	'values', 'default',
	'author', 'start', 'end'
];

const skipFields = ['description', 'info'];

const schemaToFields = schema => ['_id'].concat(Object.keys(schema))
	.sort((a, b) => orderWeight[b] - orderWeight[a])
	.map(field => obj.switch(field, {
		default: () => field,
		_id: () => ({name: '_id', title: '#'})
	})());

module.exports = ({state, actions: {router}}) => [
	button({on: {click: () => router.go(`elements.new`)}}, [
		i('.fa.fa-file-o'),
		'Create'
	]),
	grid({
		fields: schemaToFields(state.rest.collections.elements.schema),
		list: state.elements.list,
		actions: [
			{
				sel: '.fa.fa-eye',
				cb: ({doc, ev}) => {}
			},
			{
				sel: '.fa.fa-pencil',
				cb: ({doc, ev}) => router.go(`elements.${doc._id}`)
			},
			{
				sel: '.fa.fa-trash-o',
				cb: ({doc, ev}) => {}
			}
		]
	})
];
