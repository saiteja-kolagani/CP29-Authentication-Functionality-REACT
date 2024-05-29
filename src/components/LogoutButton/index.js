// Write your JS code here
import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import './index.css'

const LogoutButton = props => {
  const {history} = props
  const onLogoutBtn = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="logout-btn">
      <button type="button" onClick={onLogoutBtn}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
