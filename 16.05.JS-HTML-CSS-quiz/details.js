let countryName = new URLSearchParams(window.location.search).get("name");
let detailedCountry = document.querySelector("#detailedCountry");
console.log(countryName);
function fillCard() {
  axios(`https://restcountries.com/v3.1/name/${countryName}`).then((res) => {
      detailedCountry.innerHTML = `
            <div class="col-6">
            <img src="${res.data[0].flags.svg}" alt="">    
            </div>
            <div class="col-6">
              <h2>${Object.values(res.data[0].name)}</h2>
              <div class="row">
                <div class="col-6">
                    <p>Native Name:${(res.data[0].nativeName)}</p>
                    <p>Population:${res.data[0].population}</p>
                    <p>region:${res.data[0].region}</p>
                    <p>Sub Region:${res.data[0].subregion}</p>
                    <p>Capital:${res.data[0].capital}</p>
                </div>
                <div class="col-6">
                    <p>Top level Domain:${res.data[0].topLevelDomain}</p>
                    <p>Currencies:${res.data[0].currencies[0]}</p>
                    <p>Languages:${Object.values(res.data[0].languages)}</p>
                </div>
                <span>Border Countries:</span>
              </div>
            </div>
            `;
    });
}
fillCard();
