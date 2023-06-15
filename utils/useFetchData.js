import React, { useState, useEffect, } from "react";
import axios from 'axios';

const useFetchData = ({endpoint}) => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     const options = {
//         method: 'GET',
//         url: `http://192.168.100.115:${endpoint}`,
//         // headers: {
//         //     Accept: 'application/json',
//         // },
//         // params: { id: params?.id },
//     }

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get(options);
//             const eventsArray = await response.data;
//             setData(eventsArray);
//             setIsLoading(false);
//             console.log("first try: ", response)
//         } catch (error) {
//             setError(error);
//             setIsLoading(false);
//         } finally {
//             setIsLoading(false);
//             console.log()
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     },[]);

//     const refetch = () => {
//         setIsLoading(true);
//         fetchData();
//     }

//     return { data, error, isLoading, refetch };
}

export default useFetchData;
