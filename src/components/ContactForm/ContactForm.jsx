import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = { name, number };

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };

  return (
    <div className={css.div}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input1}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input2}
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;