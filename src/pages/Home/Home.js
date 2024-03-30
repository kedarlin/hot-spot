import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { FaShieldAlt, FaServer } from 'react-icons/fa';
import { BsFillRecordBtnFill } from 'react-icons/bs'

const Home = () => {
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    navigate('/newcase');
  };

  return (
    <div className='home-container'>
      <Header />
      <div className='home-body-container'>
        <Sidebar />
        <div className='home-content'>
          <div className='home-header'>
            <h2 className='home-title'>DashBoard</h2>
            <div className='home-button' onClick={handleAskQuestion}>
              Create A New FIR Case
            </div>
          </div>
          <div className="main">

            <div className="box-container">
              <div className="box box1">
                <div className="text">
                  <h2 className="topic-heading">7,830</h2>
                  <h2 className="topic">Total Stations</h2>
                </div>

                <BsFillRecordBtnFill className="home-icon" alt="stations" />
              </div>

              <div className="box box3">
                <div className="text">
                  <h2 className="topic-heading">1,54,387</h2>
                  <h2 className="topic">Total Records</h2>
                </div>

                <FaServer className="home-icon" alt="records" />
              </div>
              <div className="box box5">
                <div className="text">
                  <h2 className="topic-heading">23,908</h2>
                  <h2 className="topic">Pending Cases</h2>
                </div>

                <FaShieldAlt className="home-icon" alt="pending" />
              </div>
            </div>

            <div className="report-container">
              <div className="report-header">
                <h1 className="recent-Articles">Station Reports</h1>
                {/* <button className="view">View All</button> */}
              </div>

              <div class="report-body">
                <table class="report-table">
                  <thead>
                    <tr class="report-topic-heading">
                      <th class="t-op">Station Code</th>
                      <th class="t-op">Location</th>
                      <th class="t-op">Total Cases</th>
                      <th class="t-op">Pending Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="item1">
                      <td class="t-op-nextlvl">R2-Koturpuram</td>
                      <td class="t-op-nextlvl">Koturpuram</td>
                      <td class="t-op-nextlvl">210</td>
                      <td class="t-op-nextlvl">69</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;