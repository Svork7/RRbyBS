//добавление ссылок через компонент Link
/*import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <Link to=".">Home</Link>
      <Link to="contacts">Contacts</Link>
      <Link to="about">About</Link>
    </nav>
  )
}

export default Menu*/

//Добавление ссылок через компонент NavLink

import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <NavLink
        //Добавление класса для стилизации через деструктуризацию
        className={({ isActive }) => (isActive ? 'activeLink' : 'inactiveLink')}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        //задание стиля непосредственно в компоненте
        style={({ isActive }) =>
          isActive ? { color: 'chocolate', textDecoration: 'none' } : {}
        }
        to="contacts"
      >
        Contacts
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="projects">Projects</NavLink>
    </nav>
  )
}

export default Menu
