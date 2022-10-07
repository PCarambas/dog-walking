import { getPets, getWalkers } from "./database.js"

// type of event
document.addEventListener(
    "click",    
    (clickEvent) => {
    const itemClicked = clickEvent.target

    // Run if pet li is clicked

    if (itemClicked.id.startsWith("pet")) {
        console.log(clickEvent)

        // ! Still not completely sure what this does

        // ?? Splits the string into an array, takes the Id and gives it to be the value of the variable ??

        const [,petPrimaryKey] = itemClicked.id.split("--")
// console.log(petPrimaryKey)


        //  Iterating through the pets array

    // ?? Once I have primary key of the object, I find the whole object by iterating the array ??
    
        let matchingPet = null
        for (const pet of pets) {
            if (parseInt(petPrimaryKey) === pet.id) {
                matchingPet = pet


                // window.alert(`${pet.name} barks at you`)
            }

            //  Iterating through walkers array
        }
        let matchingWalker = null
        for (const walker of walkers) {
            if (matchingPet.walkerId === walker.id) {
                matchingWalker = walker

            }
        }
        window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
    }

}
)

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        // petHTML += `<li>${pet.name}</li>`
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML

}

