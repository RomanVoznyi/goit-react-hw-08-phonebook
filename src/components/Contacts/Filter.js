import { useSelector, useDispatch } from 'react-redux';
import { phoneActions, phoneSelectors } from 'redux/phonebook';

const Filter = () => {
  const value = useSelector(state => phoneSelectors.getFilter(state));
  const dispatch = useDispatch();

  return (
    <div className="subForm">
      <h2 className="subFormTitle">Find contacts:</h2>
      <label className="subFormLabel">
        <span className="subFormLabelTitle">find:</span>
        <input
          className="subFormInput"
          type="text"
          onChange={evt =>
            dispatch(phoneActions.changeFilter(evt.target.value))
          }
          value={value}
          name="filter"
          placeholder="input name"
        />
      </label>
    </div>
  );
};

export default Filter;
