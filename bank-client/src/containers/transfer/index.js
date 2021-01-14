import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { api } from "../../url";

export default function Transfer(props) {
    const [status, setStatus] = useState("loading");
    const UserId = props.match.params.id;
    const [acc_no, setAcc] = useState("");
    const [amount, setAmount] = useState("");
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        fetch(`${api}/custDetails`)
            .then((response) => response.json())
            .then((data) => {
                setCustomer(data);
            });
    }, []);

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`${api}/transact/${UserId}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            });
    }, [UserId]);

    const transfer = (e) => {
        const data = {
            user: acc_no,
            amount: amount,
        };
        axios
            .post(`${api}/transfer/${user._id}`, { ...data })
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem("transaction", JSON.stringify(response.data));
                    setStatus("success");
                }
                if (response.status === 201) {
                    setStatus("error");
                }
            });
        e.preventDefault();
    };
    if (status === "success") {
        return <Redirect to={`/success`} />;
    }
    if (status === "error") {
        return <Redirect to={`/error`} />;
    }
    return (
        <Layout>
            <div>
                <h1>User Information</h1>
                <br />
                <form onSubmit={transfer}>
                    <div className="row transfer">
                        <div className="col-md-5 card">
                            <h3>Transfer From</h3>
                            <div className="row">
                                <div className="col-6">
                                    <h5>Name</h5>
                                    <h5>Account Number</h5>
                                    <h5>Current Balance</h5>
                                </div>
                                <div className="col-6">
                                    <h5>{user.name}</h5>
                                    <h5>{user.acc_no}</h5>
                                    <h5>{user.balance}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 card">
                            <h3>Transfer To</h3>
                            <div className="row">
                                <div className="col-6">
                                    <h5>Name</h5>
                                    <h5>Account Number</h5>
                                    <h5>Amount</h5>
                                </div>
                                <div className="col-6">
                                    <h5 className="input-1">
                                    <select 
                                    className="form-control"
                                    name="toUser"
                                    onChange={(e) => setAcc(e.target.value)}
                                >
                                                <option selected disabled>Select User</option>
                                                {customer.map(
                                                    (item) =>
                                                        item._id !== user._id && (<option
                                                    value={item.acc_no}
                                                    name="toUser"
                                                    key={item._id}
                                                    onChange={(e) => setAcc(e.target.value)}
                                                >
                                                    {item.name}
                                                </option>
                                                        ))}
                                        </select>
                                    </h5>
                                    <h5>{acc_no} &nbsp; </h5>
                                    <h5 className="input-1">
                                        <input className="form-control" label="Amount" type="number" name="amount" value={amount}
                                            required onChange={(e) => setAmount(e.target.value)} />
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn" type="submit" value="Submit" align="center">
                        Transfer </button>
                </form>
            </div>
            <br /><br />
        </Layout>
    );
}
