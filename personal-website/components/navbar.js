import styles from './layout.module.css'
import Link from 'next/link'

export default function Navbar(){
  return (
    <div className={styles.container}>
      <ul className={styles.container__ul}>
        <li> 
          <Link href="/">
          <a> Home </a> 
          </Link>
        </li>
        <li>
          <Link href="/cv">
          <a> CV </a> 
          </Link>
          </li>
        <li>
          <Link href="/contact">
          <a> Contact </a> 
          </Link>
        </li>
      </ul>
    </div>
  )
}