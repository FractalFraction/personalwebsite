import styles from './layout.module.css'
import React from 'react'
import { useState} from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import NavbarLinks from './NavbarLinks'


export default function ResponsiveNavbar(){
  // const { initialHeight, initialWidth } = useWindowDimensions(); 
  // let [currentWidth, setCurrentWidth] = useState(initialWidth);
 
  // currentWidth =  setCurrentWidth(useWindowDimensions().width)
  const [isOn, setIsOn] = useState(false);

  let size = useWindowDimensions() 

  return (
    <>  
      {(size.width <= 700) 
        ? <nav className={styles.navbar}>  
          <div className={styles.div}>     
            <button className={styles.btn} onClick={() => setIsOn(!isOn)}>  <i className="fa fa-bars fa-2x"></i></button>
          </div>
           {(isOn) ? <NavbarLinks className={styles.navlinks__mobile}/> : null}
          </nav>
        : <nav className={styles.navbar}>                    
            <NavbarLinks className={styles.navlinks}/>
          </nav> 
      }  
    </>                           
  )
}

