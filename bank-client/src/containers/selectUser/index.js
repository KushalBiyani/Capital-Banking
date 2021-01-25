import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../actions/customer-actions";
import { reset } from "../../actions/transfer-actions";
import { LoopCircleLoading } from 'react-loadingg';

export default function SelectUser() {
    const customer = useSelector(state => state.customer.customers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomers());
        dispatch(reset());
    }, [dispatch])
    if (customer.length > 0) {
        return (
            <Layout >
                <div id="transfer">
                    <h1>Transact From</h1><br />
                    <table className="flat-table flat-table-1 table-responsive-md">
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
                                    <td><Link to={`/transact/${item._id}`}><button type="submit" value="<%=item.id%>" className="btn btn-transfer">Transfer </button></Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br /><br />
                </div>
            </Layout>
        )
    }
    else {
        return (<LoopCircleLoading/>)
    }

}