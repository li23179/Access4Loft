import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <div className={styles.navbar_container}>
                <ul className={styles.navbar_ul}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/supplies'}>Supplies master list with management</Link>
                    </li>
                    <li>
                        <Link to={'/calculation'}>Job supplies calculation</Link>
                    </li>
                    <li>
                        <Link to={'/user'}>Functions for user</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default navbar
