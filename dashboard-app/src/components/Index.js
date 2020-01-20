import React, { Component } from 'react';

import Revenue      from './Revenue/Revenue';
import Impressions  from './Impressions/Impressions';
import Visits       from './Visits/Visits';

import './css/Index.css';

    class Index extends Component {
        render() {
            return (
                <div className="ContainerInner">
                    <Revenue />
                    <Impressions/>
                    <Visits/>
                </div>
            );
        }
    }

export default Index;