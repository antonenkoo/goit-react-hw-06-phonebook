import { useSelector } from 'react-redux';
import { getFilter } from '../redux/selectors';

export const useFilter = () => {
  const filter = useSelector(getFilter);
  return filter;
};
