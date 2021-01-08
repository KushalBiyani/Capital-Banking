import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout';
import { api } from '../../url';
import '../../components/table.css'

export default function SelectUser() {
    const [customer, setCustomer] = useState([])
    useEffect(() => {                                  //fetch function to get data from api
        fetch(`${api}/custDetails`)
            .then((response) => response.json())
            .then((data) => {
                setCustomer(data)
            })
    }, [])
    return (
        <Layout >
            <div id="transfer">
                <br />
                <h1>Transact From</h1>
                <table class="flat-table flat-table-1">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ACCOUNT NUMBER</th>
                        <th>CURRENT BALANCE</th>
                        <th>Transfer</th>
                    </thead>
                    <tbody>
                        {customer.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.acc_no}</td>
                                <td>{item.balance}</td>
                                <td><Link to={`/transact/${item._id}`}><button type="submit" value="<%=item.id%>" class="btn-send">Send Money</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br /><br />
            </div>
        </Layout>
    )
}