// App.jsx
import React, { useState } from 'react';
import TeamCard from './components/TeamCard';

function App() {
  const [team ,setTeam] = useState([
    { name: "Ayan Imran", role: "Frontend Developer", email: "ayan@team.com" },
    { name: "Sarah Khan", role: "UI/UX Designer", email: "sarah@team.com" },
    { name: "Zeeshan Ali", role: "Backend Developer", email: "zeeshan@team.com" },
  ]) 

  const deletBtn = () => {
    const newTeam = team.splice(1)
    setTeam(newTeam)
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-6 flex flex-col items-center gap-6">
      <h1 className="text-white text-3xl font-bold">🚀 Team Members</h1>

           <button
        onClick={deletBtn}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        🗑️ Delete One Card
      </button>

      <div className="flex flex-wrap gap-4 justify-center">
        {team.map((elem , index) => (

          <TeamCard 
          key={index}
          name={elem.name}
          role={elem.role}
          email={elem.email}
          />
        ))}
      </div>

   
    </div>
  );
}

export default App;
