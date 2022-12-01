import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about">Contacts</Link>
    </nav>
  )
}

export default Menu
