import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
};

console.log(refs.input);

refs.input.addEventListener('input', onInput);

function onInput(e) {
  console.log('that', e.target.value);
  fetchCountries(`${e.target.value}`).then(r => renderCountry(r));
}

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages `
  ).then(r => {
    return r.json();
  });
}

function renderCountry(country) {
  if (country.length > 10) {
    return alert('Too many matches found. Please enter a more specific name.');
  }
  if (country.length > 2 || country.length <= 10) {
    const markup = country
      .map(
        ({ flags, name, capital, population }) =>
          `<li class="county-search"><img src="${flags.svg}" class="flag"><p>${name.official}</p></li>`
      )
      .join('');
    refs.countryList.innerHTML = markup;
  }
  if (country.length === 1) {
    const markup = country
      .map(
        ({ flags, name, capital, population, languages }) =>
          `<li class=""><img src="${flags.svg}" class="flag"><p>${
            name.official
          }</p><div class="country-one"><p>Capital:${capital}</p><p>Population:${population}</p><p>Languages:${Object.values(
            languages
          )}</p></div></li>`
      )
      .join('');
    refs.countryList.innerHTML = markup;
  }
}

// const r = fetch(
//   `https://restcountries.com/v3.1/name/sw?fields=name,capital,population ,flags,languages `
// )
//   .then(r => r.json())
//   .then(obj => console.log(obj));
// console.log(r);

fetchCountries('ua').then(r => console.log(r));
