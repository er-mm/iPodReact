import './App.css';
import List from './List'
import MenuItem from './MenuItem'
import { useState } from 'react';

// this is outer screen component 
const Screen = ({
    showMenu,
    showMenuItem,
    setShowMenuItem,
    setShowMenu
}) => {
    // setting the menu name which is shown on menu item screen
    const [menuName, showMenuName] = useState('');
  return (
    <div className="screen">
      {
          showMenu && <List 
          setShowMenuItem={setShowMenuItem}
          showMenuName={showMenuName}
          setShowMenu={setShowMenu}
          />
      }
      {
          showMenuItem && <MenuItem 
          menuName={menuName}
          setShowMenuItem={setShowMenuItem}
          setShowMenu={setShowMenu}
          />
      }
    </div>
  );
}

export default Screen;
