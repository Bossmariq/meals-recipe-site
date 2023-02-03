import { useGlobalContext } from "../Context";

const Favorites = () => {
  const { favorites, removeFromFavorites, selectMeal } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image, strMeal } = item;

            return (
              <div key={idMeal} className="favorite-item">
                <img
                  alt={strMeal}
                  onClick={() => selectMeal(idMeal, true)}
                  src={image}
                  className="favorites-img img"
                />
                <p>{strMeal}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
