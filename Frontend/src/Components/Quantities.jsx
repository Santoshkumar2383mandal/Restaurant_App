import React from 'react'
import { data } from "../restApi.json"
const Quantities = () => {
  return (
    <section className='qualities' id="qualities"> 
    <div className="container">
        {
            data[0].ourQualities.map((element)=>(
                <div className="card" key={element.id}>
                    <img src={element.image} alt={element.title} />
                    <p className='title'>{element.description}</p>
                </div>
            ))
        }
    </div>
    </section>
  )
}

export default Quantities
