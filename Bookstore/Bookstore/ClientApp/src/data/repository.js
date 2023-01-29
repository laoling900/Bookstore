
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
    async function makeReservation(reservation) {

        const response = await fetch('/api/Reservations', {
            method: 'POST',
            body: JSON.stringify(reservation)
        });

        const data = await response.json();
        return data;

    }


    export {
        findBooks, findWeather, makeReservation

        }

