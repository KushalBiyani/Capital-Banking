import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../actions/transaction-actions"
import { LoopCircleLoading } from 'react-loadingg';

export default function History() {
    const transaction = useSelector(state => state.transaction.transactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTransaction());
    }, [dispatch])
    if (transaction.length > 0) {
        return (
            <Layout >
                <div id="history">
                    <h1>Transaction History</h1><br />
                    <table className="flat-table flat-table-1 table-responsive-md">
                        <thead>
                            <tr>
                                <th>Transaction Number</th>
                                <th>SENDER NAME</th>
                                <th>RECIEVER NAME</th>
                                <th>AMOUNT</th></tr>
                        </thead>
                        <tbody>
                            {transaction.map((item) => (
                                <tr key={item._id}>
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
    else {
        return (<LoopCircleLoading/>)
    }

}