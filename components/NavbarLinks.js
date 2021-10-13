import styles from './layout.module.css'
import Link from 'next/link'

export default function NavbarLinks(props){
  return(
      <div className={props.className}>
        <li>
          <Link href="/">
          <a> <i className="fa fa-home" aria-hidden="true"></i>&nbsp; Home </a> 
          </Link>
        </li>
        <li>
          <Link href="/cv">
          <a> <i className="fa fa-file-text-o" aria-hidden="true"></i>&nbsp; CV </a> 
          </Link>
          </li>
        <li>
          <Link href="/contact">
          <a> <i className="fa fa-address-book-o" aria-hidden="true"></i>&nbsp; Contact </a> 
          </Link>
        </li>
      </div>
      )
}

