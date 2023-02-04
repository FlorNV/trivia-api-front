// "https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=5&difficulty=easy";

const URL_API_BASE = "https://the-trivia-api.com/api";

export const getCategories = async () => {
  try {
    const res = await fetch(`${URL_API_BASE}/categories`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Could not fetch categories");
  }
};

export const getQuestions = async (categories, limit, difficulty) => {
  try {
    const res = await fetch(
      `${URL_API_BASE}/questions?categories=${categories}&limit=${limit}&difficulty=${difficulty}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Could not fetch questions");
  }
};
