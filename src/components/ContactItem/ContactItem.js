import * as actionsOperations from "../../redux/phonebook/phonebook-operations";
import { connect } from "react-redux";
import "./ContactItem.css";

const ContactItem = ({ name, id, number, onDelete }) => {
  return (
    <li className="contact-item">
      {name} {number}
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="contact-item_button"
      >
        Удалить
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (value) =>
    dispatch(actionsOperations.deleteContactsOperation(value)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
