const mainContainer = document.querySelector("#container")

const applicationState = {

    reservations: []
}

const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        // or/ .then(res => res.json())

        //fetches a request from an external API and returns requested data
        // the result of the json response is the promise that is evualated
        .then(
            (serviceReservations) => {
                // Store the external state in application state
                applicationState.reservations = serviceReservations
            }
        )
}

export const sendReservation = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({ ...reservation }))
}