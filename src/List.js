import './App.css';

const MENU_ITEMS = ['Songs', 'Albums', 'Artists', 'PlayLists']
const List = ({
    setShowMenuItem,
    showMenuName,
    setShowMenu
}) => {
    const handleListClick = (e) => {
        e.preventDefault()
        const { id } = e.target;
        setShowMenu(false)
        setShowMenuItem(true)
        showMenuName(id)
    }
  return (
    <div className="list">
        <div>Menu Items</div>
      <ul onClick={handleListClick}>
          {
              MENU_ITEMS.map(item => <li id={item}>{item}</li>)
          }
      </ul>
    </div>
  );
}

export default List;
