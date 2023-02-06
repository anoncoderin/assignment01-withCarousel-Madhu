import styles from 'nav.css'

export default function Nav(
    {
      menuIcon='/images/icons/icons/menu-icon.png'
    }
) {
    return (
        <div className={styles.nav}>
        <button className={styles.menubar}><Image src='men' height={45} width={45}></Image></button>
        <Image src='/images/favicon/favicon.png' height={50} width={50}></Image>

      </div>
    )
}

