import React, { Component } from 'react';
import  MyHoc from './Components/HOC/MyHoc';

export  default class Footer extends Component {
  render() {
    return (
      <div>
       <h3 className="footer">Copyright Reserved to Murthy</h3>
       <MyHoc/>
      </div>
      
      
    );
  }
}
