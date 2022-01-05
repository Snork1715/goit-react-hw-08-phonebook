import { filterContacts } from "../../redux/phonebook/phonebook-actions";
import { connect } from "react-redux";
import "./Filter.css";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Поиск контактов:
      <input
        type="text"
        placeholder="Введите имя для поиска"
        name="filter"
        value={value}
        onChange={onChange}
        className="filter-input"
      />
    </label>
  );
};
const mapStatetoProps = (state) => ({
  value: state.counter.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Filter);
