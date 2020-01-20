import React, { Component } from 'react';
import './Impressions.css';

class Impressions extends Component {
    render() {
        return (
            <div className="Impressions">
                <div className="impresionContainer">
                    <p className="titleOne">IMPRESSIONS</p>
                    <p className="subtitle">50.000.000</p>
                </div>
                <div className="containerText">
                    <div className="leftContainer">
                        <p className="titleTwoImpression">Tablet</p>
                        <div className="containerMetrics">
                            <p className="porcentContainer">40%</p>
                            <p className="moneyContainer">20.000.000</p>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <p className="titleTwoImpression__">Smartphone</p>
                        <div className="containerMetrics">
                            <p className="porcentContainer">60%</p>
                            <p className="moneyContainer">30.000.000</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Impressions;