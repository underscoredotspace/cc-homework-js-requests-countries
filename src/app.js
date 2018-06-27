const CountriesModel = require('./models/Countries')
const SelectView = require('./views/SelectView')

document.addEventListener('DOMContentLoaded', () => {
  const countries = new CountriesModel
  countries.bindEvents()

  const selectElement = document.querySelector('#countries')
  const selectView = new SelectView(selectElement)
  selectView.bindEvents()
});

