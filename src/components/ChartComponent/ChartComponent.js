import React from 'react'
import Chart from 'chart.js'

import { data } from '../../data/testData'
import { options } from './ChartOptions'

require('./ChartComponent.css')

const barColors = {
  more: 'green',
  less: 'red'
}

const lineColors = {
  line: 'orange',
  points: 'black'
}

class ChartComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      selectedCityName: null
    }
  }

  componentDidMount () {
    let chartContainer = document.getElementById('chart')
    let renderedChart = new Chart(chartContainer, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'План',
            data: this.getDataToDisplay('plan'),
            type: 'line',
            backgroundColor: lineColors.points,
            borderColor: lineColors.line,
            fill: false
          },
          {
            label: 'Факт',
            data: this.getDataToDisplay('fact'),
            backgroundColor: this.getColorsForBars('fact', 'plan')
          }
        ],
        labels: this.getDataToDisplay('date')
      },
      options: options
    })
  }

  getDataToDisplay (reqValue) {
    let dataToDisplay = data['dataSet'].map(el => {
      return el[reqValue]
    })
    return dataToDisplay
  }

  getColorsForBars (value, threshold) {
    let colorsForBars = data['dataSet'].map(el => {
      return el[value] >= el[threshold] ? barColors.more : barColors.less
    })
    return colorsForBars
  }

  render () {
    return (
      <div className='chart-container'>
        <canvas id='chart' />
      </div>
    )
  }
}

export default ChartComponent
