import React from "react";

class AddUserinfor extends React.Component{

        state = {
        name: 'hong nguyen van',
        address: 'nghe an',
        age: 20
    };

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event, event.target.value)
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
        console.log(event, event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault();// nganư reload lại trang
        console.log(this.state)
        this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100)+1) + "random",
            name: this.state.name,
            age: this.state.age
        })

    }
    render() {
        return (
            <div> my name is {this.state.name} and i'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>your name </label>
                    <input 
                        name="name"
                        value ={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <label>your age </label>
                    <input 
                        name="age"
                        value ={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>submit</button>
                </form> </div>
        )
    }
}

export default AddUserinfor;