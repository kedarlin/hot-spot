import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import './Hotspots.css';
import Map from '../../components/Map/Map';

const Hotspots = () => {
  return (

    <div className='hotspots-container'>
      <Header />
      <div className='hotspots-body-container'>
        <Sidebar />
        <Map className="mapin"/>
      </div>
    </div>
  )
}

export default Hotspots