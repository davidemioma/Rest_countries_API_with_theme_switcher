"use strict";

//Selectors
const countriesContainer = document.querySelector(".countries");
const toggler = document.querySelector(".nav_toggler");
const root = document.querySelector(":root");
const dropDownBtn = document.querySelector(".drop-down-btn");
const input = document.querySelector(".input");
const dropDownOptions = document.querySelector(".drop-downs");
const app = document.querySelector(".app");
const modal = document.querySelector(".country_modal");
const btnClose = document.querySelector(".btn_close");

//Functions
// GET COUNTRY DETAILS
const getCountryDetail = function (data) {
  //Format Currencies
  const currencies = data.currencies;
  let currencyArr = [];
  for (const key in currencies) {
    currencyArr.push(currencies[key].name);
  }
  const currency = currencyArr.join(", ");

  //Format Languages
  const languages = data.languages[0];
  let languagesArr = [];
  for (const key in languages) {
    languagesArr.push(languages[key]);
  }
  const language = languagesArr.join(", ");

  const modalBody = document.querySelector(".modal_grid");
  modalBody.innerHTML = `
        <img src="${data.flag}" alt="" class="modal_flag" />

        <div class="modal_content">
          <h2 class="modal_name">${data.name}</h2>

          <div class="main-info">
            <div>
              <p class="native-name"><span>Native Name: </span>${data.nativeName}</p>
              <p class="population"><span>Population: </span>${data.population}</p>
              <p class="region"><span>Region: </span>${data.region}</p>
              <p class="subregion"><span>Sub Region: </span>${data.subregion}</p>
              <p class="capital"><span>Capital: </span>${data.capital}</p>
            </div>

            <div>
              <p class="top-level"><span>Top Level Domain: </span>${data.topLevelDomain[0]}</p>
              <p class="currency"><span>Currencies: </span>${currency}</p>
              <p class="lanaguage"><span>Languages: </span>${language}</p>
            </div>
          </div>
        </div>
  `;
};

//CREATE THE CARD
const renderCountry = function (countries) {
  countries.forEach((data) => {
    const countryEl = document.createElement("div");
    countryEl.classList.add("country");
    countryEl.innerHTML = `  
          <img class="country_img" src="${data.flag}" />
             <div class="country_data">
               <h3 class="country_name">${data.name}</h3>
               <h4 class="country_region">${data.region}</h4>
               <p class="country_row"><span>Population:</span>${data.population}</p>
               <p class="country_row"><span>Region:</span>${data.region}</p>
               <p class="country_row"><span>Capital:</span>${data.capital}</p>
             </div> 
       `;

    countryEl.addEventListener("click", () => {
      app.classList.add("hidden");
      modal.style.display = "block";
      getCountryDetail(data);
    });

    countriesContainer.appendChild(countryEl);
    countriesContainer.style.opacity = 1;
  });
};

// GET COUNTRIES DATA
const getAllCountries = async function () {
  try {
    const res = await fetch(`https://restcountries.com/v2/all`);
    const data = await res.json();
    console.log(data);
    renderCountry(data);
  } catch (err) {
    console.error(err);
    alert(`Something went wrong ${err.message}. Try again`);
  }
};

//Event listeners and Onload
getAllCountries();

//Go back to the home page
btnClose.addEventListener("click", () => {
  app.classList.remove("hidden");
  modal.style.display = "none";
});

//SEARCH INPUT
input.addEventListener("input", function (e) {
  const { value } = e.target;
  const countryName = document.querySelectorAll(".country_name");

  countryName.forEach((name) => {
    if (name.textContent.toLowerCase().includes(value.toLowerCase())) {
      name.closest(".country").style.display = "block";
    } else {
      name.closest(".country").style.display = "none";
    }
  });
});

//SWITCH THEME
toggler.addEventListener("click", function () {
  root.classList.toggle("dark-mode");
  toggler.classList.toggle("dark-mode");
  dropDownBtn.classList.toggle("dark-mode");
});

//OPEN FILTER
dropDownBtn.addEventListener("click", function () {
  document.querySelector(".drop-downs").classList.toggle("hidden");
});

//REGION FILTER
dropDownOptions.addEventListener("click", function (e) {
  const regions = document.querySelectorAll(".country_region");

  regions.forEach((region) => {
    if (e.target.textContent === "All") {
      region.closest(".country").style.display = "block";
    } else {
      if (e.target.textContent === region.textContent) {
        region.closest(".country").style.display = "block";
      } else {
        region.closest(".country").style.display = "none";
      }
    }
  });
});
