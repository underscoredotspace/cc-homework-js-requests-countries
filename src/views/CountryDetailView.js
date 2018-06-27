const pubSub = require('../helpers/pub_sub')

class CountryDetailView {
  constructor(detailElement) {
    this.detailElement = detailElement
  }

  bindEvents() {
    pubSub.subscribe('Countries:details', event => {
      const countryDetail = event.detail
      this.render(countryDetail)
    })
  }

  render(countryDetail) {
    this.detailElement.innerHTML = ''
    const {name, region} = countryDetail

    const nameElement = createElement({type:'h2', id:'country__name', text: name})
    const regionElement = createElement({type:'p', id:'country__region', text: `Region: ${region}`})

    this.detailElement.appendChild(nameElement)
    this.detailElement.appendChild(regionElement)
  }
}

module.exports = CountryDetailView

function createElement(options) {
  const element = document.createElement(options.type)
  if (options.id) {element.id = options.id}
  if (options.text) {element.textContent = options.text}

  return element
}