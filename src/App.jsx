import Main from "./components/Main";

import { useEffect, useState } from "react";
import "./App.css";

// Importing context to app.jsx to store needed information in
import { RestaurantContext } from "./context/RestaurantContext";

function App() {
  const [restaurantState, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await fetch("http://localhost:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    }

    fetchRestaurants();
  }, []);

  const updateRestaurants = (restaurant) => {
    setRestaurants([...restaurantState, restaurant]);
  };

  return (
    // Adding the information that is to be stored in the context
    <RestaurantContext.Provider
      value={{
        restaurants: restaurantState,
        updateRestaurants: updateRestaurants
      }}>
      <div className="App">
        <Main />
      </div>
    </RestaurantContext.Provider>

  );
}
export default App;
