import User from "../../models/UserModel.js"




export const Register = async (req, res) => {
    const data = {
        googleID: 5896587458,
        name: "Shivam Yadav",
        email: "shivamyadav142312@gmail.com",
        password: 25417458
    }

    try {
        const newUser = await User(data)
        await newUser.save()
        newUser.save() ? res.json({ ok: true, message: "Success ! " }) : res.json({ok: false, message: "failed !"});
    } catch (error) {
        console.log("error : ", error.message)
        return res.json({ ok: false, message: `server error : ${error.message}` });
    }
}