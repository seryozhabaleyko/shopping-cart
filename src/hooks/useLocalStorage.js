import { useState, useEffect } from 'react';

function useLocalStorage(key, val) {
    const [value, setValue] = useState(val || window.localStorage.getItem(key));

    useEffect(() => {
        window.localStorage.setItem(key, value);
    }, [value]);

    return [value, setValue];
}

export default useLocalStorage;
