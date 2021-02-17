import React from 'react'

function Movie(props) {
    return (
        <p>{props.name} has a review of {props.review} based on Rotten Tomatoes</p>
    )
}
export default Movie