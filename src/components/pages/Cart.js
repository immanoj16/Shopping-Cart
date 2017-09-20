import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import { deleteCartItem } from '../../actions/cartActions';

class Cart extends Component {

  onDelete(_id) {

    // Create a copy of the current array of cart
    const currentCartToDelete = [...this.props.cart];

    // Determine at which index in cart array is the book to be deleted
    const indexToDelete = currentCartToDelete.findIndex(function (cart) {
      return cart._id === _id
    });

    // use slice to remove the cart at the specified index
    let cartAfterDelete = [...currentCartToDelete.slice(0, indexToDelete), ...currentCartToDelete.slice(indexToDelete + 1)];

    this.props.deleteCartItem(cartAfterDelete);
  }

  render () {

    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }

  renderEmpty() {
    return (
      <div></div>
    )
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(cartArr => {
      return (
        <Panel key={cartArr._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartArr.title}</h6>&nbsp;&nbsp;&nbsp;&nbsp;
            </Col>
            <Col xs={12} sm={2}>
              <h6>usd ${cartArr.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty. <Label bsStyle="success"></Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth: '300px'}}>
                <Button bsStyle="default" bsSize="small">-</Button>
                <Button bsStyle="default" bsSize="small">+</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={this.onDelete.bind(this, cartArr._id)} bsStyle="danger" bsSize="small">DELETE</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    }, this);

    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteCartItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
