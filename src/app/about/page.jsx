import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import styles from './page.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=600"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam tenetur repellat modi ex. Et assumenda consectetur rem excepturi
            ex cum repellendus accusamus culpa optio, atque recusandae. Sequi
            labore debitis nam consequatur. Doloribus, voluptatem ipsum.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            eum tenetur suscipit corrupti excepturi nam nulla. Est impedit
            aperiam ea.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit obcaecati repudiandae hic eos quasi molestiae amet
            officiis reiciendis laudantium culpa vitae soluta debitis
            repellendus eligendi, natus autem cum nostrum sint? Repellat magni
            beatae voluptatem suscipit.
          </p>
          <Button url='contact' text='Contact Us'/>
        </div>
      </div>
    </div>
  );
};

export default About;
