import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
          voluptatum consequuntur commodi deleniti dicta aut. Consequuntur
          ducimus delectus veniam illo?
        </p>
        <Button url='/portfolio' text='See What We Do'/>

      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="@_halidigitulo" className={styles.img} />
      </div>
      {/* Hello World */}
    </div>
  );
}
