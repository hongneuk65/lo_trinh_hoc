import React from "react";

class Userinfor extends React.Component{

        state = {
        name: 'hong nguyen van',
        address: 'nghe an',
        age: 20
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
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

    }
    render() {
        return (
            <div> my name is {this.state.name} and i'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <lable>your name </lable>
                    <input 
                        value ={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>submit</button>
                    <br></br>
                    <lable>your age </lable>
                    <input 
                        value ={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>submit</button>
                </form> </div>
        )
    }
}

export default Userinfor;