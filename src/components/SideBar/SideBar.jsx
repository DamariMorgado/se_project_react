import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar({ currentUser, onEditProfile, onSignOut }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        {currentUser?.avatar ? (
          <img
            className="sidebar__avatar"
            src={currentUser.avatar}
            alt={currentUser.name}
          />
        ) : (
          <div className="sidebar__avatar">{currentUser?.name?.charAt(0)}</div>
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>

      <div className="sidebar__buttons">
        <button
          className="sidebar__edit-button"
          type="button"
          onClick={onEditProfile}
        >
          Edit profile
        </button>

        <button
          className="sidebar__signout-button"
          type="button"
          onClick={onSignOut}
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
