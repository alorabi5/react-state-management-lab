// src/App.jsx

import ZombieFighters from '../components/zombieFighters';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

      console.log(team);

  const handleAddFighter = (newTeamFighter) => {
    console.log(newTeamFighter.price)
    if (money >= newTeamFighter.price) {
      setMoney(money - newTeamFighter.price)
      setTeam([...team, newTeamFighter]);
      setTotalStrength(totalStrength + newTeamFighter.strength);
      setTotalAgility(totalAgility + newTeamFighter.agility);
    } else {
      console.log("Not enough money");
    }
  };

const handleRemoveFighter = (teamFighter) => {

  setMoney(money + teamFighter.price);
  setTeam(team.filter((member) => member !== teamFighter));
  setTotalStrength(totalStrength - teamFighter.strength);
  setTotalAgility(totalAgility - teamFighter.agility);
  
};

  

  const zombieFighterList = zombieFighters.map((zombieFighter, idx) => (
    <li>
      <ZombieFighters
        key={idx}
        zombieFighter={zombieFighter}
        handleAddFighter={() => handleAddFighter(zombieFighter)}
      />
    </li>
  ));

const ourTeam = team.map((member) => (
  <li>
    <img src={member.img} alt="" />
    <h3>Name: {member.name}</h3>
    <p>Price: {member.price}</p>
    <p>Strength: {member.strength}</p>
    <p>Agility: {member.agility}</p>
    <button onClick={() => handleRemoveFighter(member)}>
      Remove
    </button>
  </li>
));


  return (
    <>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <ul>{zombieFighterList}</ul>

      <h1>Team Member</h1>

      {team.length !== 0 ? <ul>{ourTeam}</ul> : "Pick some team members!"}
    </>
  );
};

export default App;
