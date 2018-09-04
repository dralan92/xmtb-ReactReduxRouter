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
        <div key={rider.id}>
            <h3>{rider.username}</h3>
            <p>{rider.address}</p>
        </div>
      ));
    return (
      <div>
        
            
        <div className='wrapper'>
            <div className='main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-2'>
                            <h1>Rider List </h1>
                                {riderListView}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Listing;