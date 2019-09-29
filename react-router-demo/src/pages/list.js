import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h2>list id -> {this.state.id}</h2>  );
    }
    componentDidMount(){
        this.setState({id:this.props.match.params.id})
        console.log(this.props.match)
    }
}
 
export default List;
