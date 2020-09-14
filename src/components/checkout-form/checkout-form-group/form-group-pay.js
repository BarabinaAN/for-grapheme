import React from "react";
import Input from '../../input'

export const FormGroupPay = (props) => {
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