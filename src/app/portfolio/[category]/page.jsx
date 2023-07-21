import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.Category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quod deleniti, magnam soluta, architecto quasi iste alias placeat aut nesciunt maiores! Temporibus illum rem molestiae expedita vel recusandae hic eos!</p>
          <Button url='' text='See more'/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src='https://images.pexels.com/photos/4069535/pexels-photo-4069535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quod deleniti, magnam soluta, architecto quasi iste alias placeat aut nesciunt maiores! Temporibus illum rem molestiae expedita vel recusandae hic eos!</p>
          <Button url='' text='See more'/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src='https://images.pexels.com/photos/4069535/pexels-photo-4069535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Category