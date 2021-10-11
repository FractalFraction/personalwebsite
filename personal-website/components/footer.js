import styles from './layout.module.css'
import Image from 'next/image'
import gitHubLogo from './../public/images/GitHub-Mark-64px.png'
import linkedInLogo from './../public/images/In-Blue-34.png'

export default function Footer(){
  return (
    <>
      <footer className={styles.footer}>
        <section>
        <a
          href="https://github.com/FractalFraction"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.container}>
           <ul className={styles.container__ul}>
              <li>
                <Image 
                  src={gitHubLogo} alt="Github logo" 
                  height={32}
                  width={32}
                  />
              </li>
              <li>
                FractalFraction
              </li>
          </ul>
         </div>
        </a>

        <a
          href="https://www.linkedin.com/in/colin-gardiner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.container}>
           <ul className={styles.container__ul}>
            <li>
              <Image 
                src={linkedInLogo} alt="LinkedIn logo" 
                height={32}
                width={32}
                />
            </li>
            <li>
              LinkedIn
            </li>
          </ul>
         </div>
        </a>

        </section>
      </footer>
    </>
  )
}