import React, { useEffect , useState} from 'react';
import { Col, Row, Container, Button, Card, Table, Modal, Form } from "react-bootstrap";
import {findReservationByBook } from "../data/repository";
import { Link, useParams, useLocation } from 'react-router-dom'


function ConfirmPage(props) {
    const { state } = useLocation();
    const book = state;
    const [reservation, setReservation] = useState("");

    useEffect(() => {
        async function loadInformation() {
            console.log(book);
            const reservaton = await findReservationByBook(book.id);
            if (reservation) {
                setReservation(reservaton);
            }
           
        }

        loadInformation();
    });




    return (
        <Container>
        <div>
                <h1>Your booking has been confirmed as following information: </h1>
                <br></br>
                <h2>Reservation Number : {reservation.ReservationNo} </h2>
                <h4>Email: {reservation.Email} </h4>
                <h4>Contact Number: {reservation.Contact} </h4>
                <br></br>
                <h4>Book: {book.Name} </h4>
                <h4>Book ID: {book.Id} </h4>
                <br></br>
                <Link to="/Bookstore"
                >
                    Click here back to book store
                </Link>


            </div>
        </Container>
        );
}

export default ConfirmPage ;