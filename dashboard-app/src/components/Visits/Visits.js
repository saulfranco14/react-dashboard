import React, { Component } from 'react';
import './Visits.css';

class Visits extends Component {
    render() {
        return (
            <div className="Visits">
            <div className="visitsContainer">
                <p className="titleOne">VISITS</p>
                <p className="subtitle">600.000.000</p>
            </div>
            <div className="containerText">
                <div className="leftContainer">
                    <p className="titleTwoVisit">Tablet</p>
                    <div className="containerMetrics">
                        <p className="porcentContainer">80%</p>
                        <p className="moneyContainer">480.000.000</p>
                    </div>
                </div>
                <div className="rightContainer">
                    <p className="titleTwoVisit__">Smartphone</p>
                    <div className="containerMetrics">
                        <p className="porcentContainer">20%</p>
                        <p className="moneyContainer">120.000.000</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Visits;