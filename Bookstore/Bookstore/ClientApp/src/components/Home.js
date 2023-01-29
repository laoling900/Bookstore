import React from 'react';
import { Link } from 'react-router-dom'

function Home() {


    return (
        <div>
            <h1>BookStore coding test</h1>
            <p>This is a very small coding test using C#, MVC, CQRS, HTTPS, React to Implement an online bookstore</p>
            <br></br>
            
            <ul>
                <li>Backend using C#, Asp.net, Using MediarR to implement CQRS </li>
                <li>Database using SQLite to ensure a small project can be start up anywhere instead of having to set up a server</li>
                <li>The front end is a web client written with React and React bootstrap</li>
            </ul>
            <p>To help you get started:</p>
            <ul>
                <li>Using Visual studio start the project with Bookstore.sln</li>
                <li>Build the Solution</li>
                <li>start up the project</li>
            </ul>
            
        </div>

    );

}
 
export default Home ;
