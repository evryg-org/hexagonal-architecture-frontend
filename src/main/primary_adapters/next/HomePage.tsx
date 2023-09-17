import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { OrderBurgerButton } from "../react/OrderBurgerButton";

import { Restaurant } from "../react/Restaurant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Restaurant>
      <Head>
        <title>Hexagonal Architecture Frontend by evryg</title>
        <meta name="description" content="Improved frontend maintainability" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Hexagonal architecture with Next.js and React.</p>
          <div>
            <a
              href="https://www.evryg.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              By evryg
            </a>
          </div>
        </div>

        <OrderBurgerButton />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={inter.className}>
              Meat<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Fantastic choice, including beef, chicken and veggie.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>
              Cheese <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Best cheese in town, including cheddar, swiss and blue.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>
              Bun <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Fine selection of buns, including sesame, brioche and whole wheat.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>
              Topping <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Don&apos;t forget the toppings, including lettuce, tomato and onion.
            </p>
          </div>
        </div>
      </main>
    </Restaurant>
  );
}
