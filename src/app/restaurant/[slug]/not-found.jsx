import styles from "@/app/page.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Restaurant introuvable</h1>
        <p>Ce restaurant n'existe pas ou a été supprimé.</p>
        <Link className={styles.cta} href="/">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
