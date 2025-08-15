// Smooth scroll with header offset and focus management
(function() {
	const header = document.querySelector('.site-header');
	const nav = document.getElementById('primary-nav');
	const toggle = document.querySelector('.menu-toggle');
	const links = nav ? nav.querySelectorAll('a[href^="#"]') : [];

	function openNav() {
		if (!toggle || !nav) return;
		toggle.setAttribute('aria-expanded', 'true');
		nav.classList.add('open');
	}
	function closeNav() {
		if (!toggle || !nav) return;
		toggle.setAttribute('aria-expanded', 'false');
		nav.classList.remove('open');
	}
	function isMobile() {
		return window.matchMedia('(max-width: 860px)').matches;
	}

	// Mobile menu toggle
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			const expanded = toggle.getAttribute('aria-expanded') === 'true';
			expanded ? closeNav() : openNav();
		});
	}

	// Close on outside click
	document.addEventListener('click', (e) => {
		if (!isMobile() || !nav?.classList.contains('open')) return;
		const target = e.target;
		if (!(target instanceof Element)) return;
		if (target.closest('#primary-nav') || target.closest('.menu-toggle')) return;
		closeNav();
	});

	// Close on Esc
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') closeNav();
	});

	// Reset on resize to desktop
	window.addEventListener('resize', () => {
		if (!isMobile()) closeNav();
	});

	function scrollToId(id) {
		const target = document.querySelector(id);
		if (!target) return;
		const headerHeight = header ? header.getBoundingClientRect().height : 0;
		const top = target.getBoundingClientRect().top + window.scrollY - (headerHeight + 10);
		window.scrollTo({ top, behavior: 'smooth' });
	}

	links.forEach((a) => {
		a.addEventListener('click', (e) => {
			e.preventDefault();
			scrollToId(a.getAttribute('href'));
			if (isMobile()) closeNav();
		});
	});

	// Also capture any in-page anchor clicks globally
	document.addEventListener('click', (e) => {
		const target = e.target;
		if (!(target instanceof Element)) return;
		const link = target.closest('a[href^="#"]');
		if (!link) return;
		const href = link.getAttribute('href');
		if (!href || href.length < 2) return;
		const onSamePage = href.startsWith('#');
		if (onSamePage) {
			e.preventDefault();
			scrollToId(href);
		}
	});

	// Year
	const year = document.getElementById('year');
	if (year) year.textContent = new Date().getFullYear();
})();