// @flow

import React from 'react';
import ReactDOM from 'react-dom';
//import Index from './pages/index';
//import ImageGrid from './pages/imageGrid';
import TitleBar from './pages/titleBar';
import SimpleTable from './pages/simpleTable'

// $FlowIgnore - we don't want the missing dom element to be a silent error.
ReactDOM.render(
  <div class="box">
  <p>Test</p>
  <a href="/" class="button">Button</a>
  <TitleBar/>
<SimpleTable />

  <style jsx>{`
    .box {
  border: 1px solid #ccc;
  padding: 10px;
}
.button {
  background-color: #174E7D;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  margin-bottom: 5px;
  padding: 5px 15px;
  text-decoration: none;
}
     p {
       color: red;
     }
   `}</style>

   </div>
  , document.querySelector('#root'));
