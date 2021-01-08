import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import {api} from '../../url';
import '../../components/table.css'

export default function History() {
    const [transaction, setTransaction] = useState([])
    useEffect(() => {                                  
        fetch(`${api}/history`)
          .then((response) => response.json())
          .then((data) => {
            setTransaction(data)
          })
      }, [])
      

    return (
        <Layout >
            <div id="history">
                <br />
                <h1>Transaction History</h1>
                <table class="flat-table flat-table-1">
                    <thead>
                        <th>Transaction Number</th>
                        <th>SENDER NAME</th>
                        <th>RECIEVER NAME</th>
                        <th>AMOUNT</th>
                    </thead>
                    <tbody>
                    {transaction.map((item) => ( 
                        <tr>
                            <td>{item.transactionNumber}</td>
                            <td>{item.sendersName}</td>
                            <td>{item.recieversName}</td>
                            <td>{item.amount}</td>
                        </tr>
                        ))} 
                    </tbody>
                </table>
                <br /><br />
            </div>
        </Layout>
    )
}