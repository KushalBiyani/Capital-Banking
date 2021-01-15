import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../actions/customer-actions";
import { postTransfers } from "../../actions/transfer-actions";
import { LoopCircleLoading } from 'react-loadingg';

export default function Transfer(props) {
    const UserId = props.match.params.id;
    const [acc_no, setAcc] = useState("");
    const [amount, setAmount] = useState("");
    const customer = useSelector(state => state.customer.customers);
    const status = useSelector(state => state.transfer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch])

    const transfer = (e) => {
        if (!acc_no) {
            alert("Please Select the User");
            e.preventDefault()
            return false;
        }
        else if(amount <= 0){
            alert("Amount is Incorrect");
            e.preventDefault()
            return false;
        }
        else{
            const form = {
                userId: UserId,
                acc_no: acc_no,
                amount: amount
            }
            dispatch(postTransfers(form));
            e.preventDefault();
        }
    };
    if (status === 200) {
        return <Redirect to={`/success`} />;
    }
    if (status === 201) {
        return <Redirect to={`/error`} />;
    }
    if (customer.length > 0) {
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
                                    {customer.map(
                                        (item) =>
                                            item._id === UserId && (
                                                <div className="col-6" key={item._id}>
                                                    <h5>{item.name}</h5>
                                                    <h5>{item.acc_no}</h5>
                                                    <h5>{item.balance}</h5>
                                                </div>
                                            ))}
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
                                                defaultValue=""
                                            >
                                                <option disabled={true} value="">Select User</option>
                                                {customer.map(
                                                    (item) =>
                                                        item._id !== UserId && (<option
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
    else {
        return (<LoopCircleLoading />)
    }

}
