import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  onCardClick,
  onCardLike,
  onAddButtonClick,
  currentUser,
  onEditProfile,
  onSignOut,
}) {
  return (
    <section className="profile">
      <SideBar
        currentUser={currentUser}
        onEditProfile={onEditProfile}
        onSignOut={onSignOut}
      />
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        onAddButtonClick={onAddButtonClick}
        currentUser={currentUser}
      />
    </section>
  );
}

export default Profile;
