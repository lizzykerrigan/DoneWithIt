import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const { data, ok } = await apiFunc(...args);
    setLoading(false);

    if (!ok) {
      return setError(true);
    }

    setError(false);
    setData(data);
  };

  return { request, data, error, loading };
};
