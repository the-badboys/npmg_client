var t = Object.defineProperty,
	e = Object.prototype.hasOwnProperty,
	r = Object.getOwnPropertySymbols,
	s = Object.prototype.propertyIsEnumerable,
	o = (e, r, s) =>
		r in e ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[r] = s),
	a = (t, a) => {
		for (var n in a || (a = {})) e.call(a, n) && o(t, n, a[n]);
		if (r) for (var n of r(a)) s.call(a, n) && o(t, n, a[n]);
		return t;
	};
import {
	S as n,
	i,
	s as l,
	e as c,
	c as u,
	a as d,
	d as p,
	b as h,
	f,
	t as g,
	g as _,
	h as m,
	j as $,
	k as y,
	l as v,
	m as b,
	n as w,
	o as E,
	p as x,
	q as R,
	r as L,
	u as q,
	v as O,
	w as j,
	x as P,
	y as T,
	z as k,
	A,
	B as S
} from './chunks/index-31c2d992.js';
import { w as I } from './chunks/index-c2ea1688.js';
import { i as V } from './chunks/singletons-6b53f818.js';
function D(t) {
	let e, r, s;
	const o = [t[2] || {}];
	var a = t[0][1];
	function n(t) {
		let e = { $$slots: { default: [B] }, $$scope: { ctx: t } };
		for (let r = 0; r < o.length; r += 1) e = A(e, o[r]);
		return { props: e };
	}
	return (
		a && (e = new a(n(t))),
		{
			c() {
				e && $(e.$$.fragment), (r = v());
			},
			l(t) {
				e && b(e.$$.fragment, t), (r = v());
			},
			m(t, o) {
				e && E(e, t, o), f(t, r, o), (s = !0);
			},
			p(t, s) {
				const i = 4 & s ? x(o, [R(t[2] || {})]) : {};
				if ((1049 & s && (i.$$scope = { dirty: s, ctx: t }), a !== (a = t[0][1]))) {
					if (e) {
						S();
						const t = e;
						L(t.$$.fragment, 1, 0, () => {
							j(t, 1);
						}),
							q();
					}
					a
						? ((e = new a(n(t))), $(e.$$.fragment), O(e.$$.fragment, 1), E(e, r.parentNode, r))
						: (e = null);
				} else a && e.$set(i);
			},
			i(t) {
				s || (e && O(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && L(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && p(r), e && j(e, t);
			}
		}
	);
}
function N(t) {
	let e, r, s;
	const o = [t[3] || {}];
	var a = t[0][2];
	function n(t) {
		let e = { $$slots: { default: [C] }, $$scope: { ctx: t } };
		for (let r = 0; r < o.length; r += 1) e = A(e, o[r]);
		return { props: e };
	}
	return (
		a && (e = new a(n(t))),
		{
			c() {
				e && $(e.$$.fragment), (r = v());
			},
			l(t) {
				e && b(e.$$.fragment, t), (r = v());
			},
			m(t, o) {
				e && E(e, t, o), f(t, r, o), (s = !0);
			},
			p(t, s) {
				const i = 8 & s ? x(o, [R(t[3] || {})]) : {};
				if ((1041 & s && (i.$$scope = { dirty: s, ctx: t }), a !== (a = t[0][2]))) {
					if (e) {
						S();
						const t = e;
						L(t.$$.fragment, 1, 0, () => {
							j(t, 1);
						}),
							q();
					}
					a
						? ((e = new a(n(t))), $(e.$$.fragment), O(e.$$.fragment, 1), E(e, r.parentNode, r))
						: (e = null);
				} else a && e.$set(i);
			},
			i(t) {
				s || (e && O(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && L(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && p(r), e && j(e, t);
			}
		}
	);
}
function U(t) {
	let e, r, s;
	const o = [t[4] || {}];
	var a = t[0][3];
	function n(t) {
		let e = {};
		for (let r = 0; r < o.length; r += 1) e = A(e, o[r]);
		return { props: e };
	}
	return (
		a && (e = new a(n())),
		{
			c() {
				e && $(e.$$.fragment), (r = v());
			},
			l(t) {
				e && b(e.$$.fragment, t), (r = v());
			},
			m(t, o) {
				e && E(e, t, o), f(t, r, o), (s = !0);
			},
			p(t, s) {
				const i = 16 & s ? x(o, [R(t[4] || {})]) : {};
				if (a !== (a = t[0][3])) {
					if (e) {
						S();
						const t = e;
						L(t.$$.fragment, 1, 0, () => {
							j(t, 1);
						}),
							q();
					}
					a
						? ((e = new a(n())), $(e.$$.fragment), O(e.$$.fragment, 1), E(e, r.parentNode, r))
						: (e = null);
				} else a && e.$set(i);
			},
			i(t) {
				s || (e && O(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && L(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && p(r), e && j(e, t);
			}
		}
	);
}
function C(t) {
	let e,
		r,
		s = t[0][3] && U(t);
	return {
		c() {
			s && s.c(), (e = v());
		},
		l(t) {
			s && s.l(t), (e = v());
		},
		m(t, o) {
			s && s.m(t, o), f(t, e, o), (r = !0);
		},
		p(t, r) {
			t[0][3]
				? s
					? (s.p(t, r), 1 & r && O(s, 1))
					: ((s = U(t)), s.c(), O(s, 1), s.m(e.parentNode, e))
				: s &&
				  (S(),
				  L(s, 1, 1, () => {
						s = null;
				  }),
				  q());
		},
		i(t) {
			r || (O(s), (r = !0));
		},
		o(t) {
			L(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && p(e);
		}
	};
}
function B(t) {
	let e,
		r,
		s = t[0][2] && N(t);
	return {
		c() {
			s && s.c(), (e = v());
		},
		l(t) {
			s && s.l(t), (e = v());
		},
		m(t, o) {
			s && s.m(t, o), f(t, e, o), (r = !0);
		},
		p(t, r) {
			t[0][2]
				? s
					? (s.p(t, r), 1 & r && O(s, 1))
					: ((s = N(t)), s.c(), O(s, 1), s.m(e.parentNode, e))
				: s &&
				  (S(),
				  L(s, 1, 1, () => {
						s = null;
				  }),
				  q());
		},
		i(t) {
			r || (O(s), (r = !0));
		},
		o(t) {
			L(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && p(e);
		}
	};
}
function K(t) {
	let e,
		r,
		s = t[0][1] && D(t);
	return {
		c() {
			s && s.c(), (e = v());
		},
		l(t) {
			s && s.l(t), (e = v());
		},
		m(t, o) {
			s && s.m(t, o), f(t, e, o), (r = !0);
		},
		p(t, r) {
			t[0][1]
				? s
					? (s.p(t, r), 1 & r && O(s, 1))
					: ((s = D(t)), s.c(), O(s, 1), s.m(e.parentNode, e))
				: s &&
				  (S(),
				  L(s, 1, 1, () => {
						s = null;
				  }),
				  q());
		},
		i(t) {
			r || (O(s), (r = !0));
		},
		o(t) {
			L(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && p(e);
		}
	};
}
function z(t) {
	let e,
		r = t[6] && W(t);
	return {
		c() {
			(e = c('div')), r && r.c(), this.h();
		},
		l(t) {
			e = u(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var s = d(e);
			r && r.l(s), s.forEach(p), this.h();
		},
		h() {
			h(e, 'id', 'svelte-announcer'),
				h(e, 'aria-live', 'assertive'),
				h(e, 'aria-atomic', 'true'),
				h(e, 'class', 'svelte-1pdgbjn');
		},
		m(t, s) {
			f(t, e, s), r && r.m(e, null);
		},
		p(t, s) {
			t[6] ? (r ? r.p(t, s) : ((r = W(t)), r.c(), r.m(e, null))) : r && (r.d(1), (r = null));
		},
		d(t) {
			t && p(e), r && r.d();
		}
	};
}
function W(t) {
	let e, r;
	return {
		c() {
			(e = g('Navigated to ')), (r = g(t[7]));
		},
		l(s) {
			(e = _(s, 'Navigated to ')), (r = _(s, t[7]));
		},
		m(t, s) {
			f(t, e, s), f(t, r, s);
		},
		p(t, e) {
			128 & e && m(r, t[7]);
		},
		d(t) {
			t && p(e), t && p(r);
		}
	};
}
function M(t) {
	let e, r, s, o;
	const a = [t[1] || {}];
	var n = t[0][0];
	function i(t) {
		let e = { $$slots: { default: [K] }, $$scope: { ctx: t } };
		for (let r = 0; r < a.length; r += 1) e = A(e, a[r]);
		return { props: e };
	}
	n && (e = new n(i(t)));
	let l = t[5] && z(t);
	return {
		c() {
			e && $(e.$$.fragment), (r = y()), l && l.c(), (s = v());
		},
		l(t) {
			e && b(e.$$.fragment, t), (r = w(t)), l && l.l(t), (s = v());
		},
		m(t, a) {
			e && E(e, t, a), f(t, r, a), l && l.m(t, a), f(t, s, a), (o = !0);
		},
		p(t, [o]) {
			const c = 2 & o ? x(a, [R(t[1] || {})]) : {};
			if ((1053 & o && (c.$$scope = { dirty: o, ctx: t }), n !== (n = t[0][0]))) {
				if (e) {
					S();
					const t = e;
					L(t.$$.fragment, 1, 0, () => {
						j(t, 1);
					}),
						q();
				}
				n
					? ((e = new n(i(t))), $(e.$$.fragment), O(e.$$.fragment, 1), E(e, r.parentNode, r))
					: (e = null);
			} else n && e.$set(c);
			t[5]
				? l
					? l.p(t, o)
					: ((l = z(t)), l.c(), l.m(s.parentNode, s))
				: l && (l.d(1), (l = null));
		},
		i(t) {
			o || (e && O(e.$$.fragment, t), (o = !0));
		},
		o(t) {
			e && L(e.$$.fragment, t), (o = !1);
		},
		d(t) {
			e && j(e, t), t && p(r), l && l.d(t), t && p(s);
		}
	};
}
function Y(t, e, r) {
	let { stores: s } = e,
		{ page: o } = e,
		{ components: a } = e,
		{ props_0: n = null } = e,
		{ props_1: i = null } = e,
		{ props_2: l = null } = e,
		{ props_3: c = null } = e;
	P('__svelte__', s), T(s.page.notify);
	let u = !1,
		d = !1,
		p = null;
	return (
		k(() => {
			const t = s.page.subscribe(() => {
				u && (r(6, (d = !0)), r(7, (p = document.title || 'untitled page')));
			});
			return r(5, (u = !0)), t;
		}),
		(t.$$set = (t) => {
			'stores' in t && r(8, (s = t.stores)),
				'page' in t && r(9, (o = t.page)),
				'components' in t && r(0, (a = t.components)),
				'props_0' in t && r(1, (n = t.props_0)),
				'props_1' in t && r(2, (i = t.props_1)),
				'props_2' in t && r(3, (l = t.props_2)),
				'props_3' in t && r(4, (c = t.props_3));
		}),
		(t.$$.update = () => {
			768 & t.$$.dirty && s.page.set(o);
		}),
		[a, n, i, l, c, u, d, p, s, o]
	);
}
class G extends n {
	constructor(t) {
		super(),
			i(this, t, Y, M, l, {
				stores: 8,
				page: 9,
				components: 0,
				props_0: 1,
				props_1: 2,
				props_2: 3,
				props_3: 4
			});
	}
}
let J;
const X = {},
	F = function (t, e) {
		if (!e) return t();
		if (void 0 === J) {
			const t = document.createElement('link').relList;
			J = t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
		}
		return Promise.all(
			e.map((t) => {
				if (t in X) return;
				X[t] = !0;
				const e = t.endsWith('.css'),
					r = e ? '[rel="stylesheet"]' : '';
				if (document.querySelector(`link[href="${t}"]${r}`)) return;
				const s = document.createElement('link');
				return (
					(s.rel = e ? 'stylesheet' : J),
					e || ((s.as = 'script'), (s.crossOrigin = '')),
					(s.href = t),
					document.head.appendChild(s),
					e
						? new Promise((t, e) => {
								s.addEventListener('load', t), s.addEventListener('error', e);
						  })
						: void 0
				);
			})
		).then(() => t());
	},
	H = [
		() =>
			F(() => import('./pages/$layout.svelte-4dd38934.js'), [
				'/_app/pages/$layout.svelte-4dd38934.js',
				'/_app/assets/pages/$layout.svelte-ffb66b6e.css',
				'/_app/chunks/index-31c2d992.js'
			]),
		() => F(() => import('./pages/$error.svelte-8b905f17.js'), void 0),
		() => F(() => import('./pages/index.svelte-bf446a14.js'), void 0),
		() => F(() => import('./pages/doctor/index.svelte-5c50ddf0.js'), void 0),
		() =>
			F(() => import('./pages/ranger/index.svelte-8dada83a.js'), [
				'/_app/pages/ranger/index.svelte-8dada83a.js',
				'/_app/assets/pages/ranger/index.svelte-a84417ac.css'
			]),
		() =>
			F(() => import('./pages/admin/index.svelte-930fb8e4.js'), [
				'/_app/pages/admin/index.svelte-930fb8e4.js',
				'/_app/assets/pages/ranger/index.svelte-a84417ac.css'
			]),
		() => F(() => import('./pages/auth/$layout.svelte-f820c3f6.js'), void 0),
		() => F(() => import('./pages/auth/forgotpassword.svelte-b832cefa.js'), void 0),
		() => F(() => import('./pages/auth/register.svelte-b2bd3cd5.js'), void 0),
		() => F(() => import('./pages/auth/login.svelte-cc87cffe.js'), void 0),
		() =>
			F(() => import('./pages/user/$layout.svelte-81b5343b.js'), [
				'/_app/pages/user/$layout.svelte-81b5343b.js',
				'/_app/assets/pages/user/$layout.svelte-78e00086.css',
				'/_app/chunks/navigation-9e49acea.js',
				'/_app/chunks/singletons-6b53f818.js'
			]),
		() =>
			F(() => import('./pages/user/index.svelte-e4cdb11a.js'), [
				'/_app/pages/user/index.svelte-e4cdb11a.js',
				'/_app/assets/pages/ranger/index.svelte-a84417ac.css'
			]),
		() =>
			F(() => import('./pages/user/kwitizina.svelte-73e50e94.js'), [
				'/_app/pages/user/kwitizina.svelte-73e50e94.js',
				'/_app/assets/pages/user/kwitizina.svelte-7db769a1.css',
				'/_app/chunks/index-c2ea1688.js'
			]),
		() =>
			F(() => import('./pages/user/gorillas.svelte-eccda77c.js'), [
				'/_app/pages/user/gorillas.svelte-eccda77c.js',
				'/_app/assets/pages/user/gorillas.svelte-88528781.css',
				'/_app/chunks/Search-a46387ee.js'
			]),
		() =>
			F(() => import('./pages/user/settings.svelte-7562f263.js'), [
				'/_app/pages/user/settings.svelte-7562f263.js',
				'/_app/assets/pages/user/settings.svelte-77dd228a.css'
			]),
		() =>
			F(() => import('./pages/user/doctors.svelte-2c8d885b.js'), [
				'/_app/pages/user/doctors.svelte-2c8d885b.js',
				'/_app/assets/pages/user/doctors.svelte-0cfb13f2.css',
				'/_app/chunks/InvitationModal-13909d8e.js',
				'/_app/assets/InvitationModal-1a118015.css'
			]),
		() =>
			F(() => import('./pages/user/rangers.svelte-236f16f9.js'), [
				'/_app/pages/user/rangers.svelte-236f16f9.js',
				'/_app/assets/pages/user/doctors.svelte-0cfb13f2.css'
			]),
		() =>
			F(() => import('./pages/user/reports.svelte-27cc8612.js'), [
				'/_app/pages/user/reports.svelte-27cc8612.js',
				'/_app/assets/pages/user/reports.svelte-8881f422.css'
			]),
		() => F(() => import('./pages/user/store.svelte-6525ce24.js'), void 0),
		() => F(() => import('./pages/user/tasks.svelte-e170c8b8.js'), void 0)
	],
	Q = [
		[/^\/$/, [H[0], H[2]], [H[1]]],
		[/^\/doctor\/?$/, [H[0], H[3]], [H[1]]],
		[/^\/ranger\/?$/, [H[0], H[4]], [H[1]]],
		[/^\/admin\/?$/, [H[0], H[5]], [H[1]]],
		[/^\/auth\/forgotpassword\/?$/, [H[0], H[6], H[7]], [H[1]]],
		[/^\/auth\/register\/?$/, [H[0], H[6], H[8]], [H[1]]],
		[/^\/auth\/login\/?$/, [H[0], H[6], H[9]], [H[1]]],
		[/^\/user\/?$/, [H[0], H[10], H[11]], [H[1]]],
		[/^\/user\/kwitizina\/?$/, [H[0], H[10], H[12]], [H[1]]],
		[/^\/user\/gorillas\/?$/, [H[0], H[10], H[13]], [H[1]]],
		[/^\/user\/settings\/?$/, [H[0], H[10], H[14]], [H[1]]],
		[/^\/user\/doctors\/?$/, [H[0], H[10], H[15]], [H[1]]],
		[/^\/user\/rangers\/?$/, [H[0], H[10], H[16]], [H[1]]],
		[/^\/user\/reports\/?$/, [H[0], H[10], H[17]], [H[1]]],
		[/^\/user\/store\/?$/, [H[0], H[10], H[18]], [H[1]]],
		[/^\/user\/tasks\/?$/, [H[0], H[10], H[19]], [H[1]]]
	],
	Z = [H[0](), H[1]()];
function tt() {
	return { x: pageXOffset, y: pageYOffset };
}
function et(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class rt {
	constructor({ base: t, routes: e }) {
		(this.base = t), (this.routes = e);
	}
	init(t) {
		let e;
		(this.renderer = t),
			(t.router = this),
			(this.enabled = !0),
			'scrollRestoration' in history && (history.scrollRestoration = 'manual'),
			addEventListener('beforeunload', () => {
				history.scrollRestoration = 'auto';
			}),
			addEventListener('load', () => {
				history.scrollRestoration = 'manual';
			}),
			addEventListener('scroll', () => {
				clearTimeout(e),
					(e = setTimeout(() => {
						const t = a(a({}, history.state || {}), { 'sveltekit:scroll': tt() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const r = (t) => {
			const e = et(t.target);
			e && e.href && e.hasAttribute('sveltekit:prefetch') && this.prefetch(new URL(e.href));
		};
		let s;
		addEventListener('touchstart', r),
			addEventListener('mousemove', (t) => {
				clearTimeout(s),
					(s = setTimeout(() => {
						r(t);
					}, 20));
			}),
			addEventListener('click', (t) => {
				if (!this.enabled) return;
				if (t.button || 1 !== t.which) return;
				if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
				if (t.defaultPrevented) return;
				const e = et(t.target);
				if (!e) return;
				if (!e.href) return;
				const r = 'object' == typeof e.href && 'SVGAnimatedString' === e.href.constructor.name,
					s = String(r ? e.href.baseVal : e.href);
				if (s === location.href) return void (location.hash || t.preventDefault());
				if (e.hasAttribute('download') || 'external' === e.getAttribute('rel')) return;
				if (r ? e.target.baseVal : e.target) return;
				const o = new URL(s);
				if (o.pathname === location.pathname && o.search === location.search) return;
				const a = this.parse(o);
				if (a) {
					const r = e.hasAttribute('sveltekit:noscroll');
					history.pushState({}, '', o.href),
						this._navigate(a, r ? tt() : null, [], o.hash),
						t.preventDefault();
				}
			}),
			addEventListener('popstate', (t) => {
				if (t.state && this.enabled) {
					const e = new URL(location.href),
						r = this.parse(e);
					r ? this._navigate(r, t.state['sveltekit:scroll'], []) : (location.href = location.href);
				}
			}),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	parse(t) {
		if (t.origin !== location.origin) return null;
		if (!t.pathname.startsWith(this.base)) return null;
		const e = t.pathname.slice(this.base.length) || '/',
			r = this.routes.filter(([t]) => t.test(e));
		if (r.length > 0) {
			const s = new URLSearchParams(t.search);
			return { id: `${e}?${s}`, routes: r, path: e, query: s };
		}
	}
	async goto(t, { noscroll: e = !1, replaceState: r = !1 } = {}, s) {
		if (this.enabled) {
			const o = new URL(
					t,
					(function (t) {
						let e = t.baseURI;
						if (!e) {
							const r = t.getElementsByTagName('base');
							e = r.length ? r[0].href : t.URL;
						}
						return e;
					})(document)
				),
				a = this.parse(o);
			if (a)
				return (
					history[r ? 'replaceState' : 'pushState']({}, '', t),
					this._navigate(a, e ? tt() : null, s, o.hash)
				);
		}
		return (location.href = t), new Promise(() => {});
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1;
	}
	async prefetch(t) {
		const e = this.parse(t);
		if (e) return this.renderer.load(e);
		throw new Error(`Could not prefetch ${t.href}`);
	}
	async _navigate(t, e, r, s) {
		this.renderer.notify({ path: t.path, query: t.query }),
			location.pathname.endsWith('/') &&
				'/' !== location.pathname &&
				history.replaceState({}, '', `${location.pathname.slice(0, -1)}${location.search}`),
			await this.renderer.update(t, r),
			document.body.focus();
		const o = s && document.getElementById(s.slice(1));
		e
			? scrollTo(e.x, e.y)
			: o
			? scrollTo(0, o.getBoundingClientRect().top + scrollY)
			: scrollTo(0, 0);
	}
}
function st(t) {
	const e = I(t);
	let r = !0;
	return {
		notify: function () {
			(r = !0), e.update((t) => t);
		},
		set: function (t) {
			(r = !1), e.set(t);
		},
		subscribe: function (t) {
			let s;
			return e.subscribe((e) => {
				(void 0 === s || (r && e !== s)) && t((s = e));
			});
		}
	};
}
function ot(t, o) {
	const a = 'string' == typeof t ? t : t.url,
		n = document.querySelector(`script[type="svelte-data"][url="${a}"]`);
	if (n) {
		const t = JSON.parse(n.textContent),
			{ body: o } = t,
			a = ((t, o) => {
				var a = {};
				for (var n in t) e.call(t, n) && o.indexOf(n) < 0 && (a[n] = t[n]);
				if (null != t && r) for (var n of r(t)) o.indexOf(n) < 0 && s.call(t, n) && (a[n] = t[n]);
				return a;
			})(t, ['body']);
		return Promise.resolve(new Response(o, a));
	}
	return fetch(t, o);
}
class at {
	constructor({ Root: t, fallback: e, target: r, session: s, host: o }) {
		(this.Root = t),
			(this.fallback = e),
			(this.host = o),
			(this.router = null),
			(this.target = r),
			(this.started = !1),
			(this.session_id = 1),
			(this.current = { page: null, session_id: null, branch: [] }),
			(this.cache = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: st({}), navigating: I(null), session: I(s) }),
			(this.$session = null),
			(this.root = null);
		let a = !1;
		this.stores.session.subscribe(async (t) => {
			if (((this.$session = t), !a)) return;
			this.session_id += 1;
			const e = this.router.parse(new URL(location.href));
			this.update(e, []);
		}),
			(a = !0);
	}
	async start({ status: t, error: e, nodes: r, page: s }) {
		const o = [];
		let n,
			i,
			l,
			c = {};
		try {
			for (let n = 0; n < r.length; n += 1) {
				const u = n === r.length - 1,
					d = await this._load_node({
						module: await r[n],
						page: s,
						context: c,
						status: u && t,
						error: u && e
					});
				if ((o.push(d), d && d.loaded))
					if (d.loaded.error) {
						if (e) throw d.loaded.error;
						(i = d.loaded.status), (l = d.loaded.error);
					} else d.loaded.context && (c = a(a({}, c), d.loaded.context));
			}
			n = await this._get_navigation_result_from_branch({ page: s, branch: o });
		} catch (u) {
			if (e) throw u;
			(i = 500), (l = u);
		}
		l && (n = await this._load_error({ status: i, error: l, path: s.path, query: s.query })),
			n.redirect ? (location.href = new URL(n.redirect, location.href).href) : this._init(n);
	}
	notify({ path: t, query: e }) {
		dispatchEvent(new CustomEvent('sveltekit:navigation-start')),
			this.started &&
				this.stores.navigating.set({
					from: { path: this.current.page.path, query: this.current.page.query },
					to: { path: t, query: e }
				});
	}
	async update(t, e) {
		const r = (this.token = {});
		let s = await this._get_navigation_result(t);
		if (r !== this.token) return;
		if (s.redirect) {
			if (!(e.length > 10 || e.includes(t.path)))
				return void (this.router
					? this.router.goto(s.redirect, { replaceState: !0 }, [...e, t.path])
					: (location.href = new URL(s.redirect, location.href).href));
			s = await this._load_error({
				status: 500,
				error: new Error('Redirect loop'),
				path: t.path,
				query: t.query
			});
		}
		s.reload
			? location.reload()
			: this.started
			? ((this.current = s.state),
			  this.root.$set(s.props),
			  this.stores.navigating.set(null),
			  await 0)
			: this._init(s),
			dispatchEvent(new CustomEvent('sveltekit:navigation-end')),
			(this.loading.promise = null),
			(this.loading.id = null);
		const o = s.state.branch[s.state.branch.length - 1];
		o && !1 === o.module.router ? this.router.disable() : this.router.enable();
	}
	load(t) {
		return (
			(this.loading.promise = this._get_navigation_result(t)),
			(this.loading.id = t.id),
			this.loading.promise
		);
	}
	_init(t) {
		this.current = t.state;
		const e = document.querySelector('style[data-svelte]');
		e && e.remove(),
			(this.root = new this.Root({
				target: this.target,
				props: a({ stores: this.stores }, t.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _get_navigation_result(t) {
		if (this.loading.id === t.id) return this.loading.promise;
		for (let e = 0; e < t.routes.length; e += 1) {
			const r = t.routes[e];
			if (1 === r.length) return { reload: !0 };
			let s = e + 1;
			for (; s < t.routes.length; ) {
				const e = t.routes[s];
				if (e[0].toString() !== r[0].toString()) break;
				1 !== e.length && e[1].forEach((t) => t()), (s += 1);
			}
			const o = await this._load({ route: r, path: t.path, query: t.query });
			if (o) return o;
		}
		return await this._load_error({
			status: 404,
			error: new Error(`Not found: ${t.path}`),
			path: t.path,
			query: t.query
		});
	}
	async _get_navigation_result_from_branch({ page: t, branch: e }) {
		const r = e.filter(Boolean),
			s = {
				state: { page: t, branch: e, session_id: this.session_id },
				props: { components: r.map((t) => t.module.default) }
			};
		for (let n = 0; n < r.length; n += 1)
			r[n].loaded && (s.props[`props_${n}`] = await r[n].loaded.props);
		(this.current.page &&
			t.path === this.current.page.path &&
			t.query.toString() === this.current.page.query.toString()) ||
			(s.props.page = t);
		const o = r[r.length - 1],
			a = o.loaded && o.loaded.maxage;
		if (a) {
			const e = `${t.path}?${t.query}`;
			let r = !1;
			const o = () => {
					this.cache.get(e) === s && this.cache.delete(e), i(), clearTimeout(n);
				},
				n = setTimeout(o, 1e3 * a),
				i = this.stores.session.subscribe(() => {
					r && o();
				});
			(r = !0), this.cache.set(e, s);
		}
		return s;
	}
	async _load_node({ status: t, error: e, module: r, page: s, context: o }) {
		const n = {
				module: r,
				uses: { params: new Set(), path: !1, query: !1, session: !1, context: !1 },
				loaded: null,
				context: o
			},
			i = {};
		for (const a in s.params)
			Object.defineProperty(i, a, {
				get: () => (n.uses.params.add(a), s.params[a]),
				enumerable: !0
			});
		const l = this.$session;
		if (r.load) {
			const c = {
				page: {
					host: s.host,
					params: i,
					get path() {
						return (n.uses.path = !0), s.path;
					},
					get query() {
						return (n.uses.query = !0), s.query;
					}
				},
				get session() {
					return (n.uses.session = !0), l;
				},
				get context() {
					return (n.uses.context = !0), a({}, o);
				},
				fetch: this.started ? fetch : ot
			};
			e && ((c.status = t), (c.error = e));
			const u = await r.load.call(null, c);
			if (!u) return;
			(n.loaded = (function (t) {
				if (t.error) {
					const e = 'string' == typeof t.error ? new Error(t.error) : t.error,
						r = t.status;
					return e instanceof Error
						? !r || r < 400 || r > 599
							? (console.warn(
									'"error" returned from load() without a valid status code — defaulting to 500'
							  ),
							  { status: 500, error: e })
							: { status: r, error: e }
						: {
								status: 500,
								error: new Error(
									`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`
								)
						  };
				}
				if (t.redirect) {
					if (!t.status || 3 !== Math.floor(t.status / 100))
						return {
							status: 500,
							error: new Error(
								'"redirect" property returned from load() must be accompanied by a 3xx status code'
							)
						};
					if ('string' != typeof t.redirect)
						return {
							status: 500,
							error: new Error('"redirect" property returned from load() must be a string')
						};
				}
				return t;
			})(u)),
				n.loaded.context && (n.context = n.loaded.context);
		}
		return n;
	}
	async _load({ route: t, path: e, query: r }) {
		const s = `${e}?${r}`;
		if (this.cache.has(s)) return this.cache.get(s);
		const [o, n, i, l] = t,
			c = l ? l(o.exec(e)) : {},
			u = this.current.page && {
				path: e !== this.current.page.path,
				params: Object.keys(c).filter((t) => this.current.page.params[t] !== c[t]),
				query: r.toString() !== this.current.page.query.toString(),
				session: this.session_id !== this.current.session_id
			},
			d = { host: this.host, path: e, query: r, params: c },
			p = [];
		let h = {},
			f = !1,
			g = 200,
			_ = null;
		n.forEach((t) => t());
		t: for (let $ = 0; $ < n.length; $ += 1) {
			let t;
			try {
				if (!n[$]) continue;
				const e = await n[$](),
					r = this.current.branch[$];
				if (
					!r ||
					e !== r.module ||
					(u.path && r.uses.path) ||
					u.params.some((t) => r.uses.params.has(t)) ||
					(u.query && r.uses.query) ||
					(u.session && r.uses.session) ||
					(f && r.uses.context)
				) {
					t = await this._load_node({ module: e, page: d, context: h });
					const r = $ === n.length - 1;
					if (t && t.loaded) {
						if (
							(t.loaded.error && ((g = t.loaded.status), (_ = t.loaded.error)), t.loaded.redirect)
						)
							return { redirect: t.loaded.redirect };
						t.loaded.context && (f = !0);
					} else if (r && e.load) return;
				} else t = r;
			} catch (m) {
				(g = 500), (_ = m);
			}
			if (_) {
				for (; $--; )
					if (i[$]) {
						let t,
							e,
							r = $;
						for (; !(e = p[r]); ) r -= 1;
						try {
							if (
								((t = await this._load_node({
									status: g,
									error: _,
									module: await i[$](),
									page: d,
									context: e.context
								})),
								t.loaded.error)
							)
								continue;
							p.push(t);
							break t;
						} catch (m) {
							continue;
						}
					}
				return await this._load_error({ status: g, error: _, path: e, query: r });
			}
			t && t.loaded && t.loaded.context && (h = a(a({}, h), t.loaded.context)), p.push(t);
		}
		return await this._get_navigation_result_from_branch({ page: d, branch: p });
	}
	async _load_error({ status: t, error: e, path: r, query: s }) {
		const o = { host: this.host, path: r, query: s, params: {} },
			a = await this._load_node({ module: await this.fallback[0], page: o, context: {} }),
			n = [
				a,
				await this._load_node({
					status: t,
					error: e,
					module: await this.fallback[1],
					page: o,
					context: a && a.loaded && a.loaded.context
				})
			];
		return await this._get_navigation_result_from_branch({ page: o, branch: n });
	}
}
async function nt({ paths: t, target: e, session: r, host: s, route: o, spa: a, hydrate: n }) {
	const i = o && new rt({ base: t.base, routes: Q }),
		l = new at({ Root: G, fallback: Z, target: e, session: r, host: s });
	V(i),
		n && (await l.start(n)),
		o && i.init(l),
		a && i.goto(location.href, { replaceState: !0 }, []),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { nt as start };
