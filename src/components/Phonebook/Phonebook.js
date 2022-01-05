import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Form from "../Form";
import ContactsList from "../ContactsList";
import Filter from "../Filter";
import * as actionsOperations from "../../redux/phonebook/phonebook-operations";

import "./Phonebook.css";

const Phonebook = () => {
  const filter = useSelector((state) => state.counter.filter);
  const contacts = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(actionsOperations.fetchContactsOperation());
  }, [dispatch]);

  return (
    <div className="phonebook-warper">
      <div className="phonebook-form">
        <h1>Phonebook</h1>
        <Form />
      </div>
      <div className="phonebook-contacts">
        <h2>Contacts</h2>
        <Filter />
        <ContactsList contacts={filteredContacts} />
      </div>
    </div>
  );
};

export default Phonebook;
