
    //get all books from API
    async function findBooks() {
        const response = await fetch('api/Books');
        const data = await response.json();
        return data;
    }

    
    async function findWeather() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        return data;
    }

    //Make a new reservation using API
async function makeReservation(id, email, contact) {
    let reservation = {
        id: id,
        email: email,
        contactNumber: contact,
    };

    console.log(reservation);
    console.log(JSON.stringify(reservation));
    const response = await fetch('/api/Reservation', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify(reservation),
        });

    const data = await response;
    console.log(data);
        return data;

    }


    export {
        findBooks, findWeather, makeReservation

        }

