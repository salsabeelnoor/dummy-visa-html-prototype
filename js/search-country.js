const searchBlock = document.querySelector('.search');
searchBtn = searchBlock.querySelector('.search__btn');
searchInput = searchBlock.querySelector('input');
searchOptions = searchBlock.querySelector('.search__content__options');

let countries = ['Afghanistan', 'Algeria', 'Argentina', 'Australia', 'Bangladesh', 'Belgium', 'Bhutan', 'Brazil', 'Canada', 'China', 'Denmark', 'Ethiopia', 'Finland', 'France', 'Germany', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Italy', 'Japan', 'Malaysia', 'Maldives', 'Mexico', 'Morocco', 'Nepal', 'Netherlands', 'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Russia', 'Romania', 'South Africa', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Uganda', 'Ukraine', 'United States', 'United Kingdom', 'Vietnam'];

function addCountry (selectedCountry) {
    searchOptions.innerHTML = '';
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? 'selected' : '';
        let li = `<li onClick="updateName(this)" class="${isSelected}">${country}</li>`;
        searchOptions.insertAdjacentHTML('beforeend', li);
    })
}

function updateName(selectedLi) {
    searchInput.value = '';
    addCountry(selectedLi.innerText);
    searchBlock.classList.remove('active');
    searchBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchBtn.addEventListener('click', () => {
    searchBlock.classList.toggle('active');
});
searchInput.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInput.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onClick="updateName(this)">${data}</li>`).join('');
    searchOptions.innerHTML = arr ? arr : `<p class="m-0 p-0"> Opps! Country not found </p>`;
})
addCountry();