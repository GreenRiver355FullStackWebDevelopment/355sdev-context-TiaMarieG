import Restaurant from "./Restaurant";

// Importing a specific piece of information from the Context
import { useRestaurants } from "../context/RestaurantContext";

function RestaurantsContainer() {

  //Saving the import to a variable so that it can be accessed by the rest of the code
  const {restaurants} = useRestaurants();
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
