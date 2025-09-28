import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../../services/apiServices';
import { toast } from 'react-toastify';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleLogin = async () => {
        //validate

        // submit 
        let data = await postLogin(email, password);
        console.log(data)
        if (data && +data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        } else {
            toast.error(data.EM);
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span>don't have an account yet?</span>
                <button>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                HUGO
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type={"Password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>Forgot Password?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                    >Login to Hugo
                    </button>

                </div>

                <div className='back text-center'>
                    <span onClick={() => { navigate('/') }}> &#60;&#60;Go to home page </span>
                </div>
            </div>
        </div>
    )
}

export default Login;