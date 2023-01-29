import React, { useEffect , useState} from 'react';
import { Col, Row, Container, Button, Card, Table, Modal, Form } from "react-bootstrap";
import {findReservationByBook } from "../data/repository";
import { Link, useParams, useLocation } from 'react-router-dom'


function ConfirmPage() {
    const location = useLocation();
    const [reservation, setReservation] = useState("");

    useEffect(() => {
        async function loadInformation() {
            const reservaton = await findReservationByBook(location.state.selectBook.id);
            setReservation(reservaton);
        }

        loadInformation();
    });




    return (
        <Container>
        <div>
            <h1>Your booking has been confirmed as following information: </h1>
                <h2>Reservation Number : {reservation.ReservationNo} </h2>
                <h4>Email: {reservation.Email} </h4>
                <h4>Contact Number: {reservation.Contact} </h4>
                <h4>BOOK:  {location.state.selectBook.Name} </h4>
                <h4>BOOK ID:  {location.state.selectBook.Id} </h4>


                <Link to="/Bookstore"
                >
                    Click here back to book store
                </Link>


            </div>
        </Container>
        );
}

export default ConfirmPage ;