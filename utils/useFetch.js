import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';

const useFetch = (endpoint, params) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const options = {
        method: 'GET',
        url: `http://localhost:${endpoint}`,
        params: { id: params?.id },
    }

    const fetchData = useCallback(async () => {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        const data = await response.data;
          setData(data);
          setIsLoading(false)
      } catch (error) {
          setError(error);
          setIsLoading(false)
      } finally {
        setIsLoading(false);
      }
    }, [options]);

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
