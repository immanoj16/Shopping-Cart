import React, { Component } from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class BooksForm extends Component {
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
          <Button bsStyle="primary">Save</Button>
        </Panel>
      </Well>
    )
  }
}

export default BooksForm;
