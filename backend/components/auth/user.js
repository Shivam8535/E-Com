import User from "../../models/UserModel.js"




export const Register = async (req, res) => {
    const data = req.body;

    console.log(data);

    try {
        const existUser = await User.findOne({ email: data.email })
        if(existUser == []){
            throw new Error('user already existed !');
        }
        const newUser = await User(data)
        await newUser.save()
        newUser.save() ? res.json({ ok: true, message: "Success ! " }) : res.json({ ok: false, message: "failed !" });
    } catch (error) {
        console.log("error : ", error.message)
        return res.json({ ok: false, message: error.message });
    }
}