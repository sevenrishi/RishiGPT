import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const Menu =() => (
  <>
  <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is RishiGPT?</a></p>
          <p><a href="#possibility">Sevenrishi AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
         <div className='gpt3__navbar-links_logo'>
          <h1>RishiGPT</h1>

         </div>
         <div className='gpt3__navbar-links_container'>
          <Menu />
         </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div> 
    </div>
  )
}

export default Navbar
