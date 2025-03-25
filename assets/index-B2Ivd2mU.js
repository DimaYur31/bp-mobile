(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const a=new Map([["de","de"],["en","en"],["es","es"],["fr","fr"],["ja","ja"],["pt","pt"]]);function c(){const r=new URL(window.location.href).searchParams.get("lang");if(a.has(r))document.documentElement.lang=a.get(r);else{let e=!1;for(let n=0;n<navigator.languages.length;++n)if(a.has(navigator.languages[n].slice(0,2))){document.documentElement.lang=a.get(navigator.languages[n].slice(0,2)),e=!0;break}!e&&(document.documentElement.lang="en")}}async function l(){const r=new Map;try{const n=await(await fetch(`${document.documentElement.lang}.json`)).text();JSON.parse(n,(i,t)=>{i!==""&&t!==""&&r.set(i,t)})}catch(e){console.log("Не удалось получить файл нужного языка",e)}return r}const p=`
	<a href="#" class="cross">
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0105 11.5997L17.4165 6.19368L17.8144 6.59155L12.4084 11.9975L18 17.5892L17.5892 18L11.9975 12.4084L6.59155 17.8144L6.19368 17.4165L11.5997 12.0105L6 6.41085L6.41085 6L12.0105 11.5997Z" stroke="auto" stroke-linejoin="round" />
		</svg>
	</a>
	<h1>Get Unlimited <br>Access</h1>
	<div class="cards">
		<div>			
			<picture>
				<source srcset="img1-3x.webp" media="(min-resolution: 3dppx)">
				<source srcset="img1-2x.webp" media="(min-resolution: 2dppx)">
				<img src="img1.webp" alt="Unlimited Art <br>Creation">
			</picture>
			<p>Unlimited Art <br>Creation</p>
		</div>
		<div>
			<picture>
				<source srcset="img2-3x.webp" media="(min-resolution: 3dppx)">
				<source srcset="img2-2x.webp" media="(min-resolution: 2dppx)">
				<img src="img2.webp" alt="Exclusive <br>Styles">
			</picture>
			<p>Exclusive <br>Styles</p>
		</div>
		<div>
			<picture>
				<source srcset="img3-3x.webp" media="(min-resolution: 3dppx)">
				<source srcset="img3-2x.webp" media="(min-resolution: 2dppx)">
				<img src="img3.webp" alt="Magic Avatars <br>With 20% Off">
			</picture>
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
`;function u(r,e=p){for(let n of r)e=e.replaceAll(`${n[0]}`,`${n[1]}`);return e}function d(r,e=["$39.99","$0.48","$6.99"],n="{{price}}"){let i=0;for(;i<e.length&&r.includes(n);)r=r.replace(n,`${e[i]}`),++i;return r}(async function(){var n;c();const r=await l();document.querySelector("#app").innerHTML=d(u(r));const e=document.querySelector(".white-button");e&&((n=document.querySelector(".panel"))==null||n.addEventListener("change",i=>{e.href=i.target.value}))})();
