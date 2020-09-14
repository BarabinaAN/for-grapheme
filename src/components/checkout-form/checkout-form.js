import React from "react";
import { СheckoutFormNav } from './chekout-form-nav'
import { FormGroupDelivery, FormGroupPay } from './checkout-form-group'

import "./checkout-form.scss";

const СheckoutForm = (props) => {
  const { handleSubmit, handleNextStep, next } = props;
  const formGroup = !next ? <FormGroupDelivery {...props} /> : <FormGroupPay {...props} />
  const formBtn = !next ? <a className='btn btn-primary' onClick={handleNextStep}>Продолжить</a>
    : <button type="submit" className='btn btn-primary'>Оплатить</button>

  return (
    <form action="" onSubmit={handleSubmit} className="checkout">
      <СheckoutFormNav next={next} />
      {formGroup}
      {formBtn}
    </form>
  );
};


export default СheckoutForm;
