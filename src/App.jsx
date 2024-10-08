import Card from './components/card/Card';

const App = () => {
  return (
    <>
      <Card
        title='SEDANS'
        text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        backgroundColor='orange'
      />

      <Card
        title='SUVS'
        text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        backgroundColor='turquoise'
      />

      <Card
        title='LUXURY'
        text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
        backgroundColor='dark-green'
      />
    </>
  );
};

export default App;
