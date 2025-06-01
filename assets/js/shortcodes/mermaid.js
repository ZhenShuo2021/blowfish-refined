import mermaid from "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs";

function getMermaidTheme() {
	return document.documentElement.classList.contains("dark") ? "dark" : "default";
}

function initMermaid() {
	document.querySelectorAll(".mermaid").forEach((element) => {
		element.setAttribute("data-original", element.textContent.trim());
	});

	mermaid.initialize({
		startOnLoad: true,
		theme: getMermaidTheme(),
	});
}

function updateMermaidTheme() {
	const theme = getMermaidTheme();
	mermaid.initialize({
		theme: theme,
		startOnLoad: false,
	});

	document.querySelectorAll(".mermaid").forEach((element) => {
		if (!element.getAttribute("data-original")) {
			element.setAttribute("data-original", element.textContent.trim());
		}

		if (element.getAttribute("data-processed") === "true") {
			element.removeAttribute("data-processed");
		}

		element.innerHTML = element.getAttribute("data-original");
	});

	mermaid.run();
}

window.updateMermaidTheme = updateMermaidTheme;
initMermaid();
