import React from 'react'
import { Link } from 'react-router-dom'

import './page-header.scss'
import logo from './grapheme-logo.svg'

const PageHeader = () => {
   return (
      <header className='page-header container'>
         <h1>Тестовое задание</h1>
         <Link to='/'>
            <img src={logo} alt='grapheme-logo'/>
         </Link>
      </header>
   )
}

export default PageHeader