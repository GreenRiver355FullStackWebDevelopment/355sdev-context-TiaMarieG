import { createContext, useContext } from "react";

// Building our context and naming the variable after the information it will hold
export const RestaurantContext = createContext();

// Building the function that we will call when we want to access Context information
export const useRestaurants = () => useContext(RestaurantContext);