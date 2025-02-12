import express from "express";
import { sendReservation } from "../controller/reservation.js";

const reservationRouter = express.Router();
reservationRouter.post("/send", sendReservation);

// Export as named
export { reservationRouter };
