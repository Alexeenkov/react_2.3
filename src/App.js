import './App.css';
import React from 'react';
import DropdownList from './components/DropdownList/DropdownList';

function App() {
  const items = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];

  return (
    <DropdownList items={items} />
  );
}

export default App;
