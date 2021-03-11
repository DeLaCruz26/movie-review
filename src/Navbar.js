import React, { Component } from 'react' 
import { NavLink } from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/reviewed-movies">Reviewed Movies</NavLink>
                <NavLink exact to="/revire-movie">Review a Movie</NavLink>
            </div>
        )
    }
}