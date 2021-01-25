import React from 'react';
import Layout from '../../components/Layout';
import Contact from '../../components/Contact';
import './style.css';
import bank from '../../images/bank.jpg'
import { MDBIcon } from "mdbreact";


export default function Home() {
  return (
    <Layout >
      <div>
        <div className="row">
          <div className="col-lg-6 box">
            <div className="content">
              <h1>money makes the </h1>
              <h1>world go round</h1><br />
              <h5 className="disabled-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
              <div className="disabled-1 row"><a href="selectuser" className="col-md-6"><button type="button " className="btn disabled-1">
                Transfer Now
                  </button></a>
                <a href="history" className="col-md-6"><button type="button " className="btn disabled-1">
                  History
                 </button></a>
              </div>
            </div>

          </div>
          <div className="col-lg-6" >
            <img src={bank} className="front-image" alt="Money transfer"></img>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="row">
          <div className="col-lg-2 d-flex align-items-center">
            <MDBIcon icon="retweet" size="5x" className="cyan-text pr-3 " />
            <div className="icon-text">
              <h2>fast </h2>
              <h2>service</h2>
            </div>
          </div>
          <div className="col-lg-2 d-flex align-items-center">
            <span><MDBIcon icon="check" size="5x" className="cyan-text pr-3" /></span>
            <div className="icon-text">
              <h2>easy </h2>
              <h2>to use</h2>
            </div>
          </div>
          <div className="col-lg-2 d-flex align-items-center">
            <MDBIcon icon="lock" size="5x" className="cyan-text pr-3" />
            <div className="icon-text">
              <h2>secure </h2>
              <h2>service</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <h1>We charge nothing</h1>
            <h1>No hidden charges</h1>
          </div>
          <hr />
        </div>
        <Contact />
      </div>
    </Layout>

  )
}