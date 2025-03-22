/**
 * Асинхронный запрос языкового файла, зависит от установленного языка страницы
 * @async
 * @returns {Promise<Map>} Promise, разрешается Map<key, value> с текстом на необходимом языке.
 *  	- key (string): строка по которой осуществляется поиск в HTML шаблоне.
 *      - valye (string): Текст необходимого языка, который вставляетс в HTML шаблон.
 */
export async function fetchLanguage() {
	const langData = new Map();
	try {
		const langJson = await fetch(`${document.documentElement.lang}.json`);
		const res = await langJson.text();

		JSON.parse(res, (key, value) => {
			if (key !== '' && value !== '') {
				langData.set(key, value);
			}
		});
	} catch (error) {
		console.log('Не удалось получить файл нужного языка', error);
	}

	return langData;
}