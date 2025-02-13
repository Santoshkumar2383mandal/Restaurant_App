import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
const Success = () => {

  const[ countDown , setCountDown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(intervalId);
          navigate("/");
        }
        return prevCount - 1;
      });
    }, 1000); // Run every 1 second

    return () => clearInterval(intervalId); // Cleanup function
  }, [navigate]);
  
  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Rediecting to Home page in {countDown} sec...</h1>
          <Link to ={"/"} >
            Back to Home <HiOutlineArrowNarrowRight/>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Success
