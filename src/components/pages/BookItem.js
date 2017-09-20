import React from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart, updateCart } from "../../actions/cartActions";


class BookItem extends React.Component {

  handleCart() {

    const { _id, title, description, price } = this.props.booksArr;

    const book = [...this.props.cart, {
      _id,
      title,
      description,
      price,
      quantity: 1
    }];

    // CHECK IF CART IS EMPTY
    if(this.props.cart.length > 0) {
      // CART IS EMPTY
      let cartIndex = this.props.cart.findIndex(function(cart) {
        return cart._id === _id;
      });

      // IF RETURNS -1 THERE ARE NO ITEMS WITH SAME ID
      if(cartIndex === -1) {
        this.props.addToCart(book);
      } else {
        // WE NEED TO UPDATE QUANTITY
        this.props.updateCart(_id, 1);
      }
    } else {
      // CART IS EMPTY
      this.props.addToCart(book);
    }
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
  return bindActionCreators({addToCart, updateCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
