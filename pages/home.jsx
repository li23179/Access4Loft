import Navbar from '../components/navbar.jsx'
import styles from './home.module.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
      <div className={styles.navbar_container}>
            <ul className={styles.navbar_ul}>
                <li>
                    <Link to={'/'}>Supplies master list with management</Link>
                </li>
                <li>
                    <Link to={'/'}>Job supplies calculation</Link>
                </li>
                <li>
                    <Link to={'/'}>Functions for user</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default home
