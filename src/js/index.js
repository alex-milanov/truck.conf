'use strict';

// lib
const Rx = require('rx');
const $ = Rx.Observable;

// iblokz
const vdom = require('iblokz-snabbdom-helpers');
const {obj, arr} = require('iblokz-data');

// app
const app = require('./util/app');
let actions = app.adapt(require('./actions'));
let ui = require('./ui');
let actions$;
const state$ = new Rx.BehaviorSubject();

// services
// router
let router = require('./services/router');
actions = app.attach(actions, 'router', router.actions);
// rest
let rest = require('./services/rest');
actions = app.attach(actions, 'rest', rest.actions);

// hot reloading
if (module.hot) {
	// actions
	actions$ = $.fromEventPattern(
    h => module.hot.accept("./actions", h)
	).flatMap(() => {
		actions = app.adapt(Object.assign({}, require('./actions'), {
			router: router.actions,
			rest: rest.actions
		}));
		return actions.stream.startWith(state => state);
	}).merge(actions.stream);
	// ui
	module.hot.accept("./ui", function() {
		ui = require('./ui');
		actions.stream.onNext(state => state);
	});
	module.hot.accept("./services/rest", function() {
		console.log('updating control');
		rest.unhook();
		// console.log('updating render3d');
		rest = require('./services/rest');
		actions = app.attach(actions, 'rest', rest.actions);
		rest.hook({state$, actions});
		// actions.set('needsRefresh', true);
		// state$.connect();
	});
} else {
	actions$ = actions.stream;
}

// actions -> state
actions$
	.map(action => (
		action.path && console.log(action.path.join('.'), action.payload),
		console.log(action),
		action)
	)
	.scan((state, change) => change(state), actions.initial)
	.startWith(actions.initial)
	.map(state => (console.log(state), state))
	.subscribe(state => state$.onNext(state));

// state change hooks
router.hook({state$, actions});
rest.hook({state$, actions});

// state -> ui
const ui$ = state$.map(state => ui({state, actions}));
vdom.patchStream(ui$, '#ui');

// livereload impl.
if (module.hot) {
	document.write(`<script src="http://${(location.host || 'localhost').split(':')[0]}` +
	`:35729/livereload.js?snipver=1"></script>`);
}
