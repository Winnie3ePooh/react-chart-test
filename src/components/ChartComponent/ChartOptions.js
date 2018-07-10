import { data } from '../../data/testData'
import Chart from 'chart.js'

export const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Выполнение плана',
    fontSize: 40
  },
  hover: {
    animationDuration: 0,
    mode: null
  },
  events: [],
  animation: {
    duration: 1,
    onComplete: function () {
      let chartInstance = this.chart
      let ctx = chartInstance.ctx
      ctx.font = Chart.helpers.fontString(
        Chart.defaults.global.defaultFontSize,
        Chart.defaults.global.defaultFontStyle,
        Chart.defaults.global.defaultFontFamily
      )
      ctx.backgroundColor = 'black'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'

      this.data.datasets.forEach(function (dataset, i) {
        if (dataset.type !== 'line') {
          let meta = chartInstance.controller.getDatasetMeta(i)
          meta.data.forEach(function (bar, index) {
            let data = dataset.data[index]
            ctx.fillText(data, bar._model.x, bar._model.y - 5)
          })
        }
      })
    }
  },
  legend: {
    display: true,
    position: 'right'
  },
  elements: {
    line: {
      tension: 0
    }
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          display: true,
          fontSize: 15,
          maxRotation: 75,
          minRotation: 75
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}
