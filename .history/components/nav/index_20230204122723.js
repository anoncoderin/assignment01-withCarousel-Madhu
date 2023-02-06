import styles from '@/styles/nav.module.css'
import Image from 'next/image'


function toggleMenu() {
return(
  
  
)
}

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
  return (
    <div className={styles.nav}>
      <button className={styles.menubar}>
        <Image src={menuIcon} height={menuIconHeight} width={menuIconWidth} onClick= {toggleMenu}></Image>
      </button>
      <Image src={'/images/menuBackground.png'}
      
      <Image src={favIcon} height={favIconHeight} width={favIconWidth}></Image>
    </div>
  )
}

