import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phoneOperations, phoneSelectors } from 'redux/phonebook';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const contacts = useSelector(state => phoneSelectors.getContacts(state));
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    if (checkContacts(contacts, contactName)) {
      toast.error(`${contactName} is already in contacts.`);
    } else {
      dispatch(
        phoneOperations.addContacts({
          name: contactName,
          number: contactNumber,
        }),
      );

      reset();
    }
  };

  const checkContacts = (arr, target) => {
    return arr.find(({ name }) => name.toLowerCase() === target.toLowerCase());
  };

  const changeInput = ({ target: { name, value } }) =>
    name === 'name' ? setContactName(value) : setContactNumber(value);

  const reset = () => {
    setContactName('');
    setContactNumber('');
  };

  return (
    <form className="subForm" onSubmit={handleSubmit}>
      <h2 className="subFormTitle">Add new contacts:</h2>
      <label className="subFormLabel">
        <span className="subFormLabelTitle">Name:</span>
        <input
          className="subFormInput"
          type="text"
          onChange={changeInput}
          value={contactName}
          name="name"
          placeholder="input name"
          required
        />
      </label>
      <label className="subFormLabel">
        <span className="subFormLabelTitle">Phone:</span>
        <input
          className="subFormInput"
          type="text"
          onChange={changeInput}
          value={contactNumber}
          name="number"
          placeholder="input phone number"
          required
        />
      </label>

      <button type="submit" className="addBtn">
        Add
      </button>
    </form>
  );
};

export default ContactForm;
