import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-warmimg text-dark">
            <div className="container">
                <Link to="/" className="navbar-brand text-dark">
                    Dissapearing Tweet
                </Link>
                <div>
                    <Link to="/tweet/add" className="btn btn-light ml-auto bg-success text-light">Create Tweets</Link>
                </div>

            </div>

        </nav>
    )
}
export default Navbar
