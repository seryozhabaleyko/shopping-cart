import { useState, useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'query-string';

const isUndefinedOrNull = (v) => v === undefined || v === null;

const isSame = (var1, var2) =>
    var1 === var2 || (!isUndefinedOrNull(var1) && !isUndefinedOrNull(var2) && var1.toString() === var2.toString());

const removeKeyByValue = (obj, value) =>
    Object.entries(obj).reduce((acc, [k, v]) => (v !== value && (acc[k] = v), acc), {});

function useQueryState(key, defaultValue = '') {
    const [currentQueryValue, setCurrentQueryValue] = useState(defaultValue);
    const history = useHistory();
    const { pathname, search, hash } = useLocation();
    const query = new URLSearchParams(search);
    const value = query.get(key);

    useEffect(() => {
        setCurrentQueryValue(value || defaultValue);
    }, [defaultValue, value]);

    const setNewQueryValue = useCallback(
        (newValue) => {
            const parsedQuery = parse(search);
            const queryValue = parsedQuery[key];

            if (!isSame(queryValue, newValue)) {
                let newSearch = { ...parsedQuery, [key]: newValue };

                if (queryValue && newValue === defaultValue) {
                    newSearch = removeKeyByValue(parsedQuery, queryValue);
                }

                const newQueryString = `?${stringify(newSearch)}`;

                const newUrl = `${pathname}${newQueryString}${hash}`;

                history.push(newUrl);
            }
        },
        [defaultValue, hash, history, key, pathname, search],
    );

    return [currentQueryValue, setNewQueryValue];
}

export default useQueryState;
