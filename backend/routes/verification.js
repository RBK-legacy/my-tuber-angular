const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
   const token = req.header('auth-token') ;
   if(!token) return res.status(401).send('access_denied')
   try {
       const verified = jwt.verify(token,process.env.TOKEN)
       req.user = verified;
       next();
   } catch(err) {
       res.send(400).send("invalid token")
   }
}
