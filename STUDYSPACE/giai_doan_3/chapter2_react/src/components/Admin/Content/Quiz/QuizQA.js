import { useEffect, useState } from 'react';
import Select from 'react-select';
import "./QuizQA.scss";
import { LuCircleFadingPlus } from "react-icons/lu";
import { TbCircleDashedMinus } from "react-icons/tb";
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { LuImagePlus } from "react-icons/lu";
import { v4 as uuidv4 } from 'uuid';
import _, { get } from 'lodash';
import "react-awesome-lightbox/build/style.css";
import Lightbox from "react-awesome-lightbox";
import { getAllQuizAdmin, getQuizWithQA, postUpsertQA } from '../../../../services/apiServices';
import { postCreateNewAnswerForQuiz, postCreateNewQuestionForQuiz } from '../../../../services/apiServices';
import { toast } from 'react-toastify';


const QuizQA = (props) => {
    const initQuizQA = [{
        id: uuidv4(),
        description: '',
        imageFile: '',
        imageName: '',
        answers: [
            {
                id: uuidv4(),
                description: '',
                isCorrect: false
            },
        ]
    }]
    const [questions, setQuestions] = useState(initQuizQA)

    const [listQuiz, setListQuiz] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState('');


    useEffect(() => {
        fetchQuiz()
    }, []);

    useEffect(() => {
        if (selectedQuiz && selectedQuiz.value) {
            fetchQuizWithQA();
        }
    }, [selectedQuiz])

    // return a promise that resolves with a File instance
    function urltoFile(url, filename, mimeType) {
        if (url.startsWith('data:')) {
            var arr = url.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[arr.length - 1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            var file = new File([u8arr], filename, { type: mime || mimeType });
            return Promise.resolve(file);
        }
        return fetch(url)
            .then(res => res.arrayBuffer())
            .then(buf => new File([buf], filename, { type: mimeType }));
    }

    const fetchQuizWithQA = async () => {
        let res = await getQuizWithQA(selectedQuiz.value);
        if (res && res.EC === 0) {
            let newQA = [];
            for (let i = 0; i < res.DT.qa.length; i++) {
                let q = res.DT.qa[i];
                if (q.imageFile) {
                    q.imageFile =

                        await urltoFile(`data:image/png;base64,${q.imageFile}`, `Question-${q.id}.png`, 'image/png');
                    q.imageName = `Question-${q.id}.png`;
                }
                newQA.push(q);
            }
            setQuestions(newQA);
            console.log("check", res, newQA);
        }

    }

    const fetchQuiz = async () => {
        let res = await getAllQuizAdmin();
        if (res && res.EC === 0) {
            let newQuiz = res.DT.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.description}`
                }
            })
            setListQuiz(newQuiz);
        }
    }

    const [isPreviewImage, setIsPreviewImage] = useState(false);

    const [dataImagePreview, setDataImagePreview] = useState({
        title: '',
        url: ''
    })


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

    const handleOnChange = (type, questionId, value) => {
        if (type === 'QUESTION') {
            let questionsClone = _.cloneDeep(questions);
            let index = questionsClone.findIndex(item => item.id === questionId);

            if (index > -1) {
                questionsClone[index].description = value;
                setQuestions(questionsClone);
            }

        }
    }
    const handleOnChangeFileQuestion = (questionId, event) => {
        let questionsClone = _.cloneDeep(questions);
        let index = questionsClone.findIndex(item => item.id === questionId);

        if (index > -1 && event.target && event.target.files && event.target.files[0]) {
            questionsClone[index].imageFile = event.target.files[0];
            questionsClone[index].imageName = event.target.files[0].name;
            setQuestions(questionsClone);
        }
    }

    const handleAnswerQuestion = (type, answerId, questionId, value) => {
        let questionsClone = _.cloneDeep(questions);
        let index = questionsClone.findIndex(item => item.id === questionId);

        if (index > -1) {
            questionsClone[index].answers =
                questionsClone[index].answers.map(answer => {
                    if (answer.id === answerId) {
                        if (type === 'CHECKBOX') {
                            answer.isCorrect = value;
                        }
                        if (type === 'INPUT') {
                            answer.description = value;
                        }

                    }
                    return answer;
                })
            setQuestions(questionsClone);
        }

    }

    const handleSubmitQuestionForQuiz = async () => {

        if (_.isEmpty(selectedQuiz)) {
            toast.error("please choose a quiz")
            return;
        }
        //validate answer
        let isValidAnswer = true;
        let indexQ = 0, indexA = 0;
        for (let i = 0; i < questions.length; i++) {

            for (let j = 0; j < questions[i].answers.length; j++) {
                if (!questions[i].answers[j].description) {
                    isValidAnswer = false;
                    indexA = j;
                    break;
                }
            }
            indexQ = i;
            if (isValidAnswer === false) break;
        }
        if (isValidAnswer === false) {
            toast.error(`not empty answer ${indexA + 1} at question ${indexQ + 1}`)
        }
        //validate questions

        let isValidQuestion = true;
        let indexQ1 = 0;
        for (let i = 0; i < questions.length; i++) {
            if (!questions[i].description) {
                isValidQuestion = false;
                indexQ1 = i;
                break;
            }
        }
        if (isValidQuestion === false) {
            toast.error(`not empty description for question ${indexQ1 + 1}`)
        }

        let questionsClone = _.cloneDeep(questions);
        for(let i = 0; i< questionsClone.length; i ++) {
            if(questionsClone[i].imageFile) {
                questionsClone[i].imageFile = 
                await toBase64(questionsClone[i].imageFile);
            }
        }
        let res = await postUpsertQA({
            quizId: selectedQuiz.value,
            questions: questionsClone
        });
        if(res && res.EC === 0) {
            toast.success(res.EM)
            fetchQuizWithQA();
        }
        // toast.success("create questions and answer succeed!")
        // setQuestions(initQuizQA)

    }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    const handlePreviewImage = (questionId) => {
        let questionsClone = _.cloneDeep(questions);
        let index = questionsClone.findIndex(item => item.id === questionId);
        if (index > -1) {
            setDataImagePreview({
                url: URL.createObjectURL(questionsClone[index].imageFile),
                title: questionsClone[index].imageName
            })
            setIsPreviewImage(true);
        }
    }

    return (

        <div className="questions-container">
            <div className="add-new-question">
                <div className='col-6 form-group'>
                    <label className='mb-2'>select quiz</label>
                    <Select
                        value={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={listQuiz}
                        className=''
                    />
                </div>

                <div className='mt-3 mb-2'>Add questions:

                </div>
                {console.log("checkkkkkk", questions)}
                {questions && questions.length > 0
                    && questions.map((question, index) => {
                        return (
                            <div key={question.id} className='q-main mb-4'>
                                <div className='questions-content'>

                                    <div className="form-floating description">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="name@example.com"
                                            value={question.description}
                                            onChange={(event) => handleOnChange('QUESTION', question.id, event.target.value)}
                                        />
                                        <label >Question {index + 1} 's  Description</label>
                                    </div>
                                    <div className='group-upload'>

                                        <label className='label-up' htmlFor={`${question.id}`}><LuImagePlus /></label>
                                        <input
                                            id={`${question.id}`}
                                            onChange={(event) => handleOnChangeFileQuestion(question.id, event)}
                                            type={'file'}
                                            hidden
                                        />
                                        <span>{question.imageName ? <span
                                            onClick={() => handlePreviewImage(question.id)}
                                        >{question.imageName}
                                        </span>
                                            :
                                            '0 file is uploaded'}
                                        </span>
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
                                                    checked={answer.isCorrect}
                                                    onChange={(event) => handleAnswerQuestion('CHECKBOX', answer.id, question.id, event.target.checked)}
                                                />
                                                <div className="form-floating answer-name">
                                                    <input type="text"
                                                        className="form-control"
                                                        placeholder="name@example.com"
                                                        value={answer.description}
                                                        onChange={(event) => handleAnswerQuestion('INPUT', answer.id, question.id, event.target.value)}

                                                    />
                                                    <label >Answer {index + 1}</label>
                                                </div>
                                                <div className='btn-group'>
                                                    <span onClick={() => handleAddRemoveAnswer('ADD', question.id)}><CiCirclePlus className='icon-add' /></span>
                                                    {question.answers.length > 1 &&
                                                        <span onClick={() => handleAddRemoveAnswer('REMOVE', question.id, answer.id)}><CiCircleMinus className='icon-remove' /></span>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        )
                    })
                }
                {questions && questions.length > 0 &&
                    <div>
                        <button
                            className='btn btn-warning'
                            onClick={() => handleSubmitQuestionForQuiz()}
                        >
                            Save Question</button>
                    </div>
                }
                {isPreviewImage === true &&
                    <Lightbox
                        image={dataImagePreview.url}
                        title={dataImagePreview.title}
                        onClose={() => setIsPreviewImage(false)}
                    >
                    </Lightbox>}
            </div>
        </div >
    )
}

export default QuizQA