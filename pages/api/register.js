import connectDb from "../../middleware/mongoose"
import User from "../../models/User"


const handler = async (req, res)=>{
    if(req.method == 'POST'){
        const {name, age, empId, username, email, password} = req.body
        let u = new User({name, age, empId, username, email, password})
        await u.save()
        res.status(200).json({ success: "success" })
    }
    else{
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler);