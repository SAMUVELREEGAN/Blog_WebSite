import React from 'react'
import {Outlet} from 'react-router-dom'
import Headers from '../Components/Headers'
import Footer from '../Components/Footer'

const MyLayout = ({toggleTheme , theme} ) => {
  return (
    <div>
        <Headers toggleTheme={toggleTheme} theme={theme}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default MyLayout