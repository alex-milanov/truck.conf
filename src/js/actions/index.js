'use strict';

const {obj, arr} = require('iblokz-data');

// namespaces=
const configure = require('./configure');

// initial
const initial = {
	needsRefresh: false,
	// 3d view info
	view: {
		width: 800,
		height: 600,
		x: 400,
		y: 300
	},
	camera: {
		distance: 520,
		range: {
			h: 360,
			hOffset: -90,
			v: 80,
			vOffset: 10
		},
		rotateWithPlayer: false
	},
	elements: {
		list: [
			{
				_id: 1,
				name: 'brands',
				function: 'list',
				values: 'Man, Mercedes Benz, Volvo, Iveco',
				default: 'n/a'
			},
			{
				_id: 2,
				name: 'brandModels',
				function: 'list',
				values: 'TGS, TGM, TGX, TGL',
				default: 'n/a'
			},
			{
				_id: 3,
				name: 'wheelbase',
				function: 'list',
				values: '2600, 3600, 3900, 4800',
				default: 'n/a'
			}
		]
	}
};

// actions
const set = (key, value) => state => obj.patch(state, key, value);
const toggle = key => state => obj.patch(state, key, !obj.sub(state, key));
const arrToggle = (key, value) => state =>
	obj.patch(state, key,
		arr.toggle(obj.sub(state, key), value)
	);

const updateView = (width, height, x, y) => state =>
	obj.patch(state, 'view', {
		width, height, x, y
	});

module.exports = {
	initial,
	configure,
	set,
	toggle,
	arrToggle,
	updateView
};
