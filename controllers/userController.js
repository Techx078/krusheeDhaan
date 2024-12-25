const passport=require('passport');
const Farmer = require( "../models/Farmer" )

module.exports.user_reg_get = (req, res) => res.render("roote");
module.exports.user_reg_post = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ email, username });
  await User.register(newUser, password);
  res.send(newUser);
};
module.exports.user_login_get = (req, res) => res.render("login");
module.exports.user_login_post=(req,res,next,Farmer)=>{
  console.log( Farmer );
  passport.authenticate('local', (err, Farmer, info) => {
      if (err) {
          console.log("Error in passport authentication:", err);
          return next(err);
      }
      if (!Farmer) {
         
          return res.redirect('/login');
      }
      req.logIn(Farmer, (err) => {
          if (err) {
              console.log("Error in req.logIn:", err);
              return next(err);
          }
        
          
          return res.redirect('/category/categoryPost');
      });
  })(req, res, next);
  

};
