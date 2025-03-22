import './style.css';
import { setDocumentLanguage, changeLayoutLang, fetchLanguage, setPrices } from './js';

(async function () {
	setDocumentLanguage();

	const dataMap = await fetchLanguage();

	document.querySelector('#app').innerHTML = setPrices(changeLayoutLang(dataMap));

	const whiteButton = document.querySelector('.white-button');

	whiteButton && document.querySelector('.panel')?.addEventListener('change', (e) => {
		whiteButton.href = e.target.value;
	});
})();