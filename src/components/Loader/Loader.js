import React, { Component } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import './Loader.css';
 
class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className='loader'>
        <GridLoader
          size={15}
          color={'#0cbfe9'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;