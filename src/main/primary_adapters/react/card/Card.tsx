import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Cards: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export const Card: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export const CardTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <h2 className={inter.className}>{children}</h2>;
};

export const CardBody: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <p className={inter.className}>{children}</p>;
};
