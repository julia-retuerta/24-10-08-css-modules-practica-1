import Card from '../card/Card';
import styles from './container.module.css';

const Container = () => {
  return (
    <div className={styles.container}>
      <Card
        src='assets/images/sedans.svg'
        alt='Sedans'
        title='SEDANS'
        text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        backgroundColor='bg-orange'
        button='Learn More'
        buttonTextColor='button-text-color-orange'
      />

      <Card
        src='assets/images/suvs.svg'
        alt='Suvs'
        title='SUVS'
        text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        backgroundColor='bg-turquoise'
        button='Learn More'
        buttonTextColor='button-text-color-turquoise'
      />

      <Card
        src='assets/images/luxury.svg'
        alt='Luxury'
        title='LUXURY'
        text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
        backgroundColor='bg-dark-green'
        button='Learn More'
        buttonTextColor='button-text-color-dark-green'
      />
    </div>
  );
};

export default Container;
