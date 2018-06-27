const pubSub = require('../helpers/pub_sub')

class SelectView {
  constructor(selectElement) {
    this.selectElement = selectElement
  }

  bindEvents() {
    pubSub.subscribe('Countries:names', event => {
      const countryNameList = event.detail
      console.log(countryNameList)
      this.populateCountriesList(countryNameList)
    })

    pubSub.subscribe('Countries:details', event => {
      const countryDetails = event.getdetail
      this.renderDetails(countryDetails)
    })

    pubSub.publish('SelectView:getNames')
  }

  renderDetails(countryDetails) {
    console.log(countryDetails)
  }

  populateCountriesList(countryNameList) {
    for (let countryName of countryNameList) {
      const option = document.createElement('option')
      option.id = countryName
      option.textContent = countryName
      this.selectElement.appendChild(option)
    }
  }


}

module.exports = SelectView