import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../../services/apiServices';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('');

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const handleRegister = async () => {
        //validate

        // submit 
        let data = await postRegister(email, username, password);
        // console.log(data)
        if (data && +data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        } else {
            toast.error(data.EM);
        }
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span>do you have an account ?</span>
                <button onClick={() => navigate('/login')}>Login</button>
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
                    <label>Username</label>
                    <input
                        type={"username"}
                        className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <div className="password-input">
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "Password"}
                            className='form-control'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <span
                        className='toggle-eye'
                        onClick={()=> setShowPassword(!showPassword)}
                        
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    
                </div>
                <span className='forgot-password'>Forgot Password?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >Register to Hugo
                    </button>

                </div>

                <div className='back text-center'>
                    <span onClick={() => { navigate('/') }}> &#60;&#60;Go to home page </span>
                </div>
            </div>
        </div>
    )
}

export default Register;