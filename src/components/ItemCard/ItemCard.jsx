import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = (e) => {
    e.stopPropagation();

    const isLiked = item.likes?.some((id) => id === currentUser?._id);

    onCardLike({
      id: item._id,
      isLiked,
    });
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <h2 className="card__title">{item.name}</h2>

      {currentUser && (
        <button
          className={`card__like-button ${
            item.likes?.some((id) => id === currentUser._id)
              ? "card__like-button_active"
              : ""
          }`}
          type="button"
          onClick={handleLike}
          aria-label="Like"
        >
          ♡
        </button>
      )}

      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </li>
  );
}

export default ItemCard;
