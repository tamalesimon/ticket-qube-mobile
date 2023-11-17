import React, { useState, useEffect } from "react";

const useFetch = (endpoint, params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const options = {
    method: 'GET',
    mode: "cors",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:${endpoint}`, options);
      const data = await response.json();
      setData(data);
      setIsLoading(false)
    } catch (error) {
      setError(error);
      setIsLoading(false)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
      console.log("it is being called");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, error, isLoading, refetch };
};

export default useFetch;