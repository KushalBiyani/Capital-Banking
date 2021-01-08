import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { api } from '../../url';
import '../../components/table.css'

export default function Transfer(props) {
    const [success, setSuccess] = useState(false)
    const UserId = props.match.params.id;
    const [acc_no, setAcc] = useState("");
    const [amount, setAmount] = useState("");
    const [customer, setCustomer] = useState([])
    useEffect(() => {                                  //fetch function to get data from api
        fetch(`${api}/custDetails`)
            .then((response) => response.json())
            .then((data) => {
                setCustomer(data)
            })
    }, [])

    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(`${api}/transact/${UserId}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
            })
    }, [])


    const transfer = (e) => {
        const data = {
            user: acc_no,
            amount: amount
        }
        axios.post(`${api}/transfer/${user._id}`, { ...data })
        .then(function (response) {
            if(response.status === 200){

                localStorage.setItem('transaction',JSON.stringify(response.data) );
            }
            setSuccess(true)
          });
        e.preventDefault();
    };

    if (success) {
        return <Redirect to={`/success`} />;
    }
    return (
        <Layout >
            <br />
            <div>
                <h1>User Information</h1>
                <h3>Transact from</h3>
                <br />
                <table>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACCOUNT NUMBER</th>
                    <th>CURRENT BALANCE</th>
                    <th>LOCATION</th>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.acc_no}</td>
                        <td>{user.balance}</td>
                        <td>{user.location}</td>
                    </tr>
                </table>
                <form onSubmit={transfer}>
                    <br /><br /><h3>Transact To</h3><br />
                    <table>
                        <tr><td>Transfer To:</td><td>
                            <select name="user"
                                value={acc_no} name="toUser"
                                onChange={(e) => setAcc(e.target.value)}>
                                <option>Select User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                {customer.map((item) => (
                                    item._id !== user._id &&
                                    <option value={item.acc_no} name="toUser"
                                        onChange={(e) => setAcc(e.target.value)}>{item.name}</option>
                                ))}
                            </select>
                        </td></tr>
                        <tr>
                            <td>Amount:</td><td><input type="number" name="amount" value={amount}
                                onChange={(e) => setAmount(e.target.value)} /></td>
                        </tr>
                    </table>
                    <br />
                    <button className="btn-submit" type="submit" value="Submit" align="center">Submit</button>
                </form>
                <br /><br /><br />
            </div>
        </Layout>
    )
}