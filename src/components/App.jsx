import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'Redux/contacts/operations';
import Error from './Error/Error';
import { CreateContact } from './Form/CreateContact/CreateContact';
import { Filter } from './Form/Filter/Filter';
import { ContactList } from './List/List';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className="mt-3 ms-3">Phonebook</h1>
      <CreateContact />
      <h2 className="ms-3">Contacts</h2>
      <Filter />
      <Error />
      <Loader />
      <ContactList />
    </>
  );
};
