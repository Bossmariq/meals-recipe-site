import { useGlobalContext } from "../Context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();

  const addFavoritesFunctunality = (id) => {
    addToFavorites(id);
  };

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No Meal Found</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const {
          idMeal: id,
          strMealThumb: mealImg,
          strMeal: mealName,
        } = singleMeal;
        return (
          <article key={id} className="single-meal">
            <img
              onClick={() => selectMeal(id)}
              src={mealImg}
              alt={mealName}
              className="img"
            />
            <footer>
              <h5>{mealName}</h5>
              <button
                onClick={() => addFavoritesFunctunality(id)}
                className="like-btn"
              >
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
