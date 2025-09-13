import React from "react";
import './Displayinfor.scss';
import logo from './../logo.svg';
import './MyComponent.js'

class Displayinfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    
    render() {

        // console.log(this.props)
        // destructuring array/obj
        const { listUsers } = this.props;
        // console.log(listUsers)
        //props => properties 
        return (

            <div className = 'display-infor-container'>
                <img src ={logo}/>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+ user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <div >
                                        <button onClick={() => this.props.handleDeleteUser(user.id)} >delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )

                        })}
                    </div>
                }
            </div>
        )
    }
}

export default Displayinfor