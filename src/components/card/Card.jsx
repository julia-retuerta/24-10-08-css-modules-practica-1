import styles from './card.module.css';

const Card = ({ src, alt, backgroundColor, title, text, button, buttonTextColor }) => {
  return (
    <div className={`${styles.card} ${styles[backgroundColor]}`}>
      <img src={src} alt={alt} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <button className={`${styles.button} ${styles[buttonTextColor]}`}>{button}</button>
    </div>
  );
};

export default Card;
