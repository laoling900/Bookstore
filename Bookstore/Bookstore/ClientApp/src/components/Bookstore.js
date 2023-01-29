import React, { useState, useEffect, Component } from 'react';
import { Col, Row, Container, Button, Card, Table } from "react-bootstrap";
import { findBooks } from "../data/repository";


function Bookstore() {

    const [isLoading, setIsLoading] = useState("");
    const [bookList, setBookList] = useState([]);
    const [filteredData, setFilteredData] = useState(null);
    const [seletedBook, setSelectedBook] = useState("");
    const [searchField, setSearchField] = useState("");


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
    const handleReserveBook = () => {
        // ensure the select book ID
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
                                    <Button onClick={() => handleReserveBook(book.id)}>
                                        Make Reservation
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Row>
            


        </Container>
        
        


        );
}

export default Bookstore ;




//export class Bookstore extends Component {
//  static displayName = Bookstore.name;

//  constructor(props) {
//    super(props);
//    this.state = { currentCount: 0 };
//    this.incrementCounter = this.incrementCounter.bind(this);
//  }

//  incrementCounter() {
//    this.setState({
//      currentCount: this.state.currentCount + 1
//    });
//  }

//  render() {
//    return (
//      <div>
//            <h1>Bookstore</h1>

//        <p>This is a simple example of a React component.</p>

//        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

//        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
//      </div>
//    );
//  }
//}
