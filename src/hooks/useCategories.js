import { useState, useEffect } from "react";
import { getCategories } from "../server";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategories()
      .then((response) => {
        const data = Object.entries(response);
        setCategories(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { categories, isLoading };
};
