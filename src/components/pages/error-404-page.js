import React from 'react';
import { Link } from 'react-router-dom';

const Error404Page = () => {
   return (
      <div className='page-content'>
         <h2>Упс, что-то пошло не так.</h2>
         <p>
            Попробуйте обновить страницу, или перейти 
         </p>
         <Link to='/'>на главную</Link>
      </div>
   )
}

export default Error404Page
