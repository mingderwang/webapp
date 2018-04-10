'use strict';
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [100, 100, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

class my_First_React_D3_Library_Component extends React.Component {
  componentDidMount() {
		console.log(this.refs.chart); // returns a Chart.js instance reference
	}
  render() {
    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut ref='chart' data={data} />
      </div>
    )
  }
};

export default my_First_React_D3_Library_Component
