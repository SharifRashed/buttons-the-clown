//this module is responsible for accessing data (fetch requests)

const mainContainer = document.querySelector("#container")

const applicationState = {

    requests: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        // or/ .then(res => res.json())

        //fetches a request from an external API and returns requested data
        // the result of the json response is the promise that is evualated
        .then(
            (reservationRequests) => {
                // Store the external state in application state
                applicationState.requests = reservationRequests
            }
        )
}

export const sendRequest = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}