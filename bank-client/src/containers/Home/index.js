import React from 'react';
import Layout from '../../components/Layout';
import bank from '../../images/bank.jpg'
import './style.css';

export default function Home() {
return (
    <Layout >
      <div>
    <div className="row">
      <div className="col-md-7">
        <img src={bank} alt=""  />
      </div>
      <div className="col-md-5 box" >
        <br/>
        <div>
          <h1 className="heading">Welcome to Capital Banking</h1>
          <div>
            <div>
              <div className="btn-pad">
                <a href="customerDetails"><button type="button " className="btn">
                    Customers Deatails
                  </button></a>
              </div>
            </div>
            <div>
              <div className="btn-pad">
                <a href="selectuser"><button type="button " className="btn">
                    Transfer Money
                  </button></a>
              </div>
            </div>
            <div>
              <div className="btn-pad">
                <a href="history"><button type="button " className="btn">
                    Transaction History
                  </button></a>
              </div>
            </div>
          </div>
          <br /><br /><br /><br />
        </div>
      </div>
    </div>
  </div>
    </Layout>
  )
}