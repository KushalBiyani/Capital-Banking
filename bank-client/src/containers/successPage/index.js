import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.css';

export default function SuccessPage() {
    const transaction = useSelector(state => state.transfer.transaction);
    const [counter, setCounter] = useState(8);

    setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
        return <Redirect to={`/history`} />;
    }
    return (
        <div id="success">
            <div className="container" id="success" >
                <div className="printer-top">
                </div>
                <div className="paper-container">
                    <div className="printer-bottom">
                    </div>
                    <div className="paper zig-zag-bottom ">
                        <div className="main-contents">
                            <div className="success icon">&#10004;</div>
                            <div className="success-title">
                                Payment Successful
                        </div>
                            <div className="success-description">
                                <div className="row">
                                    <div className="col-md-6 info"><h5 >Amount  </h5><h5>Sender </h5><h5>Reciever </h5></div>
                                    <div className="col-md-6 des"><h5 >{transaction[0].amount}</h5><h5>{transaction[0].sendersName}</h5><h5>{transaction[0].recieversName}</h5></div>
                                    <div></div>
                                </div>
                                <div className="order-details"><br></br>
                                    <div className="order-number-label">Transaction Number</div>
                                    <div className="order-number">{transaction[0].transactionNumber}</div>
                                </div>
                                <div className="order-footer">Thank you!</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <h3>Redirecting in {counter} seconds</h3>
        </div>
    )
}