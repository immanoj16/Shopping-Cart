import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Button, ButtonGroup, Label, Modal } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import { deleteCartItem, updateCart } from '../../actions/cartActions';

class Cart extends Component {

  constructor () {
    super();

    this.state = {
      showModal: false
    }
  }

  open() {
    this.setState({showModal: true})
  }

  close() {
    this.setState({showModal: false})
  }

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

  onIncrement(_id) {
    this.props.updateCart(_id, 1);
  }

  onDecrement(_id, quantity) {
    if(quantity > 1) {
      this.props.updateCart(_id, -1);
    }
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
              <h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth: '300px'}}>
                <Button onClick={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)} bsStyle="default" bsSize="small">-</Button>
                <Button onClick={this.onIncrement.bind(this, cartArr._id)} bsStyle="default" bsSize="small">+</Button>
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
        <Row>
          <Col xs={12}>
            <h6>Total amount:</h6>
            <Button onClick={this.open.bind(this)} bsStyle="success" bsSize="small">
              PROCEED TO CHECKOUT
            </Button>
          </Col>
        </Row>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Thank you!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Your order has been saved</h6>
            <p>You will receive an email confirmation</p>
          </Modal.Body>
          <Modal.Footer>
            <Col xs={6}>
              <h6>total $</h6>
            </Col>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
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
  return bindActionCreators({deleteCartItem, updateCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
