import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 @_halidigitulo. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" className={styles.icon} height={15} width={15}  alt="@_halidigitulo"/>
          <Image src="/2.png" className={styles.icon} height={15} width={15}  alt="@_halidigitulo"/>
          <Image src="/3.png" className={styles.icon} height={15} width={15}  alt="@_halidigitulo"/>
          <Image src="/4.png" className={styles.icon} height={15} width={15}  alt="@_halidigitulo"/>

        </div>
    </div>
  )
}

export default Footer