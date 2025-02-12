import React from 'react'
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
const About = () => {
  return (
    <section className='about' id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nesciunt adipisci omnis rem sapiente, possimus quae animi, perspiciatis provident tenetur numquam aliquam ab similique reprehenderit. Repellat totam doloribus minus quos!
                    Sint impedit, ipsam earum repellat hic unde, magnam cumque ratione dolores qui vitae architecto pariatur quo eum odit repudiandae nam! Eum sapiente dignissimos quia aut ut modi labore illo maxime?
                </p>
                <Link to={"/"}>
                Explore Menu{""}
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About
