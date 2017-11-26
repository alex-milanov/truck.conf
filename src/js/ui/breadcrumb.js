// dom
const {
	h1, a, div, ul, li,
	section, button, span
} = require('iblokz-snabbdom-helpers');

const {str} = require('iblokz-data');

const getDocName = page => page.split('.').slice(-1)
	.map(str.pluralToSingular)
	.pop();

module.exports = ({state, actions}) => ul('.breadcrumb', [].concat(
	state.router.page !== 'home' ? {title: 'Home', href: '#/'} : [],
	state.router.path.map((chunk, i) => (i < state.router.path.length - 1)
		? {
			title: str.capitalize(chunk),
			href: '#/' + state.router.page.split('.').slice(0, i + 1).join()
		}
		: state.router.pageId && !state.router.page.match(/configure/)
			? (state.router.pageId === 'new')
				? `New ${getDocName(state.router.page)}`
				: `Edit ${getDocName(state.router.page)} ${state.router.pageId}`
			: str.capitalize(chunk)
	)).map((item, i) =>
		li(typeof item === 'string'
			? item
			: a(`[href="${item.href}"]`, item.title)
		)
));
