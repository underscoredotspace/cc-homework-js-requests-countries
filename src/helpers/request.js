const request = (options, callback) => {
  if (!options.url) {
    callback('No url provided', null)
    return
  }

  const defaults = {
    method: 'GET',
    acceptHeader: 'application/JSON'
  }

  const {method, url, acceptHeader} = Object.assign(defaults, options)

  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader('Accept', acceptHeader)
  xhr.addEventListener('load', event => {
    const res = event.target
    if (res.status !== 200) {
      callback(`HTTP status: ${res.status}`, res)
      return
    }

    try {
      const responseText = JSON.parse(res.responseText)
      callback(null, responseText)
    } catch (error) {
      callback(error, res)
    }

  })
  xhr.send()
}

module.exports = request