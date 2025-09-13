// class component 
// function 

import React from "react";
import Userinfor from "./Userinfor";
import Displayinfor from "./Displayinfor";

class MyComponent extends React.Component {

    //JSX
    render() {
        return (
            <div>
                <Userinfor></Userinfor>
                <br/><br/>
                <Displayinfor name="VANHO"  age={50}/>
            </div>
        );
    }
}

export default MyComponent;