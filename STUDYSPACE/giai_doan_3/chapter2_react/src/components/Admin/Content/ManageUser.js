import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Username</label>
                            <input type="text" className="form-control"  />
                        </div>
                        <div className="col-md-4">
                            <label  className="form-label">Role </label>
                            <select id="inputState" className="form-select">
                                <option selected value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div classNameName='col-md-12'>image</div>


                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

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
                    <Example />
                </div>

            </div>

        </div>
    )

}

export default ManageUser;