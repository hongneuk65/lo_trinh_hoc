import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TableUser from "./TableUser";
import './ManageUser.scss';
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";

const ManageUser = (props) => {

    const [listUsers, setListUsers] = useState([]);
    const [showModalUpdateUser, setShowModalUpdateUser] =useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">manage user</div>
            <div classNameName="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}> < AiOutlinePlusCircle /> add new users</button>
                </div>
                <div className="table-user-container">
                    <TableUser listUsers={listUsers} 
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    />

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers} />

                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                />
            </div>


        </div>
    )

}

export default ManageUser;