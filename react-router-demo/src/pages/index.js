import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return  <Redirect to="/home/" />;
    }
}
 
export default Index;
