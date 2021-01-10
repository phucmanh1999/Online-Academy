const jwt = require('jsonwebtoken')

const decodeToken = (req, res, next) => {
  try {
    var token = req.cookies.token;
    var decoded = jwt.verify(token, 'secret', { algorithms: ['HS256'] });
    req.user = decoded;
  } catch(err) {
      return next();
  }
  return next();
}
module.exports = {
  decodeToken
}