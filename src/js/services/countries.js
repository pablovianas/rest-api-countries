async function getAllCountries() {
    const url = 'https://restcountries.com/v3.1/all'
    const response = await fetch(url)
    return await response.json()
}
async function getCountriesByRegion(region) {
    const url = `https://restcountries.com/v3.1/region/${region}`
    const response = await fetch(url)
    return await response.json()
}

async function getCountryName(getUrlFlagName) {
    const url = `https://restcountries.com/v3.1/name/${getUrlFlagName}`
    const response = await fetch(url)
    return await response.json()
}
async function getCountryByCode(code) {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    const response = await fetch(url)
    return await response.json()
}


export { getAllCountries, getCountriesByRegion, getCountryByCode, getCountryName }