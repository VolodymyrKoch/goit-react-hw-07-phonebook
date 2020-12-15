import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import '../../components/anime.css';
import contactsOperations from '../../redux/reducers/contacts/contactsOperations.js';
import contactSelector from '../../redux/reducers/contacts/contactsSelectors.js';

const ContactList = function ({ array, deleteItem }) {
  console.log(array);
  return (
    <>
      <TransitionGroup component="ul" className="contactList">
        {array.map(item => (
          <CSSTransition key={item.id} timeout={250} classNames="item">
            <li key={item.id}>
              {item.name}: {item.number}
              <button type="button" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteItem: PropTypes.func.isRequired,
};

// ---------------------1-version-filtering-----

const mapDispatchToProps = {
  deleteItem: contactsOperations.removeContact,
};

const mapStateToProps = state => {
  console.log(state.contacts);
  return { array: contactSelector.getFilteredItems(state) };
};
// ----------------------2-version-filtering- з диструктуризацією------------
// const mapStateToProps = state => {
//     const { items, filter } = state.contacts;
//   const handleFilter = items.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
//   return {
//     array: handleFilter,
//   };
// };
// -----------------------3-version-filtering-без диструктуризації--------
// const mapStateToProps = state => {
//   return {
//     array: state.contacts.items.filter(contact =>
//       contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
//     ),
//   };
// };
// ---------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
