import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");  
  const [errorMessage, setErrorMessage] = useState(""); // ✅ New state for errors

  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // ✅ Reset error message before request

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);

      // Reset form
      setFirstName("");
      setLastName("");
      setPhone("");  
      setEmail("");
      setTime("");
      setDate("");

      navigate("/success");
    } catch (error) {
      console.error("Request Error:", error.response?.data || error.message);  

      // ✅ Show error message in UI instead of just using toast
      if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>Make a Reservation</h1>
            <p>For Further Questions, Please Call</p>  

            {errorMessage && ( // ✅ Show error message in UI
              <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
            )}

            <form>
              <div>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div>
                <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
              <div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <button type="submit" onClick={handleReservation}>
                Reserve Now{" "}
                <span><HiOutlineArrowNarrowRight /></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
