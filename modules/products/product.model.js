const MONGOOSE=require("mongoose")
const SCHEMA=MONGOOSE.Schema
const DISCOUNT_SCHEMA=new SCHEMA({
    discountedItem:Boolean,
    discountType:String,
    discount:Number,
    maxDiscount:Number,
    validFromType:String,
    validFrom:Number,
})
const WARRENTY_SCHEMA=new SCHEMA({
    warrentyItem:Boolean,
warrentyType:String,
warrentyPeriod:Number,

})
const
const PRODUCT_SCHEMA=new SCHEMA({
    name:{
        type:String,
        require:true,
    },
    type:String,
    description:String,
    colour:String,
    size:String,
    weight:String,
    price:{
        type:String,
        required:true
    },
    tags:[String],
    manuDate:Date,
    brand:String,
    manuLocation:String,
    images:[String],
    vendor:{
        type:SCHEMA.Types.ObjectId,
        ref:'user'
    },
    discount:DISCOUNT_SCHEMA,
//TODO review schema
    warrenty:WARRENTY_SCHEMA

},{
    timestamps:true
})
module.exports=MONGOOSE.model("product",PRODUCT_SCHEMA)