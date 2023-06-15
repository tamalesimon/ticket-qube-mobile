import React, { useState, useEffect } from "react";
import axios from "axios";

const useGetToken = () => {
//     const [token, setToken] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const options = {
//         method: "GET",
//         url: "/api/token",
//         headers: {
//             Accept: "application/json",
//             username: "",
//             password: ""
//         }
//     }

//     const fetchToken = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.request(options);
//             setToken(response.data.token);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         fetchToken();
//     }, [])

//     return {token};
// }

export default useGetToken;