import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from 'react-toastify';
import { putUpdateNewUser } from '../../../services/apiServices'
import _ from 'lodash'
const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;
    const handleClose = () => {
        setShow(false);
        props.resetUpdateData();
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("")

    useEffect(() => {
        console.log("run useEffect", dataUpdate)
        if (!_.isEmpty(dataUpdate)) {
            // update state
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage('');
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate, show]);


    const handleUpLoadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        } else {
            //  setPreviewImage("");
        }

    }

    const handleSubmitCreateUser = async () => {
        // validate 
        let data = await putUpdateNewUser(dataUpdate.id, username, role, image)
        console.log("components", data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // await props.fetchListUsers();
             await props.fetchListUsersWithPaginate(props.currentPage);
        } else {
            toast.error(data.EM);
        }
    }


    console.log("check render 1", dataUpdate)
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(event) => setPassword(event.target.value)}

                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}

                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role </label>
                            <select className="form-select"
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div classNameName='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'>
                                <AiOutlinePlusCircle /> Up load file image
                            </label>
                            <input type='file'
                                hidden
                                id='labelUpload'
                                onChange={(event) => handleUpLoadImage(event)}
                            />
                        </div>

                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>preview image</span>
                            }

                        </div>


                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;