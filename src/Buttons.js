import './App.css';

const Buttons = ({
    showMenu,
    setShowMenu,
    setShowMenuItem
}) => {
    const handleMenuClick = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setShowMenuItem(false)
    }
  return (
    <div className="buttons" id="button">
      <div className="menu" onClick={handleMenuClick}>
          Menu
      </div>
      <div className="btn1">
          1
      </div>
      <div className="btn2">
          2
      </div>
      <div className="btn3">
          3
      </div>
      
    </div>
  );
}

export default Buttons;
