import React, { Component } from 'react';
import Description from './Description';

export default class Meeting extends Component {
    renderChild = (child) => {
      if (child.childNodes) {
        return (
          <ul>
            {child.jsonData.map(item => {
              return this.renderChild(item);
            })}
          </ul>
        ); 
      }
      else if (child.name) {
       return <Description name={child.name}/>; 
      }
      return null;
     }
  
    render() {
      return (
      <div>
        <h4>Nested Lists</h4>
        <ul>
          {this.renderChild(this.props.jsonData)}
        </ul>
      </div>
    );
  }
}