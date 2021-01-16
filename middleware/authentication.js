const jwt = require('jsonwebtoken')

const domainBlock = ["/login", "/authentication/login", "/signup", "/authentication/signup", "/student/review", "/student/favourite", "/student/buy"]

const decodeToken = (req, res, next) => {
  try {
    // console.log("Url", req.originalUrl)
    if(!domainBlock.includes(req.originalUrl)) {
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

const verifyInstructor = (req, res, next) =>{
  req.token = req.cookies.token;
  if(typeof req.token !== 'undefined'){
    jwt.verify(req.token, 'secret', { algorithms: ['HS256'] }, (error, authData)=>{
      if(error){
        res.redirect('/login')
      }else{
        console.log(authData)
        return next();
      }
    });
  }else{
    res.redirect('/login')
  }
};

module.exports = {
  decodeToken,
  verifyToken,
  verifyInstructor
}
