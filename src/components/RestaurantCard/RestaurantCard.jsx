import Image from "next/image";
import styles from "./RestaurantCard.module.css";

export default function RestaurantCard({ name, location, image, isNew }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt={name} fill />
        {isNew && <span className={styles.badge}>Nouveau</span>}
      </div>

      <div className={styles.text}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.location}>{location}</p>
        <button className={styles.like} aria-label="Ajouter aux favoris">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2207 2.40527C14.1599 0.222558 17.2057 -0.147219 19.3223 1.62402L19.5244 1.80176C22.0187 4.12419 22.1558 8.32368 19.9121 10.8496L11.5977 20.2148C11.2807 20.5716 10.8021 20.5941 10.4648 20.2822L10.3994 20.2148L2.08496 10.8496C-0.0847856 8.40259 -0.0235333 4.38556 2.25 2.02539L2.47656 1.80176C4.53112 -0.108075 7.5843 0.134683 9.58887 2.19922L9.78027 2.40527L10.627 3.35742L11.001 3.77734L11.374 3.35742L12.2207 2.40527Z"
              stroke="#101010"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
