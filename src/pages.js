import React from 'react';
import { Link, NavLink } from 'react-router-dom'



export const MyWishList=() =>{
    return(
        <div>
            My wish list
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/"
                exact
            >
                Home
            </NavLink>
        </div>
    )

    
}

export const MyList=() =>{
    return(
        <div>
         My list
         <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/"
                exact
            >
                Home
            </NavLink>
        </div>
    )

    
}