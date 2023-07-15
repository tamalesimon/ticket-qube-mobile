import React, {useState, useEffect} from "react";

const useFetch = (endpoint, params) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://192.168.100.115:${endpoint}`, options);
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
      fetchData();
    }, []);

    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };

    return { data, error, isLoading, refetch };
  };

export default useFetch;