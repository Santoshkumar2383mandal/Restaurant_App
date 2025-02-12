import mongoose  from "mongoose";
import validator from "validator";

const reservationSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength:[3,"Fist name must contain atleast 3 character!"],
        maxLength:[30,"First name can't exceed 30 character"],
    },
    lastName:{
        type:String,
        required: true,
        minLength:[3,"Last name must contain atleast 3 character!"],
        maxLength:[30,"Last name can't exceed 30 character"],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,  // Corrected function usage
            message: "Provide a valid email"
        }
    },
    phone:{
        type: String,
        required:true,
        minLength:[10,"phone number must contain atleast 10 character!"],
        maxLength:[10,"phone number can't exceed 10 character"],
    },
    time:{
        type: String,
        required:true,
    },
    date:{
        type: String,
        required:true,
    }
})

export const Revervation = mongoose.model("Reservation", reservationSchema);