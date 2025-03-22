/**
 * Производит вставку необходимых цен в текстовый шаблон страницы
 * @param {string} layout HTML шаблон страницы текстового формата
 * @param {Array<string>} prices Массив необходимы цен 
 * @param {string} substr строка, служит ключом по которому происходит поиск и замена. 
 * 		Пример - '{{price}}'
 * @returns {string} layout, Html разметка документа со вставленными ценами
 */
export function setPrices(layout, prices = ['39.99', '0.48', '6.99'], substr = '{{price}}') {
	let priceCount = 0;

	while (priceCount < prices.length && layout.includes(substr)) {
		layout = layout.replace(substr, `$${prices[priceCount]}`);
		++priceCount;
	}

	return layout;
}