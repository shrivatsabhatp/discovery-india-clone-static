import React from 'react'
import logo from '../../assets/logo.png'
import styles from './Header.module.scss'
import Button from '../../atoms/Button'
import { BiMenu } from 'react-icons/bi'
import Search from '../../molecules/Searchbar'
const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.brand}>
          <BiMenu size={24} color={'inherit'} className={styles.ham} />
          <img src={logo} alt='brand logo' className={styles.brand__logo} />
          <ul className={styles.menu__options}>
            <li className={styles.active}>Home</li>
            <li>Explore</li>
            <li>Kids</li>
            <li>Shorts</li>
            <li>Mindblown</li>
            <li>Premium</li>
          </ul>
        </div>
        <div className={styles.secondary__options}>
          <Search placeholder={'Search for a show, episode, shorts etc.'} />
          <Button>My Account</Button>
        </div>
      </div>
    </header>
  )
}

export default Header