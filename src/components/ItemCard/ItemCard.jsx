import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likeIcon from "../../assets/like.svg";
import likeActiveIcon from "../../assets/like-active.svg";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = Boolean(item.likes?.some((id) => id === currentUser?._id));

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = (e) => {
    e.stopPropagation();

    onCardLike({
      id: item._id,
      isLiked,
    });
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="card__header">
        <h2 className="card__title">{item.name}</h2>

        {currentUser && (
          <button
            className="card__like-button"
            type="button"
            onClick={handleLike}
            aria-label={isLiked ? "Unlike" : "Like"}
            aria-pressed={isLiked}
          >
            <img
              className="card__like-icon"
              src={isLiked ? likeActiveIcon : likeIcon}
              alt=""
            />
          </button>
        )}
      </div>

      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </li>
  );
}

export default ItemCard;
