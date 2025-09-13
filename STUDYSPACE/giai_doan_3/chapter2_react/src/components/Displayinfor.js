import React from "react";

class Displayinfor extends React.Component {
    render() {
        console.log(this.props)
        // destructuring array/obj
        const {age, name} = this.props;
        //props => properties 
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}

export default Displayinfor