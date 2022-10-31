import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(contact.id));

  const handleToggle = () => dispatch(toggleCompleted(contact.id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        {contact.name} : {contact.number}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
