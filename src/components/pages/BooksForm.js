import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postBooks } from '../../actions/booksActions';

class BooksForm extends Component {

  handleSubmit() {

    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value
    }];

    this.props.postBooks(book);
  }

  render () {
    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter title"
              ref="title"
            />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter description"
              ref="description"
            />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter price"
              ref="price"
            />
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save</Button>
        </Panel>
      </Well>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postBooks}, dispatch)
}

export default connect(null, mapDispatchToProps)(BooksForm);
