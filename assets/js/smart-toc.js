(function () {
	"use strict";

	const CONFIG_DEFAULTS = {
		autoCollapse: false,
		autoScroll: false,
		scrollMarginTop: 80,
		scrollMarginBottom: 140,
		activeOffsetRatio: 0.4,
		throttleDelay: 100,
	};

	let config = { ...CONFIG_DEFAULTS };
	let isScrollingToAnchor = false;
	let throttleTimer = null;

	function throttle(fn, delay) {
		return function (...args) {
			if (throttleTimer) return;
			throttleTimer = setTimeout(() => {
				fn.apply(this, args);
				throttleTimer = null;
			}, delay);
		};
	}

	function getActiveId(anchors, offsetRatio) {
		const threshold = window.scrollY + window.innerHeight * offsetRatio;
		const tocLinks = [...document.querySelectorAll('#TableOfContents a[href^="#"]')];
		const tocIds = new Set(tocLinks.map((link) => link.getAttribute("href").substring(1)));

		if (isScrollingToAnchor) {
			for (let i = 0; i < anchors.length; i++) {
				const anchor = anchors[i];
				if (!tocIds.has(anchor.id)) continue;
				const top = anchor.getBoundingClientRect().top + window.scrollY;
				if (Math.abs(window.scrollY - top) < 100) {
					return anchor.id;
				}
			}
		}

		for (let i = anchors.length - 1; i >= 0; i--) {
			const top = anchors[i].getBoundingClientRect().top + window.scrollY;
			if (top <= threshold && tocIds.has(anchors[i].id)) {
				return anchors[i].id;
			}
		}
		return anchors.find((anchor) => tocIds.has(anchor.id))?.id || "";
	}

	function updateTOC({ toc, tocView, anchors, links, config }) {
		const activeId = getActiveId(anchors, config.activeOffsetRatio);
		if (!activeId) return;

		links.forEach((link) => {
			const isActive = link.getAttribute("href") === `#${activeId}`;
			link.classList.toggle("active", isActive);

			if (config.autoCollapse) {
				const ul = link.closest("li")?.querySelector("ul");
				if (ul) ul.style.display = isActive ? "" : "none";
			}
		});

		if (config.autoCollapse) {
			const activeLink = toc.querySelector(`a[href="#${CSS.escape(activeId)}"]`);
			let el = activeLink;
			while (el && el !== toc) {
				if (el.tagName === "UL") el.style.display = "";
				if (el.tagName === "LI") el.querySelector("ul")?.style.setProperty("display", "");
				el = el.parentElement;
			}
		}

		if (config.autoScroll && tocView) {
			const activeLink = toc.querySelector(`a[href="#${CSS.escape(activeId)}"]`);
			if (activeLink) {
				const offsetTop = activeLink.offsetTop;
				const offsetHeight = activeLink.offsetHeight;
				const containerHeight = tocView.clientHeight;
				const scrollTop = tocView.scrollTop;

				if (offsetTop < scrollTop + config.scrollMarginTop) {
					tocView.scrollTo({ top: offsetTop - config.scrollMarginTop, behavior: "smooth" });
				} else if (offsetTop + offsetHeight > scrollTop + containerHeight - config.scrollMarginBottom) {
					tocView.scrollTo({
						top: offsetTop + offsetHeight - containerHeight + config.scrollMarginBottom,
						behavior: "smooth",
					});
				}
			}
		}
	}

	function initSmartTOC(options = {}) {
		config = { ...CONFIG_DEFAULTS, ...options };

		const toc = document.querySelector("#TableOfContents");
		if (!toc) return;

		const tocView = document.querySelector("#TOCView");
		const anchors = [...document.querySelectorAll(".anchor")];
		const links = [...toc.querySelectorAll('a[href^="#"]')];

		if (config.autoCollapse) {
			toc.querySelectorAll("li ul").forEach((ul) => (ul.style.display = "none"));
		}

		const context = { toc, tocView, anchors, links, config };

		links.forEach((link) => {
			link.addEventListener("click", () => {
				isScrollingToAnchor = true;
			});
		});

		const throttledUpdateTOC = throttle(() => updateTOC(context), config.throttleDelay);
		window.addEventListener("scroll", throttledUpdateTOC, { passive: true });
		window.addEventListener("hashchange", () => updateTOC(context), { passive: true });
		updateTOC(context);
	}

	window.tocHighlight = { init: initSmartTOC };
})();
