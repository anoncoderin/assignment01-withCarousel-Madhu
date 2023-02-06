import styles from '@/styles/nav.module.css'
import Image from 'next/image'





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
    <div>
      <div className={styles.nav}>
        <button className={styles.menubar}>
          <Image src={menuIcon} height={menuIconHeight} width={menuIconWidth}></Image>
        </button>
        <div id={className={styles.togglebutton}>
        <Image src={'/images/menuBackground.png'} height={250} width={250}></Image>
      </div>
        <Image src={favIcon} height={favIconHeight} width={favIconWidth}></Image>

      </div>
      
    </div>
  )
}

