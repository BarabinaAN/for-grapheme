import React, { Component } from 'react'
import {
  validateEmail,
  validateIndex,
  validateUserName,
  validateTown,
  validateAdress,
  validateNameOnCard,
  validateCardNumber,
  validateCardCVV,
  validateСardPeriod
} from '../../utils';

const initValues = {
  userName: '',
  town: '',
  adress: '',
  index: '',
  // options: [],
  nameOnCard: '',
  сardNumber: '',
  cardPeriod: '',
  cardCVV: '',
};

const validateFields = {
  userName: '',
  town: '',
  adress: '',
  index: '',
  // options: [],
  nameOnCard: '',
  сardNumber: '',
  cardPeriod: '',
  cardCVV: '',
}

const withValidateForm = (View) => {
  return class extends Component {
    state = {
      isFetching: false,
      data: initValues,
      errors: validateFields,
      next: false,
      isValidate: false
    };


    handleInput = e => {
      const { name, value } = e.currentTarget;
      this.setState(({ data, errors }) => ({
        data: {
          ...data,
          [name]: value
        },
        errors: {
          ...errors,
          [name]: false
        }
      }));
    };


    handleNextStep = () => {
      const { userName, town, adress, index } = this.state.data;
      if (userName && town && adress && index) {
        this.setState(({ next }) => ({
          next: true
        }));
      }
    }

    handleSubmit = e => {
      e.preventDefault();
      const { data, errors } = this.state;
      const isValidate = Object.keys(errors).reduce(
        (sum, item) => sum && this.validateForm(item, data[item]),
        true
      );
      if (isValidate) {
        this.setState({
          isValidate: true
        });
        console.log('все поля заполнены верно, данные отправлены', data);
      } else {
        console.error('не верное значение одного или нескольких полей', errors);
      }
    };

    handleBlur = e => {
      const { value, name } = e.currentTarget;
      this.validateForm(name, value);
    };

    validateForm = (name, value) => {
      const isEmpty = this.isNotEmptyValue(name, value);
      switch (true) {
        case name === 'email' && isEmpty:
          return this.checkError
            (validateEmail)
            (name, value, 'должен содержать @')
        case name === 'index' && isEmpty:
          return this.checkError
            (validateIndex)
            (name, value, 'должен содержать 6 цифр')
        case name === 'userName' && isEmpty:
          return this.checkError
            (validateUserName)
            (name, value, 'Не должен содержать цифр, ')
        case name === 'town' && isEmpty:
          return this.checkError
            (validateTown)
            (name, value, 'Не верно заполнено')
        case name === 'adress' && isEmpty:
          return this.checkError
            (validateAdress)
            (name, value, 'Не верно заполнено')
        case name === 'nameOnCard' && isEmpty:
          return this.checkError
            (validateNameOnCard)
            (name, value, 'Поле может содержать только латинские буквы')
        case name === 'сardNumber' && isEmpty:
          return this.checkError
            (validateCardNumber)
            (name, value, 'Должно содержать 16 цифр')
        case name === 'cardCVV' && isEmpty:
          return this.checkError
            (validateCardCVV)
            (name, value, 'Должно содержать 3 цифры')
        case name === 'cardPeriod' && isEmpty:
          return this.checkError
            (validateСardPeriod)
            (name, value, 'Должно содержать 4 цифры')
        default:
          return isEmpty;
      }
    };

    checkError = (validate) => (name, value, message = '') => {
      if (!validate(value)) {
        this.setState(({ errors }) => ({
          errors: {
            ...errors,
            [name]: message
          }
        }));
        return false;
      }
      return true;
    }

    isNotEmptyValue = (name, value) => {
      if (!value.trim()) {
        this.setState(({ errors }) => ({
          errors: {
            ...errors,
            [name]: 'поле не заполнено'
          }
        }));
        return false;
      }
      return true;
    };

    render() {
      return (
        <View
          {...this.state}
          {...this.props}
          handleSubmit={this.handleSubmit}
          handleBlur={this.handleBlur}
          handleInput={this.handleInput}
          handleNextStep={this.handleNextStep}
        />
      );
    }
  }
}

export default withValidateForm