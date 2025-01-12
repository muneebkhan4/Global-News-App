import { useState } from "react";
import axios from "axios";

const API_KEY = "fa1f4f7052984aa5a7dd3cefbfd3b715"; // Replace with your key if needed
const BASE_URL = "https://newsapi.org/v2/everything";

// Define the type for an article
interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const useApi = () => {
  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: query,
          sortBy: "popularity",
          apiKey: API_KEY,
        },
      });

      // Filter out removed articles
      const validArticles = response.data.articles.filter(
        (article: Article) =>
          article.title !== "[Removed]" &&
          article.description !== "[Removed]" &&
          article.url !== "[Removed]" &&
          article.title &&
          article.description &&
          article.url
      );

      setData(validArticles);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useApi;
