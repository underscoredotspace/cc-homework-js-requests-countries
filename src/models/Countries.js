const request = require('../helpers/request')
const pubSub = require('../helpers/pub_sub')

class CountriesModel {
  bindEvents() {
    pubSub.subscribe('SelectView:getNames', this.getNames)

    pubSub.subscribe('SelectView:getDetails', event => {
      const countryName = event.getdetail
      this.getDetails(countryName)
    })
  }

  getNames() {
    request({url:'https://restcountries.eu/rest/v2/all?fields=name'}, (error, result) => {
      if (error) {
        console.error(error)
        return
      }
      
      const countryNames = result.map(country => country.name)
      pubSub.publish('Countries:names', countryNames)
    })
  }

  getDetails(countryName) {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    request({url}, (error, result) => {
      if (error) {
        console.error(error)
        return
      }

      pubSub.publish('Countries:details', JSON.parse(result))
    })
  }
}

module.exports = CountriesModel