import React from "react";
import Input from '../../input'
import Select from '../../select'

export const FormGroupDelivery = (props) => {
   const options = [
      { value: 'default', text: 'Страна' },
      { value: 'ru', text: 'Россия' },
   ]
   const { data, errors, handleInput, handleBlur, handleSelect } = props;
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
                  <Select
                     name="country"
                     options={options}
                     value={data.country}
                     onChange={handleSelect}
                     onBlur={handleSelect}
                     error={errors.country}
                     required
                  />
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