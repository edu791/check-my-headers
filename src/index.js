const { isUrlValid, makeRequest } = require('./helpers')
const { setHeaders, setStatus, getAll } = require('./report')
const { headerValidation } = require('./headerValidation')

const checkMyHeaders = async (url, headers) => {
  if (!isUrlValid(url)) throw new Error('Invalid URL format!')
  const { headers, statusCode } = await makeRequest(url, headers)
  setHeaders(headers)
  setStatus(statusCode)
  headerValidation(headers)
  return getAll()
}

module.exports = checkMyHeaders
