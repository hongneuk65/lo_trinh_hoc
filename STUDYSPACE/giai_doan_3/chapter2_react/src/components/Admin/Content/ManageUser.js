import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">manage user</div>
            <div classNameName="user-content">
                <div>
                    <button>add new users</button>
                </div>
                <div>
                    table user
                    
                </div>
                <ModalCreateUser />
            </div>
            
        </div>
    )

}

export default ManageUser;