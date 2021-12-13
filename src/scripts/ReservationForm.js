// this module is responsible for displaying the reservation form a customer uses to submit a request for a clown's services

const mainContainer = document.querySelector("#container")
import { sendRequest } from "./dataAccess.js"

export const ReservationForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="parentName">Parent's Name</label>
    <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="reservationAddress">Address of Reservation</label>
    <input type="text" name="reservationAddress" class="input" />
    </div>
    <div class="field">
    <label class="label" for="kidName">Kid's Name</label>
    <input type="text" name="kidName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="reservationDate">Date of Event</label>
    <input type="date" name="reservationDate" class="input" />
    </div>
    <div class="field">
    <label class="label" for="hours">Hours Needed</label>
    <input type="number" name="reservationHours" class="input" />
    </div>
    <div class="field">
    <label class="label" for="numberOfKids">Number of Kids Attending</label>
    <input type="number" name="numberOfKids" class="input" />
    </div>
    
    <div class="reservationButton">
    <button class="button" id="reservationRequest">Reservation Request</button>
    </div>
    `

    return html
}

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "reservationRequest") {

        const userParentName = document.querySelector("input[name='parentName']").value
        const userAddress = document.querySelector("input[name='reservationAddress']").value
        const userKidName = document.querySelector("input[name='kidName']").value
        const userDate = document.querySelector("input[name='reservationDate']").value
        const userHours = document.querySelector("input[name='reservationHours']").value
        const userNumberOfKids = document.querySelector("input[name='numberOfKids']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            address: userAddress,
            kidName: userKidName,
            date: userDate,
            hours: userHours,
            numberOfKids: userNumberOfKids
        }


        sendRequest(dataToSendToAPI)
    }
})