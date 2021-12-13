// also acts as a main in sense but only stores the html to render the website

import { ReservationForm } from "./ReservationForm.js"
import { Requests } from "./Requests.js"

export const Buttons = () => {
    return `
        <h1>Button's the Clown Strikes Again!</h1>
        <section class="reservationForm">
            ${ReservationForm()}
        </section>
        <section class="reservationRequests">
            <h2>Reservation Requests</h2>
            ${Requests()}
        </section>
    `
}