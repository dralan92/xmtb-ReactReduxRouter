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
      dateOfBirth : this.state.dateOfBirth,
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
      <div className='wrapper'>
      <form onSubmit={this.onSubmit}>
        <div className ='container'>
          <h1 className ='reg_header'>Register New Rider </h1>
          <div className ='row'>
            <div className='col-md-6'>
                      <div>
                        <label> Username: </label><br/>
                        <input className='form-control' type='text' name='username' onChange={this.onChange} value={this.state.username} />
                    </div>
                    <div className='form-group'>
                          <label> Zip: </label><br/>
                          <input className='form-control' type='text' name='zip' onChange={this.onChange} value={this.state.zip} />
                    </div>
                    <div className='form-group'>
                          <label> Gender: </label><br/>
                          <input className='form-control' type='text' name='gender' onChange={this.onChange} value={this.state.gender} />
                    </div>
                    <div className='form-group'>
                          <label> Date Of Birth: </label><br/>
                          <input className='form-control' type='date' name='dateOfBirth' onChange={this.onChange} value={this.state.dateOfBirth} />
                    </div>
            </div>
            <div className='col-md-6'>
                        <div>
                          <label> Password: </label><br/>
                          <input className='form-control' type='password' name='password' onChange={this.onChange} value={this.state.password}/>
                        </div>
                        <div className='form-group'>
                          <label> Address: </label><br/>
                          <input className='form-control' type='text' name='address' onChange={this.onChange} value={this.state.address} />
                        </div>
                        <div className='form-group'>
                          <label> Email: </label><br/>
                          <input className='form-control' type='text' name='email' onChange={this.onChange} value={this.state.email} />
                        </div>
                        <div className='form-group'>
                          <label> Phone: </label><br/>
                          <input className='form-control' type='text' name='phone' onChange={this.onChange} value={this.state.phone} />
                        </div>
            </div>
          </div>
          <div className='row'>
                <div className='col'>
                  <button className='form-control' type='submit' className = 'btn reg_button'>Register</button>
                </div>
          </div>
        </div>
       
      </form>
      </div>
     
    )
  }
}

export default Register;