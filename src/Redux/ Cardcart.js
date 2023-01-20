import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'


function Cardcart() {
  return (
    <div className='container'>
       
    <Card className='card' style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>book 1</Card.Title>
        <Card.Text>
         $ 23.00
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card></div>
  );
}

export default Cardcart;