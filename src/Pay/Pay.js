import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { userService } from '../_services';




var voucherAmt = localStorage.getItem("voucherAmt"); 

class Pay extends Component {
  constructor(props) {
    super(props);

    this.state = {
        user: {},
        users: []
    };
}



componentDidMount() {
  this.setState({ 
      user: JSON.parse(localStorage.getItem('user')),
      users: { loading: true }
  });
  userService.getAll().then(users => this.setState({ users }));
}


 
render() {
        
  const { user, users } = this.state;
  return (
    <h1>Hello {user.firstName}! Our Payment API cost: {voucherAmt}</h1>
  )
}


}


export default Pay