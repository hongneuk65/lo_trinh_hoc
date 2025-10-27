import { useRef, useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../../services/apiServices';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../../redux/action/userAction';
import { ImSpinner10 } from 'react-icons/im'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispath = useDispatch();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false)
    const handleLogin = async () => {
        //validate
        setIsLoading(true);
        // submit 
        let data = await postLogin(email, password);
        console.log(data)
        if (data && +data.EC === 0) {
            dispath(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/')
        } else {
            toast.error(data.EM);
            setIsLoading(false);

        }
    }
    const handleKeyDown = (event) => {
        console.log("check event", event.target)
        if (event && event.key === 'Enter') {
            if (event.target.id === 'password') {
                handleLogin();
            }
            else if (event.target.id === 'email') {
                console.log("password", password)
                passwordRef.current.focus();
            }
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span>don't have an account yet?</span>
                <button onClick={() => navigate('/register')}>Sign up</button>
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
                        id='email'
                        ref={emailRef}
                        type={"email"}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                    <label>Password</label>
                    <input
                        id='password'
                        ref={passwordRef}
                        type={"Password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                </div>
                <span className='forgot-password'>Forgot Password?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoading}
                    > {isLoading === true && < ImSpinner10 className='loaderIcon' />}
                        <span>Login to Hugo</span>
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