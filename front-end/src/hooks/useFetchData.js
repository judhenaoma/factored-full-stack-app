import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(response => response.data)
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return [ data, error, loading ];
};

export { useFetch };