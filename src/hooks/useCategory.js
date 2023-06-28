import { useState } from "react";

import { getCategoriesApi } from "../api/category";

export function useCategory() {
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    try {
      setLoadingCategory(true);
      const response = await getCategoriesApi();
      setLoadingCategory(false);
      setCategories(response);
    } catch (error) {
      setLoadingCategory(false);
      setError(error);
    }
  };

  return {
    error,
    loadingCategory,
    categories,
    getCategories,
  };
}
