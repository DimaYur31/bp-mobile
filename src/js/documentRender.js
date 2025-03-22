const layout = `
	<a href="#" class="cross">
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0105 11.5997L17.4165 6.19368L17.8144 6.59155L12.4084 11.9975L18 17.5892L17.5892 18L11.9975 12.4084L6.59155 17.8144L6.19368 17.4165L11.5997 12.0105L6 6.41085L6.41085 6L12.0105 11.5997Z" stroke="auto" stroke-linejoin="round" />
		</svg>
	</a>
	<h1>Get Unlimited <br>Access</h1>
	<div class="cards">
		<div>
			<img src="img1.webp" alt="Unlimited Art <br>Creation">
			<p>Unlimited Art <br>Creation</p>
		</div>
		<div>
			<img src="img2.webp" alt="Exclusive <br>Styles">
			<p>Exclusive <br>Styles</p>
		</div>
		<div>
			<img src="img3.webp" alt="Magic Avatars <br>With 20% Off">
			<p>Magic Avatars <br>With 20% Off</p>
		</div>
	</div>
	<div class="panel">
		<label>
			<b>YEARLY ACCESS</b>
			<span>Just {{price}} per year</span>
			<input type="radio" name="link" value="https://apple.com">
			<span class="best">BEST OFFER</span>
			<span>{{price}} <br>per week</span>
		</label>
		<label>
			<b>WEEKLY ACCESS</b>
			<input type="radio" name="link" value="https://google.com" checked>
			<span>{{price}} <br>per week</span>
		</label>
		<a href="https://google.com" class="white-button" target="_blank">Continue</a>
	</div>
	<nav>
		<a href="#">Terms of Use</a>
		<a href="#">Privacy Policy</a>
		<a href="#">Restore</a>
	</nav>
`;

/**
 * Производит вставку текста на установленном языке страницы
 * @param {Map} dataText Map<key, value>  
 *		- key (string): строка по которой осуществляется поиск в HTML шаблоне.
 *      - valye (string): Текст на языке установленном для всей страницы, который вставляетс в HTML шаблон.
 * @param {string} htmlLayout Представляет собой HTML разметку страницы строкового формата, 
 * 	с заготовленными ключами для вставки необходимого текста
 * @returns {string} htmlLayout, HTML разметка страницы с текстом на языке, установленном для страницы
 */
export function changeLayoutLang(dataText, htmlLayout = layout) {
	for (let textLine of dataText) {
		htmlLayout = htmlLayout.replaceAll(`${textLine[0]}`, `${textLine[1]}`)
	}

	return htmlLayout;
}