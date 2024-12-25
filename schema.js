const joi = require('joi');

module.exports.FarmerSchema = joi.object({
    Farmer: joi.object(
        {
            FullName: joi.string().required(),
            Email: joi.string().required(),
            MobileNumber: joi.number().required(),
            State: joi.string().required(),
            District: joi.string().required(),
            Village: joi.string().required(),
            Type: joi.string().required(),
            ProileImage: joi.string().allow("", null)
        }
    ).required()
});

module.exports.CropsSchema = joi.object({
    Crops: joi.object({

        CropsName: joi.string().required(),
        Price: joi.number().required(),
        CropsDesc: joi.string().required(),
        CropsImage:joi.string().allow("",null)
    }).required()
}) 
module.exports.reviewSchema= joi.object({
    review: joi.object({
       
    rating: joi.number().required().min(1).max(5),
    comment: joi.string().required()    

    }).required()
}) 