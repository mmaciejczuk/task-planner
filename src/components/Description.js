import React, { Component } from 'react';

export default class Description extends Component {
    render() {
      let {name}=this.props;
      return (
        <li>{name}</li>
      );
    }
  }