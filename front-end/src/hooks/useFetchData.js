import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, localStorageKey) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(localStorageKey));
        if (storedData) {
            setData(storedData);
        }else{
            setLoading(true);
            axios.get(url)
                .then(response => response.data)
                .then( (data) => {
                    setData(data);
                    localStorage.setItem(localStorageKey, JSON.stringify(data));
                })
                .catch(setError)
                .finally(() => setLoading(false));
        }
    }, [url]);

    return [ data, error, loading ];
};

export { useFetch };