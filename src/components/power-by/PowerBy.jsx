import React from 'react'
import powerLogo from '../../assets/images/Large Size 1.png'
import './power.css'

const PowerBy = () => {
  return (
    <>
        <div className="section power-by">
            <div className="container">
                <div className="power-card">
                    <h2>Powered by</h2>
                    <img src={powerLogo} alt="" />
                    <a href="/">www.resiliencesoft.com</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default PowerBy