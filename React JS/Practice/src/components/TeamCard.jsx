// TeamCard.jsx
import React from 'react';

const TeamCard = ({ name, role, email }) => {
  return (
    <div className="w-full sm:w-1/2 bg-zinc-700 text-amber-50 font-medium rounded-lg shadow-lg p-4 flex flex-col gap-2">
      <h2 className="text-xl">👤 {name}</h2>
      <h3 className="text-lg">💼 {role}</h3>
      <p className="text-sm text-zinc-300">📧 {email}</p>
    </div>
  );
};

export default TeamCard;
