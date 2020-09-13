import React from "react";
import Input from '../input'
import Select from '../select'
import { withValidateForm } from '../hoc'
import "./checkout-form.scss";
import verified from './verified.png'

const СheckoutForm = (props) => {
  const { handleSubmit, handleNextStep, next, isValidate } = props;
  const formGroup = !next ? <FormGroupDelivery {...props} /> : <FormGroupPay {...props} />
  const formBtn = !next ? <a className='btn btn-primary' onClick={handleNextStep}>Продолжить</a>
    : <button type="submit" className='btn btn-primary'>Оплатить</button>

  if (isValidate) {
    return (
      <div className="checkout-form is--verified">
        <img src={verified} className='mb-1'/>
        Спасибо!
      </div>
    )
  }
  return (
    <form action="" onSubmit={handleSubmit} className="checkout-form">
      <СheckoutFormNav next={next} />
      {formGroup}
      {formBtn}
    </form>
  );
};

const СheckoutFormNav = ({ next }) => {
  return (
    <nav>
      <ol className="steps">
        <li className={!next ? "steps-item is-active" : "steps-item"}>Доставка</li>
        <li className={next ? "steps-item is-active" : "steps-item"}>Оплата</li>
      </ol>
    </nav>
  )
}

const FormGroupDelivery = (props) => {
  const options = [
    { value: 'default', text: 'Страна' },
    { value: 'ru', text: 'Россия' },
  ]
  const { data, errors, handleInput, handleBlur } = props;
  return (
    <fieldset className='form-group'>
      <legend>Информация для доставки</legend>
      <Input
        className='mb-2'
        label="Получатель"
        name="userName"
        placeholder='ФИО'
        value={data.userName}
        onChange={handleInput}
        onBlur={handleBlur}
        error={errors.userName}
        required
      />
      <div className='mb-2'>
        <label> Адрес </label>
        <Input
          name="town"
          placeholder='Город'
          value={data.town}
          onChange={handleInput}
          onBlur={handleBlur}
          error={errors.town}
          required
        />
        <Input
          name="adress"
          placeholder='Адрес'
          value={data.adress}
          onChange={handleInput}
          onBlur={handleBlur}
          error={errors.adress}
          required
        />
        <div className='row'>
          <div className='col-6'>
            {/* <Select
              options={options}
              value={data.options}
              onChange={handleInput}
              onBlur={handleBlur}
              error={errors.options}
              required
            /> */}
          </div>
          <div className='col-4'>
            <Input
              placeholder='Индекс'
              name="index"
              value={data.index}
              onChange={handleInput}
              onBlur={handleBlur}
              error={errors.index}
              required
            />
          </div>
        </div>
      </div>


    </fieldset>
  )
}
const FormGroupPay = (props) => {
  const { data, errors, handleInput, handleBlur } = props;
  return (
    <fieldset className='form-group'>
      <legend>Оплата</legend>
      <Input
        className='mb-2'
        label="Имя на карте"
        name="nameOnCard"
        placeholder='Konstantin Ivanov'
        value={data.nameOnCard}
        onChange={handleInput}
        onBlur={handleBlur}
        error={errors.nameOnCard}
        autoFocus
        required
      />
      <Input
        className='mb-2'
        label="Номер карты"
        name="сardNumber"
        placeholder='XXXX XXXX XXXX XXXX XXXX'
        value={data.сardNumber}
        onChange={handleInput}
        onBlur={handleBlur}
        error={errors.сardNumber}
        required
      />
      <div className='row mb-2'>
        <div className='col-4'>
          <Input
            label="Срок"
            name="cardPeriod"
            placeholder='MM / YY'
            value={data.cardPeriod}
            onChange={handleInput}
            onBlur={handleBlur}
            error={errors.cardPeriod}
            required
          />
        </div>
        <div className='col-4'>
          <Input
            label="CVV"
            name="cardCVV"
            value={data.cardCVV}
            onChange={handleInput}
            onBlur={handleBlur}
            error={errors.cardCVV}
            required
          />
        </div>
      </div>
    </fieldset>
  )
}
export default withValidateForm(СheckoutForm);
