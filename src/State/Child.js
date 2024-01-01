import React from 'react'
import './Card.css'
const Child = (props) => {

    return (
        <div className="row">
            {
                props.pro.map((e, i) => {
                    return e.item === "true" ? (
                        <div key={i} className="col">
                            <div className="card">
                            <img src={e.img} alt="" />
                            <h2>Name: {e.name}</h2>
                            <h5>Price: Rs.{e.price}</h5>
                            <p>Color: {e.color}</p>
                            <br></br>
                            <button onClick={() => props.d(e.id)} className="btn">Delete</button>
                        </div>
                        </div>

                    ):e

                       

                })
            }

        </div >
    )
}
export default Child;