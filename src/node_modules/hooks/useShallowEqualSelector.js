import { useSelector, shallowEqual } from 'react-redux';

const useShallowEqualSelector = (selector) => useSelector(selector, shallowEqual);

export default useShallowEqualSelector;