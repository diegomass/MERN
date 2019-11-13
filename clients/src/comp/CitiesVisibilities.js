import React, { Component } from 'react'

import { cities } from '../test/Cities.test'

import Cities from './Cities'

class VisibleCities extends Component {
  constructor() {
    super()
    this.state = {
      cities: [],
      filteredCities: []
    }
  }

  componentWillMount() {
    this.setState({
      cities,
      filteredCities: cities
    })
  }

  filterCities = (citiesFilter) => {
    let filteredCities = this.state.cities
    filteredCities = filteredCities.filter((cities) => {
      let city = cities.toLowerCase() + cities.toLowerCase()
      return city.indexOf(
        citiesFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredCities
    })
  }

  render() {
    return (
      <Cities cities={this.state.filteredCities} match={this.props.match} onChange={this.filterCities} />
    )
  }
}

export default VisibleCities