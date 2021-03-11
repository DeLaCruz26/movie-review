import React, { Component } from 'react' 

class Form extends Component{
    state = {
        name: "",
        review: ""
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleRatingChange = (event) => {
        if(event.target.value >= 1 && event.target.value <= 10){
          this.setState({
            review: event.target.value
            })  
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            name: "",
            review: ""
        }, () => console.log(this.state))
        console.log(this.state);

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                 <input onChange={this.handleNameChange} type="text" name='name' placeholder='Movie Name...' value={this.state.name}/>
                 </label>
                 <br></br><br></br>
                 <label>
                     Review:
                 <input onChange={this.handleRatingChange} type="number" review='review' placeholder='Movie Rating 1/10' value={this.state.review}/>
                 </label>
                 <br></br><br></br>
                 <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default Form