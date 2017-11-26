'use strict';

// dom
const {
	h1, h2, a, div, header, p, br,
	section, button, span, ul, li, canvas,
	img, label, input, form, select, option
} = require('iblokz-snabbdom-helpers');

module.exports = ({state, actions}) => section(
	state.needsRefresh === false ? canvas('#view3d[width="800"][height="256"]') : ''
);
