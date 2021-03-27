import './App.css';

const MenuItem = ({
    menuName,
    setShowMenuItem,
    setShowMenu
}) => {
    const backButtonClick = (e) => {
        e.preventDefault();
        setShowMenuItem(false)
        setShowMenu(true)
    }
  return (
    <div className="menuItem">
        <div>{menuName}</div>
        <button onClick={backButtonClick}>back</button>
    </div>
  );
}

export default MenuItem;
