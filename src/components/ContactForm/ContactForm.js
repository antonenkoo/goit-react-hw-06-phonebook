import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // const name = form.elements.name.value;
    const number = form.elements.number.value;

    // console.log(name, number);
    dispatch(addContact(number));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div>
        <input
          autoComplete="off"
          className={css.field}
          type="text"
          name="name"
        />
        <input
          autoComplete="off"
          className={css.field}
          type="text"
          name="number"
        />
      </div>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
