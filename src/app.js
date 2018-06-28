const CountriesModel = require('./models/Countries')
const SelectView = require('./views/SelectView')
const CountryDetailView = require('./views/CountryDetailView')

document.addEventListener('DOMContentLoaded', () => {
  const countries = new CountriesModel
  countries.bindEvents()

  const selectElement = document.querySelector('#countries')
  const selectView = new SelectView(selectElement)
  selectView.bindEvents()

  const detailElement = document.querySelector('#country')
  const detailView = new CountryDetailView(detailElement)
  detailView.bindEvents()

  selectView.getCountryNameList()
});

