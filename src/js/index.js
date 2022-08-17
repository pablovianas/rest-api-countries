import { getAllCountries, getCountriesByRegion, getCountryName } from "./services/countries.js";
import { screen } from './objects/screen.js'

window.onload = async () => {
    const allCountries = await getAllCountries()
    screen.renderAllFlags(allCountries)
}

document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const flagName = document.getElementById('flag-search').value;

    if (flagName === '') {
        alert('Preencha o campo com um nome de um país')
        return
    }
    const searchedCountry =  await getCountryName(flagName)
    screen.renderCountrySearch(searchedCountry)
})

document.getElementById('regions').addEventListener('change',  async (e) =>{
    e.preventDefault()
    const regionSelected = document.getElementById('regions').value
    if (regionSelected === '') return
    const getRegionCountries = await getCountriesByRegion(regionSelected)

    screen.renderRegionFlags(getRegionCountries)
})

