import ModalCreateUser from "./ModalCreateUser";
import { AiOutlinePlusCircle } from "react-icons/ai";

import './ManageUser.scss';
import { useState } from "react";

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">manage user</div>
            <div classNameName="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={()=> setShowModalCreateUser(true)}> < AiOutlinePlusCircle/> add new users</button>
                </div>
                <div className="table-user-container">
                    table user
                    
                </div>
                <ModalCreateUser show ={showModalCreateUser} setShow = {setShowModalCreateUser}/>
            </div>
            
        </div>
    )

}

export default ManageUser;