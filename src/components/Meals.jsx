import { useGlobalContext } from "../Context";
import { BsHandThumbsUp, BsFillHandThumbsUpFill } from "react-icons/bs";
import { useState } from "react";
import { setEmitFlags } from "typescript";

const Meals = () => {
	const {
		meals,
		loading,
		selectMeal,
		addToFavorites,
		favorites,
		liked,
		setLiked,
	} = useGlobalContext();

	const addFavoritesFunctunality = (id) => {
		addToFavorites(id);
	};

	const [likes, setLikes] = useState({});

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

				const meal = { id, mealImg, mealName, liked: false };
				const liked = likes[id];

				return (
					<article key={id} className="single-meal">
						<img
							onClick={() => {
								selectMeal(id);
							}}
							src={mealImg}
							alt={mealName}
							className="img"
						/>
						<footer>
							<h5>{mealName}</h5>
							<button className={likes[id] ? "like-btn2" : "like-btn"}>
								<BsHandThumbsUp
									onClick={() => {
										setLikes((prevLikes) => ({
											...prevLikes,
											[id]: !prevLikes[id] || !meal.liked,
										}));
										addFavoritesFunctunality(id);
										meal.liked = !meal.liked;
									}}
								/>
							</button>
						</footer>
					</article>
				);
			})}
		</section>
	);
};

export default Meals;
