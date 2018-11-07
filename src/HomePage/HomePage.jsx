import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { userService } from '../_services';

// import Dashboard from './templates/Dashboard'

// import { BrowserRouter } from 'react-router-dom'
// import { Route, BrowserRouter as Router } from 'react-router-dom'


// const routing = (
//     <Router>
//       <div>
//         <Route path="/" component={Dashboard} />
//       </div>
//     </Router>
//   )



const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };

  const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };

  const btnStyle = {
    width: '100%'
  };


class HomePage extends React.Component {
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

    handleChange(param) { 
        return function (e) {
            localStorage.setItem("voucherAmt", param);
        };
    }


    render() {
        
        const { user, users } = this.state;
        return (
         


<div>
<div class="wrapper">        
<nav id="sidebar">             

            <div class="sidebar-header">
                <h4 class="text-center">
                    <a href="#/profile" title="My Dashboard">  
                        <img src="../../public/assets/img/admin.png" width="50" class="img img-circle wow fadeInDown animated" />
                    </a>
                    <br/>   
                     Hi {user.firstName}!
               </h4>
            </div>
                   
           <div>  
                <div class="input-group">
                   <span class="input-group-addon"><i class="fa fa-search"></i></span>
                   <input type="text" name="myfilter" ng-model="myfilter" class="form-control" required placeholder="Quick Search" />
                </div>
           </div>   
            
            
            
         <ul class="list-unstyled components">

            <li class="active"><a href="/"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a> </li>                   
            <li><a href="/"><i class="fa fa-bank fa-fw"></i> Account</a> </li>                   
            <li><a href="/"><i class="fa fa-line-chart fa-fw"></i> Earnings</a> </li>                   
        </ul>

        <ul class="list-unstyled CTAs">
                <li><Link to="/login" class="article"><i class="fa fa-sign-out"></i> Sign out</Link></li>
           
       </ul>


</nav>  
 


        
<div id="content">

            <nav class="navbar navbar-default">
                <div class="container-fluid">

                    <div class="navbar-header">
                        <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                            <i class="fa fa-bars"></i> 
                        </button>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav navbar-right">
                       <li><a href="/" title="My Account Balance"><span class="fa fa-bank"></span> Balance: &#8358; 800</a></li>
                    </ul>
                        
                    </div>
                </div>
            </nav>





<div id="view">

<div class="row"> 

        <div class="col-sm-4 wow fadeInRight animated">
                 <div class="panel  panel-yellow">
                     <Link to="/ravepay"  onClick={this.handleChange(500)}>
                         <div class="panel-heading">             
                         <div class="row">
                             <div class="col-xs-12">
                                <h3 class="text-center">Voucher</h3>
                             </div>
                        </div>
                        </div>
                        <h3 class="text-center"><b>&#8358; 500</b></h3>
                        </Link>
                 </div>
       </div>
     
      
       <div class="col-sm-4 wow fadeInRight animated">
        <div class="panel  panel-green">
                     <Link to="/ravepay"  onClick={this.handleChange(1000)}>
                         <div class="panel-heading">             
                         <div class="row">
                             <div class="col-xs-12">
                                <h3 class="text-center">Voucher</h3>
                             </div>
                        </div>
                        </div>
                        <h3 class="text-center"><b>&#8358; 1000</b></h3>
                        </Link>
                 </div>
       </div>
     
       <div class="col-sm-4 wow fadeInRight animated">
        <div class="panel  panel-red">
                     <Link to="/ravepay"   onClick={this.handleChange(2000)}>
                         <div class="panel-heading">             
                         <div class="row">
                             <div class="col-xs-12">
                                <h3 class="text-center">Voucher</h3>
                             </div>
                        </div>
                        </div>
                        <h3 class="text-center"><b>&#8358; 2000</b></h3>
                        </Link>
                 </div>
       </div>
     
     

     </div>

</div>

</div>       
</div>

</div>


        );
    }





}


export { HomePage }

