import React from 'react';
import { useRouter } from 'next/router';

const Toolbar = ({ onLogout }) => {
  const router = useRouter();

  const handleGoToProfile = () => {
    router.push('/profile');
  };

  const handleLogout = () => {
    onLogout();
    router.push('/login');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-800">
      <h1 className="text-white text-xl font-bold cursor-pointer" onClick={() => router.push('/')}>
        TokoLaku
      </h1>
      <div>
        <button className="bg-white text-blue-500 font-semibold px-4 py-2 mr-4 rounded-lg" onClick={handleGoToProfile}>
          Profile
        </button>
        <button onClick={handleLogout} className="bg-red-500 text-white font-semibold px-4 py-2 hover:bg-red-600 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Toolbar;