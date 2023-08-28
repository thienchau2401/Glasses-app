import React, { Component } from 'react'

export default class GlassesDetail extends Component {
  render() {
    let {url} = this.props.data;
    let {data,eventClick} = this.props;
    return (
      <div className='col-2 border text-center bg-white'>
        <button className='btn' onClick={() => eventClick(data)}><img className='w-50' src={url} alt="" /></button>
        
      </div>
    )
  }
}
