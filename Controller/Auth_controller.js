const userauth = require("../Model/Auth_model");
// const bcrypt = require("bcrypt");
// const bodyparser = require("body-parser");
const axios = require('axios');


exports.customerUser = async (req, res) => {
    try {
        const name = req.body.name;
        const surname = req.body.name;
        const email = req.body.name;


        


        const checkEmail = await userauth.findOne({ email: email });


        if (checkEmail == null) {
            const data = new userauth({
                name: name,
                surname: surname,
                email: email   
            })
            const saveData = data.save();
            console.log(saveData);
            res.status(201).json({
                message: "data insert",
                status: 201,
                infoData: data
            })
        } else {
            res.status(409).json({
                message: "Mobile Number min-max 10 digit long, Please Try Again",
                status: 409
            })
        }
    }
    catch (error) {
        console.log("error::", error);
        res.status(500).json({
            message: "SOMETHING WENT WRONG",
            status: 500
        })
    }
}
// view customer
exports.allCustomer = async (req, res) => {
    try {
        const viewall = await userauth.find();

        res.status(200).json({
            message: "View all customer",
            status: 200,
            data: viewall
        });
    } catch (error) {
        console.log("error::", error);
        res.status(500).json({
            message: "Somethin went wrong",
            status: 500
        })
    }
}


exports.update_cusomer = async (req, res) => {
    const { id } = req.params
    try {
        const existing = await userauth.findById(id)
        if (!existing) {
            return res.status(404).send({ Message: 'customer Not Found' })
        }
        const data = await userauth.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).send({ Message: 'customer Updatd Successfully', data })
    } catch (error) {
        res.status(401).send({ Message: 'Something wait wrong!!!' })
    }
}



exports.delete_customer = async (req, res) => {
    const { id } = req.params
    try {
        const existing = await userauth.findById(id)
        if (!existing) {
            return res.status(404).send({ Message: 'userauth Not Found' })
        }
        let data = await userauth.findByIdAndDelete()
        data = {
            Message: 'Ok'
        }
        res.status(201).send({ Message: 'userauth deleted Successfully', data })
    } catch (error) {
        res.status(401).send({ Message: 'Something wait wrong!!!' })
    }
}







