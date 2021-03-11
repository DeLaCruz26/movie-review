import React from 'react'

function Movie(props) {
    return (
        <p>{props.name} has a review of {props.review}/10 based on Rotten Tomatoes</p>
    )
}
export default Movie