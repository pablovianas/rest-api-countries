import { getCountryName } from "./countries.js"
import { screen } from "../objects/screen.js"

const urlParams = window.location.search
const params = new URLSearchParams(urlParams)
const getUrlFlagName = params.get('name')

window.onload = async () => {
    const renderCountry = await getCountryName(getUrlFlagName)
    screen.renderCountry(renderCountry)
}


