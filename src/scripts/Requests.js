// this module is responsible for the reservation forms a customer uses to submit a reservation for a clown

import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getRequests()
    const listItemsArray = (request) => {

        return `<li class="request__delete">${request.parentName}<button
                id="request--${request.id}">
                delete
        </button></li>`
    }


    let html = `
        <ul>
        ${requests.map(listItemsArray).join("")
        }
      
        </ul>
    `

    return html
}