'use strict';

const initial = {
	brands: [
		'MAN', 'Volvo', 'Mercedes-Benz', 'Iveco'
	],
	brandModels: {
		'man': [
			'TGS', 'TGM', 'TGX', 'TGL'
		],
		'volvo': [
			'FH', 'FMX', 'FM', 'FE', 'FL'
		],
		'mercedes-benz': [],
		'iveco': []
	},
	configuration: {
		chassis: {
			brand: false,
			model: false
		},
		wheelbase: {
			length: 3600
		}
	}
};

module.exports = {
	initial
};
