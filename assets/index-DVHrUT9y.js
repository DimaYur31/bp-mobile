(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const i=new Map([["de","de"],["en","en"],["es","es"],["fr","fr"],["ja","ja"],["pt","pt"]]);function c(){const r=new URL(window.location.href).searchParams.get("lang");if(i.has(r))document.documentElement.lang=i.get(r);else{let e=!1;for(let n=0;n<navigator.languages.length;++n)if(i.has(navigator.languages[n].slice(0,2))){document.documentElement.lang=i.get(navigator.languages[n].slice(0,2)),e=!0;break}!e&&(document.documentElement.lang="en")}}async function l(){const r=new Map;try{const n=await(await fetch(`${document.documentElement.lang}.json`)).text();JSON.parse(n,(a,t)=>{a!==""&&t!==""&&r.set(a,t)})}catch(e){console.log("Не удалось получить файл нужного языка",e)}return r}const u=`
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
`;function d(r,e=u){for(let n of r)e=e.replaceAll(`${n[0]}`,`${n[1]}`);return e}function p(r,e=["$39.99","$0.48","$6.99"],n="{{price}}"){let a=0;for(;a<e.length&&r.includes(n);)r=r.replace(n,`${e[a]}`),++a;return r}(async function(){var n;c();const r=await l();document.querySelector("#app").innerHTML=p(d(r));const e=document.querySelector(".white-button");e&&((n=document.querySelector(".panel"))==null||n.addEventListener("change",a=>{e.href=a.target.value}))})();
