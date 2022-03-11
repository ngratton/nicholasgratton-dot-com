/**
 * Gestion du formulaire
 */
const handleFormSubmittion = () => {
	const form = document.querySelector('#form-contact');
	const button = document.querySelector('#btn-form-submit');
	const status = document.querySelector('#form-status');
	const statusText = document.querySelector('#form-status span');
	const statusDot = document.querySelector('#dot-status');
	
	const success = () => {
			form.reset();
			button.style = 'display: none';
			status.style = 'display: flex';
			status.classList.add('succes');
			statusDot.classList.add('svg-succes');
			statusText.innerHTML = 'Merci pour votre message !';
	};
	
	const error = () => {
			status.classList.add('erreur');
			status.sytle = 'display: flex';
			statusDot.classList.add('svg-erreur');
			statusText.innerHTML = 'Oups ! Il y a eu un problème.';
	};

	form.addEventListener('submit', event => {
		event.preventDefault();
		const data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
};
	
const ajax = (method, url, data, success, error) => {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
};

const fadeIntoView = (section) => {
	section.classList.add("fade-in");
};

const handleObserver = (sections) => { // array of observing elements
	sections.forEach(section => {
		if (section.isIntersecting) {
			const element = section.target.querySelector(".section-wrapper");

			if (!element.classList.contains("fade-in")) {
				fadeIntoView(element);
			}
			// observer.disconnect();
		}
	});
};

const listenForIntersection = (section) => {
	const options = { threshold: 0.4 };
	
	const observer = new IntersectionObserver(handleObserver, options);

	observer.observe(section);
};

const boot = () => {
	if ('IntersectionObserver' in window) {
		const sections = document.querySelectorAll(".section");
		sections.forEach(listenForIntersection);
	}

	handleFormSubmittion();
};

/* Wait for DOM to be loaded  */
window.addEventListener('DOMContentLoaded', () => {
	boot();
});