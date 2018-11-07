import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { userService } from '../_services';
import Rave from 'react-flutterwave-rave'

// import RavePaymentModal from 'react-ravepayment'


var voucherAmt = localStorage.getItem("voucherAmt"); 

class Rav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      users: [],
      key: "FLWPUBK-18a307a5b1f7dd57f3510394e0313a44-X", // RavePay PUBLIC KEY
      phone: "08130278170",
      amount: voucherAmt,
      firstname: "Victor",
      lastname: "Smart",
      email: "test@test.com",
      room_number: "23A",
      hostel: "Silver 1",
      ticket_number: 3,
    }
    this.callback = this.callback.bind(this);
    this.close = this.close.bind(this);
  }
 
 
  callback = (response) => {
    
    console.log(response);
    
    
  }
 
  componentDidMount() {
    this.setState({ 
        user: JSON.parse(localStorage.getItem('user')),
        users: { loading: true }
    });
    userService.getAll().then(users => this.setState({ users }));
  }
  
  
 
  close = () => {
    console.log("Payment closed");
  }
 
  render() {
    const { user, users } = this.state;
    return (
      <div class="row">        
      <div class="col-sm-4 col-sm-offset-4  wow fadeInUp animated">
        <div class="pricing">
        <div align="center">
        <img src="../public/assets/img/admin.png" alt="admin"  class="img img-responsive"/>
         <h1>Hello {user.firstName}!</h1>
        <br/><br/>
        <Rave
          pay_button_text="Pay With Rave By Flutterwave"
          class="button"
          metadata={[
            { metaname: 'Tickets', metavalue: this.state.ticket_number },
            { metaname: 'Hostel', metavalue: this.state.hostel },
            { metaname: 'Room', metavalue: this.state.room_number }
          ]}
          payment_method="card"
          customer_email={this.state.email}
          customer_phone={this.state.phone}
          amount={"" + this.state.amount * this.state.ticket_number + ""}
          ravePubKey={this.state.key}
          callback={this.callback}
          onclose={this.close}
        />

        <br/><br/>

        <Link to="/">Go Back</Link>
      </div>
      </div>
      </div>
      </div>
    );
  }
}



export default Rav