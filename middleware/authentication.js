const jwt = require('jsonwebtoken')

const decodeToken = (req, res, next) => {
  try {
    // console.log("Url", req.originalUrl)
    if(req.originalUrl !== "/login" && req.originalUrl !== "/authentication/login" && req.originalUrl !== "/signup" && req.originalUrl !== "/authentication/signup") {
      req.session.previousPage = req.originalUrl;
    }
    // console.log(req.session.previousPage)
    const token = req.cookies.token;
    const decoded = jwt.verify(token, 'secret', { algorithms: ['HS256'] });
    req.user = decoded;
  } catch(err) {
      return next();
  }
  return next();
}

const verifyToken = (req, res, next) =>{
  req.token = req.cookies.token;
  if(typeof req.token !== 'undefined'){
    jwt.verify(req.token, 'secret', { algorithms: ['HS256'] }, (error)=>{
      if(error){
        res.sendStatus(403);
      }else{
        return next();
      }
    });
  }else{
    res.sendStatus(403);
  }
};

module.exports = {
  decodeToken,
  verifyToken
}
