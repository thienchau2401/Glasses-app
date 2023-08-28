import React, { Component } from 'react'
import data from './dataGlasses.json'
import GlassesDetail from './GlassesDetail';
import './style.css'
export default class GlassesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassDetail:data[0],
    }
  }
  changeGlass = (glass) => {
     this.setState({
      glassDetail:glass
    })
  }
  render() {
    let {glassDetail} = this.state;
    return (
      <div className='container'>
        <div className='d-flex justify-content-around my-5'>
            <div className='glass__model position-relative'>
                <img className='glass position-absolute' src={glassDetail.url} alt='' />
                <div className='glass__detail position-absolute'>
                  <h2 className='text-black text-center'>{glassDetail.name}</h2>
                  <p>{glassDetail.desc}</p>
                </div>
            </div>
            <div className='glass__model position-relative'>
                <img className='glass position-absolute' src={glassDetail.url} alt='' />
            </div>
        </div>
        <div className='row gap-3 mb-3'>
            {data.map((glass,index) =>{return <GlassesDetail key={index} data={glass} eventClick = {this.changeGlass}></GlassesDetail>})}
        </div>
      </div>
    )
  }
}

