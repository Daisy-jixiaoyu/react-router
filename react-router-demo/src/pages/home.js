import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h2>home 页面</h2>  );
    }
    // componentDidMount(){
    //     this.setState({id:this.props.match.params.id})
    //     console.log(this.props.match)
    // }
}
 
export default Home;
