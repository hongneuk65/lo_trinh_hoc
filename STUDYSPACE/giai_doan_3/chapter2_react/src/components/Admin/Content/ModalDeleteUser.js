import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from 'react-toastify';
import { delDeleteUser } from '../../../services/apiServices'
import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataUpdate, fetchListUsers } = props;

    const handleClose = () => {
        setShow(false);

    }


    const handleSubmitDeleteUser = async () => {
        let data = await delDeleteUser(dataUpdate.id);
        console.log("check dataaaaaaaaaaaa:", data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await fetchListUsers();
        } else {
            toast.error(data.EM);
        }
    };

    console.log("check data", dataUpdate)
    return (
        <Modal
            show={show}
            onHide={handleClose}
        >
            <ModalHeader>
                Delete user
            </ModalHeader>
            <ModalBody>
                Xác nhận xoá người dùng <b>{dataUpdate?.username}</b> không ?
            </ModalBody>
            <ModalFooter>
                <Button
                    className='btn btn-primary'
                    onClick={handleClose}
                >Huỷ</Button>
                <Button
                    className='btn btn-danger'
                    onClick={() => handleSubmitDeleteUser()}
                >Xoá</Button>
            </ModalFooter>
        </Modal>

    );
};


export default ModalDeleteUser;