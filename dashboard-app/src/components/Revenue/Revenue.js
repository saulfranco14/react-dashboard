import React, { Component } from 'react';

import './Revenue.css';

class Revenue extends Component {
    render() {
        return (
            <div className="Revenue">
                <div className="revenueContainer">
                    <p className="titleOne">REVENUE</p>
                    <p className="subtitle">200.000 €</p>
                </div>
                <div className="containerText">
                    <div className="leftContainer">
                        <p className="titleTwo">Tablet</p>
                        <div className="containerMetrics">
                            <p className="porcentContainer">60%</p>
                            <p className="moneyContainer">120.000 €</p>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <p className="titleTwo__">Smartphone</p>
                        <div className="containerMetrics">
                            <p className="porcentContainer">40%</p>
                            <p className="moneyContainer">80.000 €</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Revenue;