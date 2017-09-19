import React from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from "../../actions/cartActions";


class BookItem extends React.Component {

  handleCart() {

    const { id, title, description, price } = this.props.booksArr;

    const book = [{
      id,
      title,
      description,
      price
    }];

    this.props.addToCart(book);
  }

  render() {

    const { title, description, price } = this.props.booksArr;

    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{title}</h6>
            <p>{description}</p>
            <h6>usd ${price}</h6>
            <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Buy now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addToCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
