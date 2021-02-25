import React, { Component } from 'react' 

class Form extends Component{
    state = {
        name: "",
        rating: null
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleRatingChange = (event) => {
        this.setState({
            rating: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                 <input onChange={this.handleNameChange} type="text" name='name' placeholder='Movie Name...' value={this.state.value}/>
                 </label>
                 <br></br><br></br>
                 <label>
                     Rating:
                 <input onChange={this.handleRatingChange} type="number" rating='rating' placeholder='Movie Rating 1/10' value={this.state.value}/>
                 </label>
                 <br></br><br></br>
                 <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default Form