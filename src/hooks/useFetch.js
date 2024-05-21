import { useState, useEffect } from "react";

// const options = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };
const options = { method: "GET", headers: { accept: "application/json" } };

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, JSON.stringify(options)]);

  return { data, error, loading };
};
