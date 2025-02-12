import React from 'react'
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <section className='menu' id =" menu">
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>Popular Dishes</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus corrupti similique quam, qui, possimus, ex porro ipsam eos perferendis cupiditate beatae facilis officia? Non sequi aperiam provident explicabo dolore!
                Est vero ipsam obcaecati facilis quia! Cumque a libero, ullam corporis error fugiat fuga? At doloribus est quod? In accusantium recusandae perferendis repellat animi minus ea ratione, libero fugit officia!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element=>{
                        return (
                            <div className="card" key ={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu
