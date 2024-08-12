import styles from './navbar.module.css'

const navbar = () => {
    return (
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
    )
}

export default navbar
