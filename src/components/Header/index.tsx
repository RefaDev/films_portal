import { NavLink } from 'react-router-dom'
import logo from 'assets/images/Logo.png'
import './styles.css'
const Header = () => {
   return (
      <header className='header'>
         <div className='container'>
            <div className='header-content'>
               <div className='header-logo'>
                  <NavLink to='/main'>
                     <img src={logo} alt='logo' />
                  </NavLink>
               </div>
               <nav className='header-nav'>
                  <ul>
                     <li>
                        <NavLink to='/main' activeClassName='linkActive'>
                           Главная
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to='/categories' activeClassName='linkActive'>
                           Фильмы по категориям
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to='/about' activeClassName='linkActive'>
                           О нас
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to='/search' activeClassName='linkActive'>
                           Поиск
                        </NavLink>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header
