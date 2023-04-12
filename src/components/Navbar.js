import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <h1 className="app-title">Grant Tracker</h1>
            <div className='navbar'>
                <ul className='links'>
                    <Link style={{ textDecoration: 'none' }} to='/cover'>Cover</Link>
                    <Link style={{ textDecoration: 'none' }}to='/narrative'>Narrative</Link>
                    <Link style={{ textDecoration: 'none' }} to='/financial'>Financial</Link>
                    <Link style={{ textDecoration: 'none' }} to='/submission'>Submit</Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar