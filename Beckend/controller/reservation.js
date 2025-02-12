import ErrorHandler from "../error/error.js";
import { Revervation } from "../models/reservationSchema.js";

export const sendReservation= async (req,res,next)=>{
    const {firstName , lastName, email,phone,date,time} = req.body;

    if(!firstName || !lastName || !email || !phone || !date ||!time){
        return next(new ErrorHandler("Please fill all the data",400));
    }
    try{
        await Revervation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date
        });
        
        res.status(200).json({
            success: true,
            message: "Reservation send successfully",
        })
    }catch(err){
        if(err.name === "ValidationError"){
            const validationErrors = Object.values(err.errors).map(
                (err)=> err.message
            );

            return next(new ErrorHandler(validationErrors.join(","), 400));

        }
        return next(err);
    }
}