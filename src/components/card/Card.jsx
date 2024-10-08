import styles from './card.module.css';

const Card = ({ title, text, backgroundColor }) => {
  console.log(styles);

  return (
    <>
      <div className={`${styles.card}`}></div>
    </>
  );
};

export default Card;
