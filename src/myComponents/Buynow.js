import React from 'react';
import { Link } from 'react-router-dom'

function Buynow(props) {
    return (
        <div>
            <h2>Thank you for purchasing this item. </h2>
            <small><Link to="/">Back to home</Link></small>
        </div>
    );
}

export default Buynow;