import { useGlobalContext } from "../Context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    // idMeal: id,
    strArea: country,
    strInstructions: instructions,
    strMeal: mealName,
    strMealThumb: mealImg,
    strSource: moreInfo,
  } = selectedMeal;
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={mealImg} alt={mealName} className="img modal-img" />
        <div className="modal-content">
          <h4>{mealName}</h4>
          <p>Cooking Instructions</p>
          <p> {instructions}</p>
          <h5>{country} Meal</h5>
          <a href={moreInfo} target="_blank" rel="noreferrer">
            Original Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
