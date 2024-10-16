const rp = require('request-promise')

const isUrlValid = (url = '') => {
  if (typeof (url) !== 'string') return false
  const regex = /(?:^|[ \t])((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)/g
  return regex.test(url)
}

const makeRequest = (uri, headers) => {
  return rp({
    uri,
    headers,
    transform: (body, { headers, statusCode }) => ({ headers, statusCode })
  })
}

module.exports = {
  isUrlValid, makeRequest
}
