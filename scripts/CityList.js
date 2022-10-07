import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()



//  Iterating through cities array and returning unordered list of cities

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}
    



