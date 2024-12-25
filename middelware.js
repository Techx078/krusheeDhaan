const { FarmerSchema } = require("./schema.js");
const  {CropsSchema}  = require("./schema.js");
const expressHendler = require("./utils/expressHendler.js");
const ub= require("./models/user.js");
// const Review = require("./models/review.js");


module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated())
        {   
            req.flash("error","you must login to watch more..");
            return  res.redirect("/login");
        }
        next();
};

module.exports.saveredirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl)
        {   
            res.locals.redirectUrl=req.session.redirectUrl;
        }
        next();
}

module.exports.Farmermiddelware = (req, res, next) => {
    let { error } = FarmerSchema.validate(req.body);
    if (error) {
        throw new expressHendler(400, error);
    }
    else {
        next();
    }
},
module.exports.Cropsmiddelware = (req, res, next) => {
    let { error } = CropsSchema.validate(req.body);
    if (error) {
        throw new expressHendler(400, error);
    }
    else {
        next();
    }
}

module.exports.reviewMdilleware = (req, res, next) => {
    
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new expressHendler(400, error);
    }
    else {
        next();
    }
}


module.exports.isOwner=async (req,res,next)=>{
    let { id } =req.params;
    let user = await ub.findById(id);
    if(!user.owner._id.equals(res.locals.curruser._id))
    {      
          if(res.locals.redirectUrl)
           redirectUrl = res.locals.redirectUrl;
          else
         redirectUrl=  "/farmer";  
         req.flash("error","Hence your are not the owner of this Crop, you did note upadte or delete it.");
      return   res.redirect(redirectUrl);
    }
    next();
}
module.exports.isReviewAuthor=async (req,res,next)=>{
    let { id,revid } =req.params;
     
    let review = await Review.findById(revid);
    if(!review.author._id.equals(res.locals.curruser._id))
    {
        req.flash("error","Hence you are not the author of this review , you did not delete it.");
       return res.redirect(`/farmer/${id}/show`);
    }
    next();
}