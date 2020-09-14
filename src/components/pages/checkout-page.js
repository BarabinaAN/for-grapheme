import React from 'react';
import { withValidateForm } from '../hoc'
import СheckoutForm from "../checkout-form";
import verified from './verified.png'

const СheckoutPage = (props) => {
   const renderCheckoutValidate = () => {
      return (
         <div className="checkout is--verified">
           <img src={verified} className='mb-1' alt='verified'/>
           Спасибо!
         </div>
       )
   }

   const { isValidate } = props;
   const content = isValidate ? renderCheckoutValidate() : <СheckoutForm {...props}/>

   return (
      <div className='page-content container'>
         {content}
      </div>
   )
}

export default withValidateForm(СheckoutPage)