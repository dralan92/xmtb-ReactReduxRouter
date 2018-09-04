import React, { Component } from 'react'

class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      zip:'',
      address: '',

      gender:'',
      email:'',
      date_of_birth:'',
      phone:''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    
    this.setState({[e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
       <h1>Regiser New Rider</h1>
       <form>
         <div>
           <label> Username: </label><br/>
           <input type='text' name='username' onChange={this.onChange} value={this.state.username} />
         </div>
         <div>
           <label> Password: </label><br/>
           <input type='password' name='password' onChange={this.onChange} value={this.state.password}/>
         </div>
         <div>
           <label> Zip: </label><br/>
           <input type='text' name='zip' onChange={this.onChange} value={this.state.zip} />
         </div>
         <div>
           <label> Address: </label><br/>
           <input type='text' name='address' onChange={this.onChange} value={this.state.address} />
         </div>

         <div>
           <label> Gender: </label><br/>
           <input type='text' name='gender' onChange={this.onChange} value={this.state.gender} />
         </div>
         <div>
           <label> Email: </label><br/>
           <input type='text' name='email' onChange={this.onChange} value={this.state.email} />
         </div>
         <div>
           <label> Date Of Birth: </label><br/>
           <input type='text' name='date_of_birth' onChange={this.onChange} value={this.state.date_of_birth} />
         </div>
         <div>
           <label> Phone: </label><br/>
           <input type='text' name='phone' onChange={this.onChange} value={this.state.phone} />
         </div>
       </form>
      </div>
    )
  }
}

export default Register;