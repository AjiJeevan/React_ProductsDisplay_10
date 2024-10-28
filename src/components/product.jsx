import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props){
    console.log(props.productInfo.image)
    return(
        <>
        <Card>
            <Card.Img variant="top" src={props.productInfo.image} />
            <Card.Body>
                <Card.Title>{props.productInfo.title}</Card.Title>
                <Card.Text>{props.productInfo.price}</Card.Text>
                <Card.Text>{props.productInfo.description}</Card.Text>
                <Button variant="primary">BUY NOW</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default Product