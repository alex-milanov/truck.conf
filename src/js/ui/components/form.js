'use strict';

// dom
const {
	h1, a, div, header,
	section, button, span,
	ul, li, br,
	table, thead, tbody, tr, th, td,
	form, input, label, fieldset, legend,
	select, option, textarea
} = require('iblokz-snabbdom-helpers');

// lib
const moment = require('moment');
const {obj, str} = require('iblokz-data');
const formUtil = require('../../util/form');

const sub = (o, p, d = false) =>
	o === undefined
		? d
		: (p instanceof Array)
			? o[p[0]] && p.length > 1
				? [sub(o[p[0]], p.slice(1))].map(sO => (sO !== undefined ? sO : d)).pop()
				: o[p[0]]
			: o[p] !== undefined ? o[p] : d;

const schema = {
	name: {type: 'String', min: 3, max: 30},
	type: {type: 'String', enum: ['polygon', 'circle'], default: 'polygon'},
	path: [{
		lat: 'Number',
		lng: 'Number'
	}],
	center: {
		lat: 'Number',
		lng: 'Number'
	},
	radius: 'Number'
};

const schemaInputFieldMap = {
	String: 'text',
	Number: 'number',
	Date: 'datetime-local'
};

const keys = o => Object.keys(o);

const parseField = (field, name) => (
	console.log(field, name),
	(typeof field === 'string')
		? {type: field, name, required: true}
		: field.type
			? Object.assign({}, field, {name})
			: field instanceof Object
				? {type: 'Object', name, fields: keys(field).map(key => parseField(field[key], [name, key].join('.')))}
				: false
	);

	//  keys(field).map(key => parseField(field[key], [name, key].join('.')))

const fieldToTitle = field => str.fromCamelCase(field, '-')
	.split('-').map(word => str.capitalize(word)).join(' ');

const formElement = (field, doc) => obj.switch(field.type, {
	Mixed: value =>
		textarea(
			{attrs: {name: field.name, disabled: field.disabled}},
			typeof value === 'string' ? value : JSON.stringify(value)
		),
	default: value => div('.field', [
		field.name.split('.').length === 1 ? label([
			fieldToTitle(field.name.split('.').pop()),
			': '
		]) : '',
		(field.type === 'String' && field.enum instanceof Array)
		? select({attrs: {name: field.name, value, disabled: field.disabled}}, [].concat(
				// option('[value=""]', 'n/a'),
				field.enum.map(val => option({attrs: {value: val, selected: val === value}}, val)
			)))
		: (field.type === 'ObjectId' && field.hash instanceof Object)
		? select({attrs: {name: field.name, value, disabled: field.disabled}}, [].concat(
				// option('[value=""]', 'n/a'),
				Object.keys(field.hash).map(id =>
					option({attrs: {value: id, selected: id === value}}, field.hash[id]
				)
			)))
		: input({
			attrs: {
				name: field.name,
				type: schemaInputFieldMap[field.type],
				step: 0.01,
				placeholder: fieldToTitle(field.name.split('.').pop()),
				value: field.type === 'Date' ? moment(value).format('YYYY-MM-DDTHH:mm') : value || '',
				disabled: field.disabled
			}
		})
	]),
	Object: () => div('.field', [].concat(
		label([
			fieldToTitle(field.name.split('.').pop()),
			': '
		]),
		field.fields.map(f => formElement(f, doc))
	))
})(sub(doc, field.name.split('.'), ''));

module.exports = ({schema, doc = {}, sel = '', actions: {save, cancel}}) => form(sel, {
	on: {
		submit: ev => (
				ev.preventDefault(),
				save({data: formUtil.toData(ev.target), ev})
			)
	}
}, [].concat(
	keys(schema)
		.map(key => parseField(schema[key], key))
      .reduce((els, field) => [].concat(els, field), [])
      .map(field => formElement(field, doc)),
	br(),
	button('Save')
));
