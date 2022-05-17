const isValidIMEI = require("../functions/is_valid_imei");

const validOrNot = async (req,res)=>{
    console.log(`in controllers`)
    const imei_number=req.body.imei_number;
    console.log(req)
    try {
        const isValid =  await isValidIMEI(imei_number);
        console.log(isValid)
        if(isValid){
            res.json({'message':'Valid IMEI Number'})
        }
        else{
            res.json({'message':'Invalid IMEI Number'})
        }
    } catch (error) {
        res.json({'message':`notf`})
    }
}
module.exports = validOrNot