import styles from './layout.module.css'
import NavbarLinks from './NavbarLinks'

export default function Navbar(){
  return (
      <nav className={styles.navbar}>
        <NavbarLinks className={styles.navlinks}/>
      </nav>
  )
}