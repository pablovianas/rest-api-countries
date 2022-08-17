import { getCountryByCode } from "../services/countries.js"

const screen = {
    flagList: document.querySelector('.flags'),
    renderRegionFlags(flag) {
        let flags = ''
        flag.forEach(region => {
            flags += `<div class="flag">
                                         <a href="./src/pages/country.html?name=${region.name.common}">
                                            <img src="${region.flags.png}" alt="flag picture"/>
                                         </a>
                                            <div class="country-data">
                                                <h3>${region.name.common}</h3>
                                                <p> Population: ${region.population}</p>
                                                <p> Region: ${region.region}</p>  
                                                <p> Capital: ${region.capital}</p>  
                                            </div>
                                        </div>          
                                    `
        })
        
        this.flagList.innerHTML = flags
    },
    renderRegionNotFound() {
        this.flagList.innerHTML = "<h3> Region not found</h3>"
    },
    renderAllFlags(flags){
        let flagsList = ''
        flags.forEach(flag => {
            flagsList += `<div class="flag">
                                            <a href="./src/pages/country.html?name=${flag.name.common}">
                                                <img src="${flag.flags.png}" alt="flag picture"/>
                                            </a>
                                            <ul class="country-data">
                                                <h3>${flag.name.common}</h3>
                                                <li> <span> Population: </span> ${flag.population}</li>
                                                <li> <span> Region: </span>  ${flag.region}</li>  
                                                <li> <span> Capital: </span>  ${flag.capital}</li>  
                                            </ul>
                                        
                                        </div>          
                                    `
        })
        this.flagList.innerHTML = flagsList


    },
    country: document.querySelector('.country'),
    renderCountry(flag){
        let countrySelected = ''
        let borders = ''

        flag.forEach((country)=>{
            const currencies = Object.values(country.currencies)
            const languages = Object.values(country.languages)
            let currencyNames, languageNames 
            currencies.forEach((currency)=>{ 
                 currencyNames = currency.name
            })

            languages.forEach((language) => {
                languageNames = language
            })
          
            countrySelected += `<img src="${country.flags.svg}" alt="country flag picture"/>`

            if(country.borders){

                country.borders.forEach((border) => {
                    borders += `<li value="${border}"> 
                                    ${border}
                                </li>`
                })
    
                countrySelected += `
                                <div class="country-data">
                                        <h3>${country.name.common}</h3>
                                        <div class="country-info">
                                            <ul class="country-informations">
                                                <li> <span> Population: </span> ${country.population}</li>
                                                <li> <span> Region: </span> ${country.region}</li>  
                                                <li> <span> Subregion: </span> ${country.subregion}</li>
                                                <li> <span> Capital: </span> ${country.capital}</li>
                                            </ul>   
                                            <ul class="country-informations">
                                                <li> <span> Top Level Domain: </span> ${country.tld}</li>
                                                <li> <span> Currencies: </span> ${currencyNames}</li>
                                                <li> <span> Languages: </span> ${languageNames}</li>
                                            </ul>
                                        </div>
                                        <div class="borders">
                                            <h4>Border countries:  </h4>
                                            <ul class="border-list">
                                                ${borders} 
                                            </ul>
                                        </div> 
                                </div>`       
            }else{
                countrySelected += `
                                    <div class="borders">
                                        <h4>Border countries:  </h4>
                                        <p> This country has no borders </p>
                                    </div>` 
            }
        })  
        
        this.country.innerHTML = countrySelected

        const borderList = document.querySelectorAll('.border-list li')

        borderList.forEach( (border) => {
            border.addEventListener('click', async  (e) => {
                //e.preventDefault();
                const result = await getCountryByCode(e.target.innerText)
                const countryName = result[0].name.common

                if ('URLSearchParams' in window) {
                    const searchParams = new URLSearchParams(window.location.search);
                    searchParams.set("name", countryName);
                    window.location.search = searchParams.toString();
                }

                this.renderCountry(result)
            })
        }) 
    },
    renderCountrySearch(flag){
        let flagsList = ''
        flagsList += `<div class="flag">
                            <a href="./src/pages/country.html?name=${flag[0].name.common}">
                                <img src="${flag[0].flags.png}" alt="flag picture"/>
                            </a>
                            <div class="country-data">
                                <h3>${flag[0].name.common}</h3>
                                <p> Population: ${flag[0].population}</p>
                                <p> Region: ${flag[0].region}</p>  
                                <p> Capital: ${flag[0].capital}</p>  
                            </div>
                        
                        </div>   `
        
        this.flagList.innerHTML = flagsList
    }
}
export { screen }

