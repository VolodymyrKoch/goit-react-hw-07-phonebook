import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import '../../components/anime.css';
// import { v4 as uuidv4 } from 'uuid';
// import { addContact, erroMasage } from '../../redux/actions/action.js';
// import { erroMasage } from '../../redux/actions/action.js';

// import { erroMasage } from '../../redux/reducers/contacts/contactsActions.js';

import contactsOperations from '../../redux/reducers/contacts/contactsOperations.js';
// import classesEror from './components/ErrorMassage/ErrorMassage.module.css';
import classesEror from '../ErrorMassage/ErrorMassage.module.css';
// import ErrorMassage from './components/ErrorMassage/ErrorMassage.js';
import ErrorMassage from '../ErrorMassage/ErrorMassage.js';

const INITIAL_STATE = {
  name: '',
  number: '',
  erroMasage: false,
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      // id: uuidv4(),
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.props.addContact({ ...this.state });
    console.log(this.props.contacts);
    // console.log(
    //   this.props.contacts.find(item => item.name === this.state.name),
    // );
    if (this.props.contacts.find(item => item.name === this.state.name)) {
      this.setState({ erroMasage: true });
      // console.log('робатаю');
      setTimeout(() => {
        this.setState({ erroMasage: false });
      }, 1500);
    } else {
      const { name, number } = this.state;
      this.props.addContact({ name, number });
    }

    this.setState({ name: '', number: '' }); //1 варіант очищаю input після submit(відправки)
    // this.setState(INITIAL_STATE);  //2 варіант очищаю input після submit(відправки)
  };

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          classNames="logo"
          timeout={500}
          appear={true}
          unmountOnExit
        >
          <h2 className={classes.tilie}>Phonebook</h2>
        </CSSTransition>
        <div className={classes.contactFormConteiner}>
          <form
            action="submit"
            className={classes.contactForm}
            onSubmit={this.handleSubmit}
          >
            <div className={classes.lableName}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className={classes.lableName}>
              <label htmlFor="number">Number</label>
              <input
                type="text"
                name="number"
                placeholder="enter number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Add contacts</button>
          </form>
        </div>
        <CSSTransition
          in={this.state.erroMasage}
          // in={false}
          timeout={250}
          appear={true}
          // classNames="errorAnimation"
          classNames={{ ...classesEror }}
          unmountOnExit
        >
          <ErrorMassage />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  contacts: state.contacts.items,
});

// const mapDispatchToProps = dispatch => ({
//   addContact: contact => {
//     dispatch(addContact(contact));
//   },
// });
const mapDispatchToProps = {
  addContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
