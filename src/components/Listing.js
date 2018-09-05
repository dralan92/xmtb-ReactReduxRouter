import React, { Component } from 'react'

class Listing extends Component {

    constructor(props){
        super(props);
        this.state={
            riders: []
        }
    }

    componentWillMount(){
        fetch('https://blooming-mesa-21883.herokuapp.com/riders')
        .then(res=>res.json())
        .then(data=> this.setState({riders:data.riders}));
    }
    componentWillUnmount() {
        this.isCancelled = true;
    }
  render() {
      const riderListView = this.state.riders.map(rider=>(
        <li key = {rider.id} className="list-group-item ">
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <strong>{rider.username}</strong>
                    </div>
                    <div className='col-sm-2'>
                        <span>Email: {rider.email}</span>
                    </div>
                    <div className='col-sm-2'>
                        <span>Phone: {rider.phone}</span>
                    </div>
                    <div className='col-sm-2'>
                        <span>Address: {rider.address}</span>
                    </div>  
                    <div className='col-sm-2'>
                        <span>Zip: {rider.zip}</span>
                    </div>
                    <div className='col-sm-2'>
                        <span>Date of Birth: {rider.dateOfBirth}</span>
                    </div>    
                </div>
            </div>
        
        
        </li>
      ));
    return (
        <div>
            <h1 className='reg_header'>List Of Registered Riders</h1>
            <div className='container'>
                <div className='row' >
                    <div className = 'col'>
                        <ul className="list-group">
                            {riderListView}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    )
  }
}

export default Listing;