const pubSub = require('../helpers/pub_sub')

class SelectView {
  constructor(selectElement) {
    this.selectElement = selectElement
  }

  bindEvents() {
    pubSub.subscribe('Countries:names', event => {
      const countryNameList = event.detail
      this.populateCountriesList(countryNameList)
    })

    this.selectElement.addEventListener('change', event => {
      const countryName = event.target.value
      pubSub.publish('SelectView:getDetails', countryName)
    })
  }

  populateCountriesList(countryNameList) {
    for (let countryName of countryNameList) {
      const option = document.createElement('option')
      option.id = countryName
      option.textContent = countryName
      this.selectElement.appendChild(option)
    }
  }

  getCountryNameList() {
    pubSub.publish('SelectView:getNames')
  }


}

module.exports = SelectView