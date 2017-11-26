'use strict';

// dom
const {
	h1, a, div, header, p,
	section, button, span
} = require('iblokz-snabbdom-helpers');

module.exports = ({state, actions}) => section('.home',
	p('Wellcome!')
);
