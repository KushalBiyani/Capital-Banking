import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import {api} from '../../url';


export default function CustDetails() {
    const [customer, setCustomer] = useState([])
    useEffect(() => {                                  
        fetch(`${api}/custDetails`)
          .then((response) => response.json())
          .then((data) => {
            setCustomer(data)
          })
      }, [])
      


    return (
        <Layout >
            <div id="cust">

                <h1>Details of Customer</h1><br />
                <table className="flat-table flat-table-1 table-responsive-lg" >
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ACCOUNT NUMBER</th>
                        <th>CURRENT BALANCE</th>
                        <th>LOCATION</th></tr>
                    </thead>
                    <tbody>
                     {customer.map((item) => ( 
                        <tr key={item._id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.acc_no}</td>
                            <td>{item.balance}</td>
                            <td>{item.location}</td>
                        </tr>
                        ))} 
                    </tbody>
                </table>
                <br />
                <br />
            </div>
        </Layout>
    )
}