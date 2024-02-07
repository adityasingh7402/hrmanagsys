import bcrypt from 'bcryptjs';
import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method == "POST") {
        let user = await User.findOne({ "email": req.body.email });
        if (user === null) {
            res.status(200).json({ success: false, error: "No user found" });
        }
        else {
            if (user) {
                if (req.body.email == user.email && req.body.password == user.password) {
                    var token = jwt.sign({ email: user.email, name: user.name }, process.env.JWD_SECRET, {
                        // expiresIn: "1d"
                    });
                    res.status(200).json({ success: true, token, email: user.email, name: user.name });

                }
                else {
                    res.status(200).json({ success: false, error: "Invalid Credetials" });
                }
            }
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" });
    }
};
export default connectDb(handler);
