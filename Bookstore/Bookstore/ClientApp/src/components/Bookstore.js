import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Button, Card, Table, Modal, Form} from "react-bootstrap";
import { findBooks, makeReservation, findReservationByBook } from "../data/repository";
import { useNavigate } from "react-router-dom";


function Bookstore() {

    const [isLoading, setIsLoading] = useState("");
    const [bookList, setBookList] = useState([]);
    const [filteredData, setFilteredData] = useState(null);
    const [selectedBook, setSelectedBook] = useState("");
    const [searchField, setSearchField] = useState("");
    const [showReservation, setShowNewReservation] = useState(false);
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const navigate = useNavigate();

    //show the reservation Modal
    const handleShow = (book) => {
        setShowNewReservation(true)
        setSelectedBook(book);
    };
    //close the Reservation Modal
    const handleClose = () => {
        setShowNewReservation(false);
        setSelectedBook("");
    }

    //load all books
    useEffect(() => {
        
        async function loadBookList() {

            if (searchField === "") {
                const data = await findBooks();

                setBookList(data);
                setFilteredData(bookList);
                setIsLoading(false);


            }
            
        }

        loadBookList();
    });



    //handle Search function
    const handleSearch = (event) => {

        const keyword = event.target.value.toLowerCase();
        if (keyword === "") {
            setFilteredData(bookList);
        } else {
            setFilteredData(
                bookList.filter((d) => {
                    if (d.name.toLowerCase().includes(keyword)) {
                        return true;
                    }
                    return false;
                })
            );
        }

    };

    //Make new Reservation
    const handleReserveBook = (event) => {
        //makesure email and contact number correct format


        //make the reservation
        const reservation =  makeReservation(selectedBook.id,email, contact);


        //reservation confirmation
        navigate("/ConfirmPage", { state: { book: selectedBook }});
    }


    return (
        <Container>
            <h1>Bookstore</h1>
            <Row>
                <Col>
                    <div>
                        <input
                            type="search"
                            placeholder="🔍 search..."
                            className="search-box"
                            value={searchField}
                            onChange={(event) => {
                                setSearchField(event.target.value);
                                handleSearch(event);
                            }}
                        />
                    </div>
                </Col>
                <Table>
                    <thead>
                        <tr><th>Book Name</th>
                            <th>Book Id</th>
                            <th>Reservation</th>
                        </tr>              
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr><td>Loading Books</td></tr>
                        ) : filteredData&& filteredData.length === 0 ? (
                            <tr><td>No search result </td></tr>
                        ) : filteredData &&(filteredData.map((book) =>
                            <tr key={book.id}>
                                <td>{book.name}</td>
                                <td>{book.id}</td>
                                <td>
                                    <Button onClick={() => handleShow(book)}>
                                        Make Reservation
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Row>
            <>
            <Modal show={showReservation} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Make a Reservation</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address: </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="user_email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(event) => {
                                                setEmail(event.target.value);
                                            }}
                                        />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group controlId="formBasicContact">
                                        <Form.Label>Contact Number: </Form.Label>
                                        <Form.Control
                                            type="contact"
                                            name="contact"
                                            placeholder="Enter Contact Number"
                                            value={contact}
                                            onChange={(event) => {
                                                setContact(event.target.value);
                                            }}
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                  
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleReserveBook()}
                    >
                        CONFIRM
                    </Button>

                </Modal.Footer>
            </Modal>
            </>
        </Container>
        
        


        );
}

export default Bookstore ;



