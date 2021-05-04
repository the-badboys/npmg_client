import {
	S as e,
	i as r,
	s,
	k as a,
	e as o,
	t,
	G as c,
	d as l,
	n,
	c as i,
	a as u,
	g as d,
	b as f,
	f as b,
	F as p,
	I as h,
	K as m,
	O as g,
	C as v,
	L as E
} from '../../chunks/index-31c2d992.js';
function y(e) {
	let r,
		s,
		y,
		x,
		w,
		L,
		P,
		A,
		I,
		k,
		N,
		D,
		R,
		S,
		q,
		F,
		T,
		U,
		B,
		V,
		j,
		G,
		O,
		C,
		K,
		M,
		z,
		H,
		J,
		Q,
		W,
		X,
		Y;
	return {
		c() {
			(r = a()),
				(s = o('form')),
				(y = o('label')),
				(x = o('span')),
				(w = t('Email')),
				(L = a()),
				(P = o('input')),
				(A = a()),
				(I = o('label')),
				(k = o('span')),
				(N = t('Password')),
				(D = a()),
				(R = o('input')),
				(S = a()),
				(q = o('div')),
				(F = o('div')),
				(T = o('label')),
				(U = o('input')),
				(B = t('\r\n\t\t\tRemember me?')),
				(V = a()),
				(j = o('a')),
				(G = t('Forgot password?')),
				(O = a()),
				(C = o('input')),
				(K = a()),
				(M = o('div')),
				(z = o('span')),
				(H = t("Don't have an account")),
				(J = a()),
				(Q = o('a')),
				(W = t('Register here?')),
				this.h();
		},
		l(e) {
			c('[data-svelte="svelte-1bel8ov"]', document.head).forEach(l),
				(r = n(e)),
				(s = i(e, 'FORM', { class: !0 }));
			var a = u(s);
			y = i(a, 'LABEL', { for: !0, class: !0 });
			var o = u(y);
			x = i(o, 'SPAN', { class: !0 });
			var t = u(x);
			(w = d(t, 'Email')),
				t.forEach(l),
				(L = n(o)),
				(P = i(o, 'INPUT', { type: !0, id: !0, required: !0, class: !0 })),
				o.forEach(l),
				(A = n(a)),
				(I = i(a, 'LABEL', { for: !0, class: !0 }));
			var f = u(I);
			k = i(f, 'SPAN', { class: !0 });
			var b = u(k);
			(N = d(b, 'Password')),
				b.forEach(l),
				(D = n(f)),
				(R = i(f, 'INPUT', { type: !0, id: !0, class: !0, required: !0 })),
				f.forEach(l),
				(S = n(a)),
				(q = i(a, 'DIV', { class: !0 }));
			var p = u(q);
			F = i(p, 'DIV', {});
			var h = u(F);
			T = i(h, 'LABEL', { for: !0, class: !0 });
			var m = u(T);
			(U = i(m, 'INPUT', { type: !0, class: !0, name: !0, id: !0 })),
				m.forEach(l),
				(B = d(h, '\r\n\t\t\tRemember me?')),
				h.forEach(l),
				(V = n(p)),
				(j = i(p, 'A', { href: !0, class: !0 }));
			var g = u(j);
			(G = d(g, 'Forgot password?')),
				g.forEach(l),
				p.forEach(l),
				(O = n(a)),
				(C = i(a, 'INPUT', { type: !0, value: !0, class: !0 })),
				(K = n(a)),
				(M = i(a, 'DIV', { class: !0 }));
			var v = u(M);
			z = i(v, 'SPAN', {});
			var E = u(z);
			(H = d(E, "Don't have an account")),
				E.forEach(l),
				(J = n(v)),
				(Q = i(v, 'A', { href: !0, class: !0 }));
			var X = u(Q);
			(W = d(X, 'Register here?')), X.forEach(l), v.forEach(l), a.forEach(l), this.h();
		},
		h() {
			(document.title = 'Login'),
				f(x, 'class', 'text-gray-700'),
				f(P, 'type', 'email'),
				f(P, 'id', 'email'),
				(P.required = !0),
				f(
					P,
					'class',
					'block bg-transparent focus:outline-none border-transparent focus:ring focus:border-green-500 w-full px-0.5 border-0 border-b-2  border-gray-300'
				),
				f(y, 'for', 'email'),
				f(y, 'class', 'block'),
				f(k, 'class', 'text-gray-700'),
				f(R, 'type', 'password'),
				f(R, 'id', 'password'),
				f(
					R,
					'class',
					'block bg-transparent focus:outline-none border-transparent focus:ring focus:border-green-500 w-full px-0.5 border-0 border-b-2  border-gray-300'
				),
				(R.required = !0),
				f(I, 'for', 'password'),
				f(I, 'class', 'block'),
				f(U, 'type', 'checkbox'),
				f(
					U,
					'class',
					'border-gray-300 border-2 rounded text-green-600 focus:border-gray-300 focus:ring-green-500 '
				),
				f(U, 'name', 'remberme'),
				f(U, 'id', 'remember'),
				f(T, 'for', 'remember'),
				f(T, 'class', 'inline-flex items-center'),
				f(j, 'href', '/auth/forgotpassword'),
				f(j, 'class', ' text-blue-500'),
				f(q, 'class', 'flex justify-between mt-4 mb-2'),
				f(C, 'type', 'submit'),
				(C.value = 'Login here'),
				f(
					C,
					'class',
					'bg-primaryGreen font-sourceSans rounded-md cursor-pointer text-white px-40 py-3 '
				),
				f(Q, 'href', '/auth/register'),
				f(Q, 'class', ' text-blue-500'),
				f(M, 'class', 'text-center'),
				f(s, 'class', 'grid grid-cols-1 gap-6');
		},
		m(a, o) {
			b(a, r, o),
				b(a, s, o),
				p(s, y),
				p(y, x),
				p(x, w),
				p(y, L),
				p(y, P),
				h(P, e[0]),
				p(s, A),
				p(s, I),
				p(I, k),
				p(k, N),
				p(I, D),
				p(I, R),
				h(R, e[1]),
				p(s, S),
				p(s, q),
				p(q, F),
				p(F, T),
				p(T, U),
				p(F, B),
				p(q, V),
				p(q, j),
				p(j, G),
				p(s, O),
				p(s, C),
				p(s, K),
				p(s, M),
				p(M, z),
				p(z, H),
				p(M, J),
				p(M, Q),
				p(Q, W),
				X || ((Y = [m(P, 'input', e[3]), m(R, 'input', e[4]), m(s, 'submit', g(e[2]))]), (X = !0));
		},
		p(e, [r]) {
			1 & r && P.value !== e[0] && h(P, e[0]), 2 & r && R.value !== e[1] && h(R, e[1]);
		},
		i: v,
		o: v,
		d(e) {
			e && l(r), e && l(s), (X = !1), E(Y);
		}
	};
}
function x(e, r, s) {
	let a, o;
	return [
		a,
		o,
		function () {
			console.log({ email: a, password: o });
		},
		function () {
			(a = this.value), s(0, a);
		},
		function () {
			(o = this.value), s(1, o);
		}
	];
}
export default class extends e {
	constructor(e) {
		super(), r(this, e, x, y, s, {});
	}
}
