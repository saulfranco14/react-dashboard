import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Index from './components/Index';

const App = () => (
    <Router>
        <Route path="/" exact component={Index}></Route> 
    </Router>
)

export default App;
