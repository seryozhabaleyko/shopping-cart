import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const useActions = (actions) => {
    const dispatch = useDispatch();

    return useMemo(() => {
        if (Array.isArray(actions)) {
            return actions.map((a) => bindActionCreators(a, dispatch));
        }

        return bindActionCreators(actions, dispatch);
    }, [actions, dispatch]);
};

export default useActions;