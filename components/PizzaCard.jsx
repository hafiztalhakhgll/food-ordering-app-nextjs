import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image className={styles.pizzaImg} src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>
        <Link legacyBehavior href={"product/1"}>
          <a>FIORI DI ZUCCA</a>
        </Link>
      </h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}

export default PizzaCard;
