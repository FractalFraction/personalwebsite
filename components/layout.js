import Navbar from './Navbar'
import ResponsiveNavbar from './ResponsiveNavbar'
import Footer from './footer'
import styles from './layout.module.css'

export default function Layout({children}) {
  return (
      <div className={styles.grid}> 
        <div className={styles.grid__navbar}> 
          <ResponsiveNavbar />
        </div>  
        <div className={styles.grid__main}> 
          <main>{children}</main>
        </div>
        <div className={styles.grid__footer}> 
         <Footer/>
        </div>
      </div>
  )

}