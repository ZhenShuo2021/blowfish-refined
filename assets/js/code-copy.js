document.addEventListener("DOMContentLoaded", () => {
	const copyText = "Copy";
	const copiedText = "Copied";

	document.querySelectorAll(".highlight-wrapper").forEach((wrapper) => {
		const button = wrapper.querySelector("button.copy-button");
		if (!button) return;

		const checkIcon = button.querySelector(".check-icon");
		if (checkIcon?.classList.contains("hidden")) {
			checkIcon.classList.remove("hidden");
		}

		button.addEventListener("click", async () => {
			const codeElement = wrapper.querySelector("pre code");
			if (!codeElement) return;

			const clonedCode = codeElement.cloneNode(true);
			clonedCode.querySelectorAll('.ln, [class*="ln"]').forEach((ln) => ln.remove());

			const code = clonedCode.textContent?.trim();
			if (!code) return;

			try {
				await navigator.clipboard.writeText(code);
			} catch {
				const textarea = document.createElement("textarea");
				textarea.value = code;
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand("copy");
				document.body.removeChild(textarea);
			}

			button.classList.add("copied");
			button.setAttribute("aria-label", copiedText);

			setTimeout(() => {
				button.classList.remove("copied");
				button.setAttribute("aria-label", copyText);
			}, 2000);
		});
	});
});
