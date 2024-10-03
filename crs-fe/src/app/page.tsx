import styles from "./page.module.css";
import TransactionsList from "./components/TransactionsList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p className="container-title">
          Asset Management Compliance Review System
        </p>
        <TransactionsList></TransactionsList>
      </div>
    </main>
  );
}
