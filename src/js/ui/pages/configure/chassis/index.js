'use strict';

// dom
const {
	h1, h2, a, div, header, p, br,
	section, button, span, ul, li,
	img, label, input, form, select, option
} = require('iblokz-snabbdom-helpers');

const listSelect = require('../../../components/list-select');

module.exports = ({
	state: {router, configure: {brands, brandModels, configuration}
}, actions}) => form('.edit', {
	on: {
		submit: ev => ev.preventDefault()
	}
}, [].concat(
	listSelect({
		title: 'Choose brand',
		list: brands,
		select: ({item}) => actions.set(['configure', 'configuration', 'chassis'], {
			brand: item.toLowerCase(),
			model: false
		}),
		selected: ({item}) => configuration.chassis.brand === item.toLowerCase(),
		ns: 'brands',
		withImage: true
	}),
	configuration.chassis.brand
	? listSelect({
		title: 'Choose model',
		height: 64,
		list: brandModels[configuration.chassis.brand],
		select: ({item}) => actions.set(['configure', 'configuration', 'chassis', 'model'], item.toLowerCase()),
		selected: ({item}) => configuration.chassis.model === item.toLowerCase(),
		ns: 'models',
		withImage: false
	}) : [],
	br(),
	(configuration.chassis.brand && configuration.chassis.model)
	? button({on: {click: () => actions.router.go(`configure.2`)}}, 'Next') : []
));
