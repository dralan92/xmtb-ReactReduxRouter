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
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    
    this.setState({[e.target.name]: e.target.value });
  }

  async onSubmit(e){
    e.preventDefault();

    const new_rider = {
      username : this.state.username,
      password : this.state.password,
      zip : this.state.zip,
      address: this.state.address,

      gender : this.state.gender,
      email : this.state.email,
      date_of_birth : this.state.date_of_birth,
      phone : this.state.phone
    }

    try{

        const registering = await window.fetch('https://blooming-mesa-21883.herokuapp.com/riders', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(new_rider)
      });
      const result = await registering.json();
      console.log(result);
      

    }catch(err){
      console.log(err);
    }
  }


  render() {
    return (
      <div>
       <h1>Regiser New Rider</h1>
       <form onSubmit={this.onSubmit} >
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
         <button type='submit' >Register</button>
       </form>
      </div>
    )
  }
}

export default Register;