import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { OrderBurgerButton } from "../react/OrderBurgerButton";

import { Restaurant } from "../react/Restaurant";
import { Card, CardBody, CardTitle, Cards } from "../react/card/Card";

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

        <Cards>
          <Card>
            <CardTitle>
              Meat<span>-&gt;</span>
            </CardTitle>
            <CardBody>
              Fantastic choice, including beef, chicken and veggie.
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              Cheese <span>-&gt;</span>
            </CardTitle>
            <CardBody>
              Best cheese in town, including cheddar, swiss and blue.
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              Bun <span>-&gt;</span>
            </CardTitle>
            <CardBody>
              Fine selection of buns, including sesame, brioche and whole wheat.
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              Topping <span>-&gt;</span>
            </CardTitle>
            <CardBody>
              Don&apos;t forget the toppings, including lettuce, tomato and
              onion.
            </CardBody>
          </Card>
        </Cards>
      </main>
    </Restaurant>
  );
}
