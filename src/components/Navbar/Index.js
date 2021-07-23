import React from 'react'
import '../../App.css';
import logo from '../../images/Logo_White.png'
import Navbarsearchbox from './NavbarSearchbox'
import {useHistory , BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default function Index() {

    const history = useHistory()

    const refreshPage = () => {
        history.push('/home');
    }

    const changeSearchDisplay = () => {
        <Navbarsearchbox/>
    } 

    return (
        <div>
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <img src={logo} alt="Logo" onClick={refreshPage} className="nav-logo" />
                    </div>
                </div>
                <div className="nav-search" onClick={changeSearchDisplay}>
                    <Navbarsearchbox/>
                </div>
                
            </div>
        </div>
    )
}
