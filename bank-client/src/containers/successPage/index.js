import React ,{useEffect , useState} from 'react';
import { Redirect } from "react-router-dom";
import './style.css';

export default function SuccessPage() {
    const [redirect, setRedirect] = useState(false)
    const transaction = window.localStorage.getItem("transaction");
    var token = JSON.parse(transaction);
    useEffect(() => {
        setInterval(() => {
            setRedirect(true);
        }, 4000);
    }, [redirect])
      if (redirect) {
        return <Redirect to={`/history`} />;
    }
    return (
        <div id ="success">
        <div className="container" id ="success" >
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
                            <div className="text" >
                                &emsp;&emsp;<span >Amount :</span>&emsp;&emsp;&emsp;&emsp;&ensp;<span>{token.amount}</span><br />
                                &emsp;&emsp;<span>Sender :</span>&emsp;&emsp;&emsp;&emsp;<span>{token.sendersName}</span><br />
                                &emsp;&emsp;<span>Reciever :</span>&emsp;&emsp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&nbsp;<span>{token.recieversName}</span>
                            </div>
                            <div className="order-details"><br></br>
                                <div className="order-number-label">Transaction Number</div>
                                <div className="order-number">{token.transactionNumber}</div>
                            </div>
                            <div className="order-footer">Thank you!</div>
                        </div>
                    </div>
                    
                </div>
            </div>
             <div className="continue" ><h3>Redirecting...</h3></div> 
        </div>
</div>
    )
}