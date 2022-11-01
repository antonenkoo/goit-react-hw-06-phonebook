import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  return contacts;
};
