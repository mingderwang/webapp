// @flow

import React from 'react';
import ReactDOM from 'react-dom';
//import Index from './pages/index';
//import ImageGrid from './pages/imageGrid';
//import TitleBar from './pages/titleBar';
import SimpleTable from './pages/simpleTable'

// $FlowIgnore - we don't want the missing dom element to be a silent error.
ReactDOM.render(<SimpleTable />, document.querySelector('#root'));
