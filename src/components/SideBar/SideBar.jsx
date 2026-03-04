import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={avatar} alt="Terrence Tegegne" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </aside>
  );
}

export default SideBar;
