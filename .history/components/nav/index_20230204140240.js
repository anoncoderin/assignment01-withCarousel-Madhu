import styles from '@/styles/nav.module.css'
import Image from 'next/image'
import { useState } from 'react'


  



export default function Nav(
  {
    menuIcon = '/images/icons/icons/menu-icon.png',
    menuIconHeight = 45,
    menuIconWidth = 45,
    favIcon = '/images/favicon/favicon.png',
    favIconHeight = 50,
    favIconWidth = 50

  }
) {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  
  return (
    <div>
      <div className={styles.nav}>
        <button className={styles.menubar} onClick={toggleMenu}>
          <Image src={menuIcon} height={menuIconHeight} width={menuIconWidth}></Image>
        </button>
        {isOpen && (
          <div className={styles.togglebutton}>
            <Image src={'/images/menuBackground.png'} onClick={toggleMenu} height={250} width={250}></Image>
            
          </div>
          <
        )}
        <Image src={favIcon} height={favIconHeight} width={favIconWidth}></Image>

      </div>
      
    </div>
  )
}

