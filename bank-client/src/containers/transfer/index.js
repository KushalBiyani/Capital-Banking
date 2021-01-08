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
            <br />
            <div>
                <h1>User Information</h1>
                <h3>Transact from</h3>
                <br />
                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ACCOUNT NUMBER</th>
                        <th>CURRENT BALANCE</th>
                        <th>LOCATION</th></tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.acc_no}</td>
                        <td>{user.balance}</td>
                        <td>{user.location}</td>
                    </tr>
                    </tbody>
                </table>
                <form onSubmit={transfer}>
                    <br />
                    <br />
                    <h3>Transact To</h3>
                    <br />
                    <table>
                    <tbody>
                        <tr>
                            <td>Transfer To:</td>
                            <td>
                                <select
                                    value={acc_no}
                                    name="toUser"
                                    onChange={(e) => setAcc(e.target.value)}
                                >
                                    <option disabled>
                                        Select User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </option>
                                    {customer.map(
                                        (item) =>
                                            item._id !== user._id && (
                                                <option
                                                    value={item.acc_no}
                                                    name="toUser"
                                                    key={item._id}
                                                    onChange={(e) => setAcc(e.target.value)}
                                                >
                                                    {item.name}
                                                </option>
                                            )
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Amount:</td>
                            <td>
                                <input
                                    type="number"
                                    name="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br />
                    <button
                        className="btn-submit"
                        type="submit"
                        value="Submit"
                        align="center"
                    >
                        Submit
          </button>
                </form>
                <br />
                <br />
                <br />
            </div>
        </Layout>
    );
}
