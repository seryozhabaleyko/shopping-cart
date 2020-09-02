import { useSelector, shallowEqual } from 'react-redux';

export function useShallowEqualSelector(selector) {
    return useSelector(selector, shallowEqual);
}

export default useShallowEqualSelector;
