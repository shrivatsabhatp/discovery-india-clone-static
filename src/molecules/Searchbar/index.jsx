import React from 'react'
import Input from '../../atoms/Input'
import styles from './Searchbar.module.scss';
import { BiSearch } from 'react-icons/bi'

const Search = (props) => {
  return (
    <div className={styles.searchbar}>
      <Input className={styles.input} placeholder={props.placeholder} type='search' />
      <BiSearch size={24} color={'inherit'} className={styles.search__icon} />
    </div>
  )
}

export default Search