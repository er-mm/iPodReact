import './App.css';
import Screen from './Screen';
import Buttons from './Buttons';
import { useState } from 'react';

// this is the main container for ipod
const IPODWrapper = () => {
    // setting and showing the main menu (includes list of menu items)
    const [showMenu, setShowMenu] = useState(false);

    // setting and showing the particular menu item screen
    const [showMenuItem, setShowMenuItem] = useState(false);
  return (
    <div className="iPodBody">
      <Screen 
        showMenu={showMenu}
        showMenuItem={showMenuItem}
        setShowMenuItem={setShowMenuItem}
        setShowMenu={setShowMenu}
      />
      <Buttons 
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setShowMenuItem={setShowMenuItem}
      />
    </div>
  );
}

export default IPODWrapper;
