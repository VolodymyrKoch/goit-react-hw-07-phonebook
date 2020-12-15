import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm.js';
import Filter from './components/Filter/Filter.js';
import ContactList from './components/ContactList/ContactList.js';
import classes from './App.module.css';
import './bases.css';
import { connect } from 'react-redux';
import contactsOperations from './redux/reducers/contacts/contactsOperations.js';

class App extends Component {
  componentDidMount() {
    this.props.onGetContact();
  }

  render() {
    return (
      <>
        <div className={classes.conteiner}>
          <ContactForm />

          <Filter />

          <ContactList />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetContact: contactsOperations.getContacts,
};

export default connect(null, mapDispatchToProps)(App);
