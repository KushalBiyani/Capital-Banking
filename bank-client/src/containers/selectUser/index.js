import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout';
import { api } from '../../url';


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
                <table className="flat-table flat-table-1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ACCOUNT NUMBER</th>
                            <th>CURRENT BALANCE</th>
                            <th>Transfer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((item) => (
                            <tr key={item._id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.acc_no}</td>
                                <td>{item.balance}</td>
                                <td><Link to={`/transact/${item._id}`}><button type="submit" value="<%=item.id%>" className="btn-send">Send Money</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br /><br />
            </div>
        </Layout>
    )
}