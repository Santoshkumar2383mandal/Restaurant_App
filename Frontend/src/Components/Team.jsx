import React from 'react'
import {data} from "../restApi.json";
const Team = () => {
  return (
    <section   className='team' id="team">
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>Our team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, recusandae neque exercitationem excepturi sit minima fuga delectus mollitia repellat impedit in debitis deleniti voluptate aliquid perspiciatis quo omnis sed libero?
                Ipsum beatae repellendus asperiores, obcaecati, dicta placeat quis illum ratione sint culpa ad delectus facilis? Odio facilis et, maiores dolor molestiae odit consectetur labore sapiente commodi rem neque illo pariatur.</p>
            </div>
            <div className="team_container">
                {
                    data[0].team.map((element)=>{
                        return (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name}/>
                                <h1>{element.designation}</h1>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    </section>
  )
}

export default Team
