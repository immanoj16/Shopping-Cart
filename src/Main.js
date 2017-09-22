import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './components/Menu';
import Footer from './components/Footer';


class Main extends Component {
  render() {
    return (
      <div>
        <Menu cartItemsNumber={this.props.totalQty} />
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(Main)
