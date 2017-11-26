'use strict';

const Rx = require('rx');
const $ = Rx.Observable;

const restConfig = require('../../../config/rest.json');

const actions = {
	initial: {
		routes: {},
		collections: {}
	}
};

let unhook = () => {};

const hook = ({state$, actions}) => {
	actions.set('rest', restConfig);
};

module.exports = {
	actions,
	hook,
	unhook
};
