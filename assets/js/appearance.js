(function () {
	const darkClass = "dark";

	function updateChromaTheme() {
		const lightCSS = document.getElementById("chroma-light");
		const darkCSS = document.getElementById("chroma-dark");
		if (!lightCSS || !darkCSS) return;
		const isDark = document.documentElement.classList.contains(darkClass);
		lightCSS.disabled = isDark;
		darkCSS.disabled = !isDark;
		void darkCSS.offsetHeight;
	}

	function updateMeta() {
		const elem = document.querySelector("body");
		if (!elem) return;
		const style = getComputedStyle(elem);
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta) meta.setAttribute("content", style.backgroundColor);
	}

	function getTargetAppearance() {
		return document.documentElement.classList.contains(darkClass) ? "dark" : "light";
	}

	function toggleDarkMode() {
		document.documentElement.classList.toggle(darkClass);
		const target = getTargetAppearance();
		localStorage.setItem("appearance", target);
		updateMeta();
		updateChromaTheme();
		if (typeof window.updateLogo === "function") window.updateLogo(target);
		if (typeof window.updateMermaidTheme === "function") window.updateMermaidTheme();
	}

	function resetAppearance() {
		localStorage.removeItem("appearance");
		updateChromaTheme();
		updateMeta();
		if (typeof window.updateLogo === "function") window.updateLogo(getTargetAppearance());
		if (typeof window.updateMermaidTheme === "function") window.updateMermaidTheme();
	}

	function init(params) {
		const userPreference = localStorage.getItem("appearance");
		const sitePreference = params.sitePreference;
		const chromaLightHref = params.chromaLightHref;
		const chromaDarkHref = params.chromaDarkHref;

		const isDark = userPreference === "dark" || (userPreference === null && sitePreference === "dark");

		if (isDark) {
			document.documentElement.classList.add(darkClass);
		}

		const head = document.head;

		const linkLight = document.createElement("link");
		linkLight.rel = "stylesheet";
		linkLight.href = chromaLightHref;
		linkLight.id = "chroma-light";

		const linkDark = document.createElement("link");
		linkDark.rel = "stylesheet";
		linkDark.href = chromaDarkHref;
		linkDark.id = "chroma-dark";

		if (isDark) {
			linkLight.disabled = true;
			linkDark.disabled = false;
		} else {
			linkLight.disabled = false;
			linkDark.disabled = true;
		}

		head.appendChild(linkLight);
		head.appendChild(linkDark);

		updateMeta();
		updateChromaTheme();
		if (typeof window.updateLogo === "function") window.updateLogo(getTargetAppearance());

		document.addEventListener("DOMContentLoaded", () => {
			const switcher = document.getElementById("appearance-switcher");
			const switcherMobile = document.getElementById("appearance-switcher-mobile");

			if (switcher) {
				switcher.addEventListener("click", toggleDarkMode);
				switcher.addEventListener("contextmenu", (e) => {
					e.preventDefault();
					resetAppearance();
				});
			}
			if (switcherMobile) {
				switcherMobile.addEventListener("click", toggleDarkMode);
				switcherMobile.addEventListener("contextmenu", (e) => {
					e.preventDefault();
					resetAppearance();
				});
			}
		});
	}

	window.appearance = { init };
})();
