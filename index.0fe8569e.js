const n={input:document.querySelector("#search-box"),countryList:document.querySelector(".country-list")};function t(n){return fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages `).then((n=>n.json()))}console.log(n.input),n.input.addEventListener("input",(function(e){console.log("that",e.target.value),t(`${e.target.value}`).then((t=>function(t){if(t.length>10)return alert("Too many matches found. Please enter a more specific name.");if(t.length>2||t.length<=10){const e=t.map((({flags:n,name:t,capital:e,population:a})=>`<li class="county-search"><img src="${n.svg}" class="flag"><p>${t.official}</p></li>`)).join("");n.countryList.innerHTML=e}if(1===t.length){const e=t.map((({flags:n,name:t,capital:e,population:a,languages:o})=>`<li class=""><img src="${n.svg}" class="flag"><p>${t.official}</p><div class="country-one"><p>Capital:${e}</p><p>Population:${a}</p><p>Languages:${Object.values(o)}</p></div></li>`)).join("");n.countryList.innerHTML=e}}(t)))})),t("ua").then((n=>console.log(n)));
//# sourceMappingURL=index.0fe8569e.js.map