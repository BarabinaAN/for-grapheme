import React from "react";
import './chekout-form-nav.scss'

export const СheckoutFormNav = ({ next }) => {
   return (
      <nav>
         <ol className="form-nav">
            <li className={!next ? "form-nav__item is--active" : "form-nav__item"}>Доставка</li>
            <li className={next ? "form-nav__item is--active" : "form-nav__item"}>Оплата</li>
         </ol>
      </nav>
   )
}