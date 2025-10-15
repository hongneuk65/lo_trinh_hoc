import { useState, useEffect } from 'react';
import Select from 'react-select';
import { getAllQuizAdmin, getAllUsers, postAssignQuiz } from '../../../../services/apiServices';
import { toast } from 'react-toastify';



const AssignQUiz = (props) => {

    const [listQuiz, setListQuiz] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState('');

    const [listUser, setListUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');


    useEffect(() => {
        fetchQuiz();
        fetchUser();
    }, setListQuiz)

    const fetchQuiz = async () => {
        let res = await getAllQuizAdmin();
        if (res && res.EC === 0) {
            let newQuiz = res.DT.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.name}`
                }
            })
            setListQuiz(newQuiz);
        }
    }
    const fetchUser = async () => {
        let res = await getAllUsers();
        if (res && res.EC === 0) {
            let users = res.DT.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.username} -  ${item.email}`
                }
            })
            setListUser(users);
        }
    }
    const handleAssign = async () =>  {
      let res =  await postAssignQuiz(selectedQuiz.value, selectedUser.value);
      if(res && res.EC === 0 ){
        toast.success(res.EM);
      } else {
        toast.error(res.EM);
      }
    }

    return (
        <div className="assign-quiz-container row m-2">
            <div className='col-6 form-group '>
                <label className='mb-2'>select quiz</label>
                <Select
                    value={selectedQuiz}
                    onChange={setSelectedQuiz}
                    options={listQuiz}
                    className=''
                />
            </div>
            <div className='col-6 form-group '>
                <label className='mb-2'>select user</label>
                <Select
                    value={selectedUser}
                    onChange={setSelectedUser}
                    options={listUser}
                    className=''
                />
            </div>

            <div>
                <button 
                className='btn btn-warning mt-2 '
                onClick={() => handleAssign()}
                >
                    Assign
                </button>
            </div>


        </div>
    )
}

export default AssignQUiz