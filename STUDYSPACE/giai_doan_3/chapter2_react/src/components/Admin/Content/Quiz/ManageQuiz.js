import { useState } from 'react';
import './ManageQuiz.scss'
import Select from 'react-select';
import { postCreateNewQuiz } from '../../../../services/apiServices';
import { toast } from 'react-toastify';
import TableQuiz from './TableQuiz';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];

const ManageQuiz = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState("");
    const [image, setImage] = useState(null);

    const handleChangeFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }

    const handleSubmitQuiz = async () => {

        if (!name || !description) {
            toast.error('Name/Description is required...')
        }
        let res = await postCreateNewQuiz(description, name, type?.value, image);
        if (res && res.EC === 0) {
            toast.success(res.EM)
            setName('');
            setDescription('');
            setImage(null);

        } else {
            toast.error(res.EM)
        }
    }
    return (


        <div className="quiz-container">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            manage quiz
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="add-new">

                                <div className="list-detail">
                                    <fieldset className="border rounded-3 p-3">
                                        <legend className="float-none w-auto px-3">Add New Quiz</legend>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your quiz name"
                                                value={name}
                                                onChange={(event) => setName(event.target.value)}
                                            />
                                            <label >Name</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="description..."
                                                value={description}
                                                onChange={(event) => setDescription(event.target.value)}
                                            />
                                            <label >Description</label>
                                        </div>
                                        <div className='my-3 ' >
                                            <Select
                                                defaultValue={type}
                                                onChange={setType}
                                                options={options}
                                                placeholder={"Quiz type..."}
                                            />
                                        </div>
                                        <div className='more-actions form-group'>
                                            <label className='mb-1'>Upload image</label>
                                            <input
                                                type='file'
                                                className='form-control'
                                                onChange={(event) => handleChangeFile(event)}
                                            />

                                        </div>
                                        <div className='mt-3'>
                                            <button
                                                className='btn btn-warning'
                                                onClick={() => handleSubmitQuiz()}
                                            >
                                                Save</button>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='list-detail'>
                <TableQuiz />
            </div>
        </div>
    )

}

export default ManageQuiz;