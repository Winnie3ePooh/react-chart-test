import React from 'react'
import CenteredContainer from '../../components/CenteredContainer'
import Navbar from '../../components/Navbar'
import ChartComponent from '../../components/ChartComponent'

require('./Home.css')

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      selectedCityName: null
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <React.Fragment>
        <Navbar title='Среднемесячные остатки' />
        <CenteredContainer>
          <ChartComponent />
        </CenteredContainer>
      </React.Fragment>
    )
  }
}

export default Home
