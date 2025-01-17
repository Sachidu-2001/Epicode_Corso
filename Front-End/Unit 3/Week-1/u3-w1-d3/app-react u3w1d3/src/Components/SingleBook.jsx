import { Component } from "react";
import{ Card } from 'react-bootstrap'

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
      onClick={() => this.setState({selected: !this.props.selected})}
      style={{border: this.state.selected ? '3px solid red' : 'none'}} >
    <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>
            {this.props.book.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
