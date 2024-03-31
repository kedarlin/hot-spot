import React from 'react'
import './Sidebar.css';
import { FaHome, FaUsers, FaMapMarked } from 'react-icons/fa';
import 'react-icons/bi'
import { BiSolidBell } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/home');
    }
    const handleHotspots = () => {
        navigate('/hotspots');     
    }
    const handleAlerts = () => {
        navigate('/alerts');
    }
    const handleUsers = () => {
        navigate('/users');
    }
    return (

        <div className='sidebar-container'>
            <div className='sidebar-items'>
                <div className='sidebar-item' onClick={handleHome}>
                    <FaHome className='sidebar-icons' />
                    <p className='sidebar-item-p'>Home</p>
                </div>
                <div className='sidebar-item' onClick={handleHotspots}>
                    <FaMapMarked className='sidebar-icons' />
                    <p className='sidebar-item-p'>Hotspots</p>
                </div>
                <div className='sidebar-item' onClick={handleAlerts}>
                    <BiSolidBell className='sidebar-icons' />
                    <p className='sidebar-item-p'>Alerts</p>
                </div>
            </div>
            <div className='sidebar-items'>
                <div className='sidebar-item' onClick={handleUsers}>
                    <FaUsers className='sidebar-icons' />
                    <p className='sidebar-item-p'>Users</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar