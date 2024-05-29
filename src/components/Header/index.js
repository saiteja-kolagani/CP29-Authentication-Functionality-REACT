// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav>
      <ul className="nav-options">
        <Link to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/about">
          <li className="nav-item">About</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default Header
