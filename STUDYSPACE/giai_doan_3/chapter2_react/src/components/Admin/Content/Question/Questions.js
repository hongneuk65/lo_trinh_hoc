import { useState } from 'react';
import Select from 'react-select'
import "./Questions.scss";
import { LuCircleFadingPlus } from "react-icons/lu";
import { TbCircleDashedMinus } from "react-icons/tb";
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { LuImagePlus } from "react-icons/lu";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

const Questions = (props) => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    const [selectedQuiz, setSelectedQuiz] = useState('');
    const [questions, setQuestions] = useState([
        {
            id: uuidv4(),
            description: 'question 1',
            imageFile: '',
            imageName: '',
            answers: [
                {
                    id: uuidv4(),
                    description: 'answer 1',
                    isCorrect: false
                },
            ]
        }
    ])
    const handleAddRemoveQuestion = (type, id) => {
        if (type === 'ADD') {
            const newQuestion = {
                id: uuidv4(),
                description: 'question 1',
                imageFile: '',
                imageName: '',
                answers: [
                    {
                        id: uuidv4(),
                        description: '',
                        isCorrect: false
                    },

                ]
            }
            setQuestions([...questions, newQuestion])
        }
        if (type === 'REMOVE') {

            let questionsClone = _.cloneDeep(questions);

            questionsClone = questionsClone.filter(item => item.id !== id);
            setQuestions(questionsClone);

        }
        console.log(type, id)
    }
    const handleAddRemoveAnswer = (type, questionId, answerId) => {
        let questionsClone = _.cloneDeep(questions);
        if (type === 'ADD') {
            const newAnswer = {
                id: uuidv4(),
                description: '',
                isCorrect: false
            }
            let index = questionsClone.findIndex(item => item.id === questionId);
            questionsClone[index].answers.push(newAnswer);
            setQuestions(questionsClone);
            // setQuestions([...questions, newQuestion])
        }
        if (type === 'REMOVE') {
            let index = questionsClone.findIndex(item => item.id === questionId);
            questionsClone[index].answers = questionsClone[index].answers.filter(item => item.id !== answerId);
            setQuestions(questionsClone);
        }
    }


    return (
        <div className="questions-container">
            <div className="title">Mange Questions</div>
            <hr />
            <div className="add-new-question">
                <div className='col-6 form-group'>
                    <label className='mb-2'>select quiz</label>
                    <Select
                        value={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                        className=''
                    />
                </div>

                <div className='mt-3 mb-2'>Add questions:

                </div>
                {questions && questions.length > 0
                    && questions.map((question, index) => {
                        return (
                            <div key={question.id} className='q-main mb-4'>
                                <div className='questions-content'>

                                    <div className="form-floating description">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="name@example.com"
                                            value={question.description}
                                        />
                                        <label >Question {index + 1} 's  Description</label>
                                    </div>
                                    <div className='group-upload'>

                                        <label className='label-up'><LuImagePlus /></label>
                                        <input type={'file'} hidden />
                                        <span>0 file is uploaded</span>
                                    </div>
                                    <div className='btn-add'>
                                        <span onClick={() => handleAddRemoveQuestion('ADD', '')}><LuCircleFadingPlus className='icon-add' /></span>
                                        {questions.length > 1 &&
                                            <span onClick={() => handleAddRemoveQuestion('REMOVE', question.id)}><TbCircleDashedMinus className='icon-remove' /></span>
                                        }
                                    </div>

                                    {/* <div className='answers'>
                        <input type='text' />
                    </div> */}
                                </div>
                                {question.answers && question.answers.length > 0
                                    && question.answers.map((answer, index) => {
                                        return (
                                            <div key={answer.id} className='answer-content'>
                                                <input className="form-check-input iscorrect"
                                                    type="checkbox"
                                                />
                                                <div class="form-floating answer-name">
                                                    <input type="text"
                                                        className="form-control"
                                                        placeholder="name@example.com"
                                                        value={answer.description}
                                                    />
                                                    <label >Answer {index + 1}</label>
                                                </div>
                                                <div className='btn-group'>
                                                    <span onClick={() => handleAddRemoveAnswer('ADD', question.id)}><CiCirclePlus className='icon-add' /></span>
                                                    {question.answers.length > 1 &&
                                                        <span onClick={() => handleAddRemoveAnswer('REMOVE', question.id , answer.id)}><CiCircleMinus className='icon-remove' /></span>

                                                    }


                                                </div>
                                            </div>
                                        )
                                    })}

                            </div>)
                    })
                }


            </div>
        </div >
    )
}

export default Questions