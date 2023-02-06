import styles from 'nav.css'

export default function Nav(
    {
      menuIcon='/images/icons/icons/menu-icon.png',
      menuIconHeight=45,
      menuIconWidth=45
    }
) {
    return (
        <div className={styles.nav}>
        <button className={styles.menubar}><Image src={menuIcon} height={menuIconHeight} width={menuIconWidth}></Image></button>
        <Image src='/images/favicon/favicon.png' height={50} width={50}></Image>

      </div>
    )
}

