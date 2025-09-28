import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomPage from './components/Home/HomePage';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageUser from './components/Admin/Content/ManageUser';
import Login from './components/Admin/Auth/Login';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomPage />} />
                    <Route path="/Users" element={<User />} />
                </Route>
                <Route path="/Admin" element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                </Route>

                <Route path="/login" element={<Login />} />

            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout;