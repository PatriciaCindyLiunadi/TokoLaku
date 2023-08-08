import React from 'react';

const Toolbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500">
      <h1 className="text-white text-xl font-bold">TokoLaku</h1>
      <div>
        <button className="bg-white text-blue-500 font-semibold px-4 py-2 mr-4">Profile</button>
        <button className="bg-white text-red-500 font-semibold px-4 py-2">Logout</button>
      </div>
    </div>
  );
};

export default Toolbar;
