import { LANGUAGES } from "./constants";

/**
 * Функция определяет язык страницы в зависимости от GET параметра "lang" или языка систестемы.
 * Если не удалось определить язык, то устанавливает по умолчанию Английскик язык
 */
export function setDocumentLanguage() {
	const querySearchLang = new URL(window.location.href).searchParams.get('lang');

	if (LANGUAGES.has(querySearchLang)) {
		document.documentElement.lang = LANGUAGES.get(querySearchLang);
	} else {
		let isSetLang = false;

		for (let i = 0; i < navigator.languages.length; ++i) {
			if (LANGUAGES.has(navigator.languages[i].slice(0, 2))) {
				document.documentElement.lang = LANGUAGES.get(navigator.languages[i].slice(0, 2));
				isSetLang = true;
				break;
			}
		}

		!isSetLang && (document.documentElement.lang = 'en');
	}
}