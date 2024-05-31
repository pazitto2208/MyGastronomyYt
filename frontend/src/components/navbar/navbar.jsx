import styles from './navbar.module.css'
import { LuShoppingCart, LuUserCircle, LuMenu } from "react-icons/lu"
import { Drawer } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <Link to={'/'}>
                    <img className={styles.logo} src="/imgs/logo.png" alt="" />
                </Link>
                <div className={styles.navbarLinksContainer}>
                    <Link to={'/'} className={styles.navbarLink}>Home</Link>
                    <Link to={'/plates'} className={styles.navbarLink}>Plates</Link>
                    <Link to={'/cart'}>
                        <LuShoppingCart className={styles.navbarLink} />
                    </Link>
                    <Link to={'/profile'}>
                        <LuUserCircle className={styles.navbarLink} />
                    </Link>
                </div>
            </div>

            <div className={styles.mobileNavbarItems}>
               <Link to={'/'}>
                    <img className={styles.logo} src="/imgs/logo.png" alt="" />
                </Link>
                <div className={styles.mobileNavbarBtns}>
                    <LuShoppingCart className={styles.navbarLink} />
                    <LuMenu className={styles.navbarLink} onClick={handleOpenMenu}/>
                </div>
            </div>
            <Drawer
            anchor='right'
            open={openMenu}
            onClose={handleOpenMenu}
            >
                <div className={styles.drawer}>
                    <Link to={'/'} className={styles.navbarLink} onClick={handleOpenMenu}>Home</Link>
                    <Link to={'/plates'} className={styles.navbarLink} onClick={handleOpenMenu}>Plates</Link>
                    <Link to={'/profile'} className={styles.navbarLink} onClick={handleOpenMenu}>Profile</Link>
                </div>
            </Drawer>

        </nav>
    )
}