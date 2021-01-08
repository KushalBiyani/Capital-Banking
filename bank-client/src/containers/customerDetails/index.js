import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import {api} from '../../url';
import '../../components/table.css'

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
                <br />
                <h1>Details of Customer</h1><br />
                <table className="flat-table flat-table-1" >
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ACCOUNT NUMBER</th>
                        <th>CURRENT BALANCE</th>
                        <th>LOCATION</th>
                    </thead>
                    <tbody>
                     {customer.map((item) => ( 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.acc_no}</td>
                            <td>{item.balance}</td>
                            <td>{item.location}</td>
                            <tr />
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