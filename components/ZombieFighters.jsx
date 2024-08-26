import { useState } from "react";


const ZombieFighters = (props) => {

    

    return (
      <>
        <img src={props.zombieFighter.img} alt="" />
        <h3>Name: {props.zombieFighter.name}</h3>
        <p>Price: {props.zombieFighter.price}</p>
        <p>Strength: {props.zombieFighter.strength}</p>
        <p>Agility: {props.zombieFighter.agility}</p>
        <button onClick={() => props.handleAddFighter(props.zombieFighter)}>
          Add
        </button>

        
      </>
    );
}

export default ZombieFighters;