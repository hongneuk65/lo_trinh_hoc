import 'react-pro-sidebar/dist/css/styles.css'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';

import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md"

import { Link , useNavigate} from 'react-router-dom';


const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    const navigate = useNavigate();
    return (
        <>

            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color={"00bfff"} />
                        <span onClick={()=> navigate('/')}>Study React</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}

                        >
                            <Link to="/admin" />
                        </MenuItem>

                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu


                            icon={<FaGem />}
                            title="Features"
                        >
                            <MenuItem>
                                Quản lý User
                                <Link to="/admin/manage-users" />

                            </MenuItem>
                            <MenuItem> Quản lý bài Quiz
                            
                                <Link to="/admin/manage-quizzes" />
                    
                            
                            </MenuItem>


                            <MenuItem> Quản lý câu hỏi
                            <Link to="/admin/manage-questions" /></MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href='https://github.com/hongneuk65/lo_trinh_hoc'
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                nguyen van hong
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default Sidebar;