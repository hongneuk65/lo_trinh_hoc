// class component 
// function 

import React from "react";
import AddUserinfor from "./AddUserinfor";
import Displayinfor from "./Displayinfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hong", age: "27" },
            { id: 2, name: "hong nguyen ", age: "80" },
            { id: 3, name: "hong nguyen van", age: "17" }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })

    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter((user) => {
            return user.id !== userId;
        })

        this.setState({
            listUsers: listUsersClone
        })
    }

    //JSX
    render() {
        return (
            <>
                <div className="a">
                    <AddUserinfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /><br />
                    <Displayinfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}

                    />
                </div>

                <div className="b">

                </div>

            </>
        );
    }
}

export default MyComponent;